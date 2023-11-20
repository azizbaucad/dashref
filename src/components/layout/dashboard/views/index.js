import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { DashboardTabs } from '@components/func/dashboard/menu';
import { Sidebar } from '@components/func/dashboard/sidebar';
import { AvatarMenu } from '@components/func/user/Avatar';
import { colors, images, messages } from '@theme';
import Image from 'next/image';
import { useRef } from 'react';
import { CgMenuLeft } from 'react-icons/cg';
import {
  scroll_customize,
  scroll_customize_bar,
} from '@components/common/styleprops';

export const DesktopDashboardLayoutView = ({ title, children, activeLink }) => {
  const {
    layout: {
      dashboard: { heading },
    },
  } = messages.components;
  return (
    <Stack h={'100vh'} w={'100%'} bgColor={'#cdd4e0'}>
      <HStack alignItems={'flex-start'} h={'100vh'} w={'100%'} gap={'none'}>
        {/* User Sidebar */}
        <Sidebar activeLink={activeLink} />
        {/* End User Sidebar */}

        {/* Dashboard Content */}
        <Stack
          h={'100%'}
          overflowY="auto"
          css={scroll_customize}
          w={'100%'}
          alignItems="center"
          marginLeft={'6vw'}
        >
          <Box w={'96%'}>
            <VStack>{children}</VStack>
          </Box>
        </Stack>
      </HStack>
    </Stack>
  );
};

export const MobileDashboardLayoutView = ({ children, activeLink, title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <VStack alignItems={'flex-start'} justifyContent={'flex-start'}>
      {/* User Sidebar */}
      <HStack
        alignItems={'center'}
        justifyContent={'space-between'}
        w={'100%'}
        p={19}
      >
        <HStack>
          <Box h={50} w={50} pos={'relative'}>
            <Image {...images.logo} alt={'logo'} fill />
          </Box>

          <Heading size={'sm'}>
            {'messages.components.layout.dashboard.mobileheading'}
          </Heading>
        </HStack>

        <Box ref={btnRef} onClick={onOpen}>
          <CgMenuLeft size={23} />
        </Box>
      </HStack>
      {/* End User Sidebar */}

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'full'}
      >
        <DrawerOverlay />
        <DrawerContent bgColor={colors.secondary.regular}>
          <DrawerCloseButton />
          <DrawerHeader>
            <HStack>
              <Box h={50} w={50} pos={'relative'}>
                <Image {...images.logo} alt={'logo'} fill />
              </Box>
              <Text>{messages.components.header.sitename}</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <DashboardTabs activeLink={activeLink} />
          </DrawerBody>

          <DrawerFooter>
            <Stack alignItems={'flex-start'} w={'100%'}>
              <AvatarMenu />
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <Box px={19}>
        <Heading size={'md'}>{title}</Heading>

        <VStack alignItems={'flex-start'}>{children}</VStack>
      </Box>
    </VStack>
  );
};
