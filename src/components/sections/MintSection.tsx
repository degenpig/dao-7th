import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Flex,
  Input,
  Button,
  Progress,
} from "@chakra-ui/react";
import MintComponent from "../MintComponent";

// Replace test data with your own
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function MintSection() {
  return (
    <Box p={{ base: 2, md: 4 }} mt="16" id="mint">
      <Flex width="100%" mt={10} justifyContent="center" alignItems="center">
        <Stack width={{ base: "100%", md: "50%" }}>
          <Stack direction="column">
            
          </Stack>
        </Stack>
      </Flex>

      <MintComponent />
    </Box>
  );
}
