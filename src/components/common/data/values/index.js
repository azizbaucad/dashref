import { HStack, Text, VStack } from '@chakra-ui/react';
import { RowTexts } from '@components/common/text';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

export const ValuesData = () => {
  const values = [
    {
      type: 'text',
      content: 'Hebdo',
      fontSize: 16,
      fontWeight: 600,
      color: '#666666',
      fontStyle: 'normal',
      fontStretch: 'normal',
    },
    {
      type: 'list',
      list: [
        {
          type: 'text',
          content: '643.79',
          fontSize: 20,
          fontStyle: 'normal',
          fontStretch: 'normal',
          color: '#000000',
          fontWeight: 'bold',
        },
        {
          type: 'text',
          content: 'GXOF',
          fontSize: 12,
          fontWeight: 'bold',
          pl: 1,
          color: '#000000',
          as: 'b',
        },
      ],
      icon: (
        <BsArrowDown
          width={2}
          as={'b'}
          size={'.9rem'}
          color="#cd3c14"
          style={{
            fontWeight: '600',
            fontSize: '24px',
            marginTop: '10px',
            marginLeft: '1px',
          }}
        />
      ),
    },
    {
      type: 'list',
      list: [
        {
          content: 'Δ Obj/VR',
          fontSize: 12,

          fontWeight: '600',
          color: '#000000',
          as: 'b',
        },
        {
          content: '=',
          fontSize: 13,
          pl: 0,
          color: 'gray',
        },
        {
          content: '-156.08 M',
          fontSize: 13,
          fontWeight: '600',
          pl: 0,
          color: 'red',
        },
      ],
    },

    {
      type: 'list',
      list: [
        {
          content: '15.03 %',
          fontSize: 13,
          fontWeight: '600',
          color: '#32c832',
          as: 'b',
        },
        {
          content: '/',
          fontSize: 13,
          pl: 1,
          color: '#7A7876',
          as: 'b',
        },
        {
          content: 'S-1',
          fontSize: 12,
          pl: 1,
          color: '#000000',
          fontWeight: '600',
        },
      ],
    },
  ];

  return (
    <VStack alignItems={'start'} gridGap={0}>
      {values.map((text, i) =>
        text.type === 'text' ? (
          <HStack textAlign={'left'} gridGap={0} alignItems={'end'} key={i}>
            <Text
              pl={text.pl}
              fontSize={text.fontSize}
              color={text.color}
              as={text.as}
            >
              {text.content}
            </Text>
            {text.icon}
          </HStack>
        ) : (
          <HStack gridGap={1} key={i}>
            <RowTexts texts={text.list} alignItems={'end'} />
            {text.icon}
          </HStack>
        )
      )}
    </VStack>
  );
};
