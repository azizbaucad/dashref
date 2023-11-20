import { Box, Divider, VStack } from '@chakra-ui/react';
import { DashboardLink } from '@components/common/link/dashboard';
import { AvatarMenu } from '@components/func/user/Avatar';
import { colors, images, routes } from '@theme';
import Image from 'next/image';
import { AiFillHome, AiFillShop } from 'react-icons/ai';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa';
import { RiShakeHandsFill } from 'react-icons/ri';
import {
  scroll_customize,
  scroll_customize_side,
} from '@components/common/styleprops';

export const Sidebar = ({ activeLink }) => {
  const menus = [
    {
      name: 'Home',
      icon: <AiFillHome fontSize={20} />,
      active: 'home',
      url: routes.pages.dashboard.initial,
    },
    {
      name: 'DMGP',
      icon: <AiFillShop fontSize={20} />,
      active: 'dmgp',
      url: routes.pages.dmgp.initial,
    },
    {
      name: 'OFMS',
      icon: <PiArrowsLeftRightBold fontSize={20} />,
      active: 'ofms',
      url: routes.pages.ofms.initial,
    },
    {
      name: 'DESC',
      icon: <FaUser fontSize={20} />,
      active: 'desc',
      url: routes.pages.desc.initial,
    },
    {
      name: 'DV',
      icon: <RiShakeHandsFill fontSize={20} />,
      url: routes.pages.dv.initial,
      active: 'dv',
    },
    {
      name: 'DRJ',
      icon: <AiFillShop fontSize={20} />,
      active: 'drj',
      url: routes.pages.drj.initial,
    },
    {
      name: 'DSI',
      icon: <AiFillShop fontSize={20} />,
      active: 'dsi',
      url: routes.pages.dsi.initial,
    },
    {
      name: 'DRH',
      icon: <AiFillShop fontSize={20} />,
      active: 'drh',
      url: routes.pages.drh.initial,
    },
  ];

  return (
    <Box h={'100%'}>
      <VStack
        bg={colors.primary.gray}
        gap={'none'}
        justifyContent={'start'}
        h={'100%'}
        w={'5.55vw'}
        position={'fixed'}
      >
        <VStack padding={2}>
          <Box h={59} w={59} pos={'relative'} mb={4} mt={3}>
            <Image {...images.logo} alt={'logo'} fill />
          </Box>
          <Divider mb={6} size={'lg'} />

          <VStack
            spacing={0.1}
            width={'5.5vw'}
            alignItems={'center'}
            h="64vh"
            overflowY="auto"
            css={scroll_customize_side}
          >
            {menus.map((menu, i) => (
              <DashboardLink
                key={i}
                redirectOn={menu.url}
                active={activeLink?.activeOption == menu.active}
                icon={menu.icon}
                message={menu.name}
              />
            ))}
          </VStack>
        </VStack>
        <VStack p={2} marginBottom={4}>
          <AvatarMenu />
        </VStack>
      </VStack>
    </Box>
  );
};
