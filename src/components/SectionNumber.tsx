import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function SectionNumber({ number }: any) {
  return (
    <Stack direction="row" alignItems="center">
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.08579 1.41421C7.86683 0.633165 9.13316 0.633165 9.91421 1.41421L15.5858 7.08579C16.3668 7.86683 16.3668 9.13316 15.5858 9.91421L9.91421 15.5858C9.13316 16.3668 7.86683 16.3668 7.08579 15.5858L1.41421 9.91421C0.633165 9.13316 0.633165 7.86683 1.41421 7.08579L7.08579 1.41421Z"
          fill="#C4C4C4"
        />
        <path
          d="M7.08579 1.41421C7.86683 0.633165 9.13316 0.633165 9.91421 1.41421L15.5858 7.08579C16.3668 7.86683 16.3668 9.13316 15.5858 9.91421L9.91421 15.5858C9.13316 16.3668 7.86683 16.3668 7.08579 15.5858L1.41421 9.91421C0.633165 9.13316 0.633165 7.86683 1.41421 7.08579L7.08579 1.41421Z"
          fill="url(#paint0_linear)"
        />
        <path
          d="M7.08579 1.41421C7.86683 0.633165 9.13316 0.633165 9.91421 1.41421L15.5858 7.08579C16.3668 7.86683 16.3668 9.13316 15.5858 9.91421L9.91421 15.5858C9.13316 16.3668 7.86683 16.3668 7.08579 15.5858L1.41421 9.91421C0.633165 9.13316 0.633165 7.86683 1.41421 7.08579L7.08579 1.41421Z"
          fill="url(#paint1_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="0"
            y1="0"
            x2="18.8798"
            y2="2.43707"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#00A272" />
            <stop offset="1" stop-color="#00A298" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="0"
            y1="0"
            x2="18.8798"
            y2="2.43707"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#7234F5" />
            <stop offset="1" stop-color="#3D70F0" />
          </linearGradient>
        </defs>
      </svg>

      <Text fontFamily="ClashDisplay-SemiBold" letterSpacing="110%">
        0{number}&nbsp;&nbsp;—&nbsp;&nbsp;04
      </Text>
    </Stack>
  );
}

export default SectionNumber;
