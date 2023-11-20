import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import { Fragment } from 'react';

export const RowTexts = ({ texts, color }) => {
  return (
    <Box>
      {texts.map((text, i) => (
        <Text
          cursor={text.cursor}
          key={i}
          pl={text.pl}
          fontSize={text.fontSize}
          color={text.color ?? color}
          textDecoration={text.textDecoration}
          as="span"
          fontWeight={text.fontWeight}
        >
          {text.content}
        </Text>
      ))}
    </Box>
  );
};

export const truncate = (input, n) =>
  input?.length > n ? `${input.substring(0, n - 2)}...` : input;
