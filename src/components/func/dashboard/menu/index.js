import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '@chakra-ui/react';
import { DashboardLink } from '@components/common/link/dashboard';
import { messages, routes } from '@theme';
import { BsFillMenuAppFill, BsGraphUp } from 'react-icons/bs';
import { IoHome } from 'react-icons/io5';

export const DashboardTabs = ({ activeLink }) => {
  const {
    layout: {
      dashboard: { tabs },
    },
  } = messages.components;

  const menus = [
    {
      name: 'Acceuil',
      icon: <IoHome />,

      active: 'reporting',
    },
    {
      name: 'Test',
      icon: <BsGraphUp />,
      active: 'home',
    },
    {
      name: 'Mor',
      icon: <BsGraphUp />,
      active: 'dsi',
    },
  ];

  return (
    <Box>
      <Tabs
        variant={'soft-rounded'}
        colorScheme={'facebook'}
        defaultIndex={activeLink.defaultTab}
      >
        <TabList
          border={{ base: 'none', lg: 2 }}
          borderStyle={{ base: 'none', lg: 'solid' }}
          borderRadius={{
            base: 'none',
            lg: '100rem',
          }}
        >
          <Tab fontSize={'1.5ex'}>{tabs.initial}</Tab>
          <Tab fontSize={'1.5ex'} isDisabled>
            {tabs.secondary}
          </Tab>
        </TabList>

        <TabPanels pt={2} px={0}>
          <TabPanel px={0}>
            <VStack alignItems={'flex-start'} w={'100%'}>
              {menus.map((menu, i) => (
                <DashboardLink
                  key={i}
                  redirectOn={routes.pages.dashboard.initial}
                  active={activeLink.activeOption == menu.active}
                  icon={menu.icon}
                  message={menu.name}
                />
              ))}
            </VStack>
          </TabPanel>

          <TabPanel px={0}>
            <VStack alignItems={'flex-start'} w={'100%'}>
              <DashboardLink
                redirectOn={routes.pages.dashboard.initial}
                active={activeLink.activeOption == 'home'}
                icon={<IoHome />}
                message={
                  'messages.components.layout.dashboard.tabs.entreprise.menu.home'
                }
              />
              <DashboardLink
                redirectOn={routes.pages.dashboard.initial}
                active={activeLink.activeOption == 'reporting'}
                icon={<BsGraphUp />}
                message={
                  'messages.components.layout.dashboard.tabs.entreprise.menu.reporting'
                }
              />
              <DashboardLink
                redirectOn={routes.pages.dashboard.initial}
                active={activeLink.activeOption == 'applications'}
                icon={<BsFillMenuAppFill />}
                message={
                  'messages.components.layout.dashboard.tabs.entreprise.menu.applications'
                }
              />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
