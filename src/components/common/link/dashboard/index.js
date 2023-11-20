import { Heading, HStack, VStack } from '@chakra-ui/react';
import { colors } from '@theme';
import router from 'next/router';

export const DashboardLink = ({
  active,
  icon,
  message,
  redirectOn,
  isDisabled,
}) => {
  const behaviorProps = active
    ? {
        color: colors.primary.white,
        _hover: { cursor: 'pointer' },
        //bgColor: { base: colors.primary.gray, lg: colors.primary.gray },
        borderLeft: '4px',
        borderLeftColor: colors.primary.regular,
      }
    : {
        _hover: {
          cursor: 'pointer',
          color: colors.primary.white,
        },
        color: colors.primary.lightgray,
      };
  return (
    <VStack
      {...behaviorProps}
      alignItems={'center'}
      borderRadius={0}
      w={'100%'}
      marginBottom={5}
      fontWeight={400}
      {...(isDisabled
        ? {
            _hover: { cursor: 'not-allowed' },
            color: colors.primary.white,
          }
        : {
            onClick: () => router.push(redirectOn),
          })}
    >
      {icon}
      <Heading fontWeight={500} pl={1} pr={1} size={'xs'}>
        {message}
      </Heading>
    </VStack>
  );
};
