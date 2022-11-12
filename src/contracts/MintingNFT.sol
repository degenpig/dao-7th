// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintingNFT is ERC721Enumerable, Ownable {

    /* Contain the prices of 3 kinds of NFTs */
    uint256[] prices;
    /* Contain the current counts of NFTs which minted already */
    uint256[] currentCounts;

    /* 1 means that the specific address (or account) has already minted, so the account can not mint anymore*/
    mapping(address=>uint256) public alreadyMinted;

    /* Contains the address of i th voter, There are 111 voters total */
    address[] vtr_address;
    /* Contains category number of i th voter, There are 111 voters total */
    uint256[] vtr_category;

    /* Address of someone who deployed this contract */
    address payable creator;

    /* Constructor */
    constructor() ERC721("Real Estate Agent", "REA") {    
        creator = payable(msg.sender);

        prices = new uint256[](4);    
        currentCounts = new uint256[](4);

        prices[1] = 3300 ether;
        prices[2] = 660 ether;
        prices[3] = 330 ether;
        currentCounts[1] = 0;
        currentCounts[2] = 0;
        currentCounts[3] = 0;
    }

    function isOwner() public view returns (bool){
        if(msg.sender == owner()) return true;
        return false;
    }

    /* Mint NFT of [category] for owner. Retures true if owner else returns false. */
    function mintOwner(uint256 category) public {
        require(alreadyMinted[msg.sender] == 0, "Minted already."); 
        if(category == 1) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
        else if(category == 2) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
        else if(category == 3) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
        uint256 totalsupply = totalSupply();        
        _mint(msg.sender, totalsupply + 1);
		currentCounts[category]++;

        alreadyMinted[msg.sender] = 1;

        vtr_address.push(msg.sender);
        vtr_category.push(category);
    }

    /* Mint NFT of [category] */
    function mint(uint256 category) public payable{		
        require(alreadyMinted[msg.sender] == 0, "Minted already."); 
        if(category == 1) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
        else if(category == 2) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
        else if(category == 3) require(currentCounts[category] + 1 <= 50, "Can not exceed Max Count");        
	    require(msg.value >= prices[category], "Insufficient Payment");
        uint256 totalsupply = totalSupply();        
        _mint(msg.sender, totalsupply + 1);
		currentCounts[category]++;

        alreadyMinted[msg.sender] = 1;

        vtr_address.push(msg.sender);
        vtr_category.push(category);

        address payable current_owner = payable(owner());
        // This will payout the owner 93% of the contract balance.
        current_owner.transfer(msg.value * 93 / 100);
        // This will pay Community 7% of the initial sale.
        // You can remove this if you want, or keep it in to support Community for Ukraine donation.
        creator.transfer(msg.value * 7 / 100);
    }

    /* Returns current counts of NFTs that have been already minted */
    function myTotalSupply() public view returns(uint[] memory res){
        return currentCounts;
    }

    /* Returns yes if the sender has already minted a category of NFT */
    function mintedAlready() public view returns(uint256 res){
        return alreadyMinted[msg.sender];
    }

    /* This is a function of ERC721Enumerable interface */
    function supportsInterface(bytes4 interfaceId) public view
        override(ERC721Enumerable) returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /* This is a function of ERC721Enumerable interface */
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /* Withdraw the minting process for the specific address [_to] */ 
    function withdraw(address _to) public payable onlyOwner {
        payable(_to).transfer(msg.value);
    }

    /* This function makes a ProposalData instance from given parameters */
    function openProposalPublic(string memory title, string memory content, string[] memory options, bool opened) public onlyOwner{
        uint256 optlen = options.length;
        uint256[] memory result = new uint256[](optlen); 
        ProposalData memory aproposal = ProposalData(
            0,
            title,
            content,
            options,
            vtr_address,
            vtr_category,
            opened,
            result
        );
        
        aproposal.index = _proposals.length;
        _proposals.push(aproposal);
        uint n = aproposal.voters.length;
        for(uint i = 0; i < n; i++) {
            isVoter[aproposal.index][aproposal.voters[i]] = true;
        }
    }
    
    /* 
        ProposalData structure
        index : index of a proposal
        title : title of a proposal
        content : content (or description) of a proposal
        options : options of a proposal that a voter can vote
        voters : addresses of voters who take part in this proposal
        weights : weights of voters which depends on the category and the cost of NFT that a voter minted
        opened : true if this proposal is opened
        result : result of the proposal, which represents percent number of each options
    */
    struct ProposalData {
        uint256 index;
        string title;
        string content;
        string[] options;
        address[] voters;
        uint256[] weights;
        bool opened;
        uint256[] result;
    }

    /* List of proposals that have been submitted */
    ProposalData[] public _proposals;
 
    /* voted[i][j] = k means address i has already voted for j th proposal as k th option */
    mapping(address => mapping(uint256 => uint256)) voted;
    /* isVoter[i][j] == true means address j is allowed to vote for a i th proposal */
    mapping(uint256 => mapping(address => bool)) isVoter;

    /* Get all proposals array */
    function viewProposals() public view returns (ProposalData[] memory) {
        return _proposals;
    }
    
    /* Close [proposal_index] th proposal */
    function closeProposal(uint256 proposal_index) public onlyOwner {
        uint256 nProposals = _proposals.length;
        for(uint256 i = 0; i < nProposals; i++) {
            if(proposal_index == _proposals[i].index) {
                _proposals[i].opened = false;
                break;
            }
        }
        
        calc_result(proposal_index);
    }

    /* Calculation the result of [proposal_index] th proposal */
    function calc_result(uint256 proposal_index) private {
        uint256 nProposals = _proposals.length;
        uint256 i;
        for(i = 0; i < nProposals; i++) {
            if(proposal_index == _proposals[i].index) break;
        }
        require(i < nProposals, "Invalid Proposal index");
        ProposalData storage proposal = _proposals[i];
        uint256 n = proposal.voters.length;

        uint256[] memory values = new uint256[](proposal.options.length + 1);
        uint256 sum = 0;
 
        for(i = 0; i < n; i++){
            uint256 selected = voted[proposal.voters[i]][proposal_index]; 
            values[selected] += prices[proposal.weights[i]];
            sum += prices[proposal.weights[i]];
        }
        for(i = 0; i < proposal.options.length; i++) {
            values[i] = values[i] * 10000 / sum;
            proposal.result[i] = values[i];
        }
    }

    /* Vote to [option] th option of [proposal_index] th proposal */
    function vote(uint256 proposal_index, uint256 option) public {
        address voter = msg.sender;
        uint256 nProposals = _proposals.length;
        uint256 i;

        for(i = 0; i < nProposals; i++) {
            if(proposal_index == _proposals[i].index) break;
        }
        require(i < nProposals, "Invalid Proposal index");
        require(_proposals[i].opened == true, "Proposal is closed");
        require(isVoter[proposal_index][voter] == true, "Not allowed");
        require(voted[voter][proposal_index] == 0, "Already voted");
        require(option < _proposals[i].options.length, "Invalid Option index");
        
        voted[voter][proposal_index] = option;
    }
}
