import { HightLightContent } from '@components/common/data/hightlight';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
  Text,
} from '@chakra-ui/react';
import { TagTitle } from '@components/common/title';
import { DashboardLayout } from '@components/layout/dashboard';
import { gird, hightlightStatus } from '@theme';
import { getToken } from 'next-auth/jwt';
import { BsPlusLg } from 'react-icons/bs';

import { PageTitle } from '@components/common/title/page';
import { MdOutlineDesktopMac, MdSearchOff } from 'react-icons/md';
import { BiSolidSquareRounded } from 'react-icons/bi';
import { IconedButton } from '@components/common/button';

export default function Dsipage() {
  const gstyle = gird.style;
  const { realizes, difficults, challenges, coordinationPoint } =
    hightlightStatus;

  const statusLenght = 5;

  const status = [
    {
      name: realizes.label,
      icon: realizes.icon,
      iconColor: realizes.style.iconColor,
    },
    {
      name: difficults.label,
      icon: difficults.icon,
      iconColor: difficults.style.iconColor,
    },
    {
      name: challenges.label,
      icon: challenges.icon,
      iconColor: challenges.style.iconColor,
    },
  ];

  return (
    <DashboardLayout activeMenu={'account-dsi'}>
      <Flex p={3} w={'100%'} alignItems={'center'}>
        <Box>
          <PageTitle
            titleSize={17}
            titleColor={'black'}
            subtitleColor={'gray'}
            subtitleSize={14}
            icon={<MdOutlineDesktopMac fontSize={24} color="white" />}
            title={'DSI'}
            subtitle={" / Direction des systèmes d'information"}
          />
        </Box>
        <Spacer />
        <Box>
          <IconedButton message={'Nouvelle taches'} rightIcon={<BsPlusLg />} />
        </Box>
      </Flex>

      <Stack p={3} w={'100%'}>
        <Grid
          templateColumns={`repeat(${statusLenght}, 1fr)`}
          gap={2}
          h={'85vh'}
          overflowX="auto"
        >
          <GridItem
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
            w={gstyle.w}
            overflowY="auto"
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={realizes.style.iconColor}
                />
                <TagTitle title={'Réalisés'} size={16} />
              </HStack>
            </Box>
            <Divider mb={3} mt={3} />
            <Stack alignItems="center" mt={10}>
              <MdSearchOff color="#cccccc" size={85} />
              <Text color="#b2b2b2"> Pas de mise à jour</Text>
            </Stack>
          </GridItem>
          <GridItem
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
            w={gstyle.w}
            overflowY="auto"
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={coordinationPoint.style.iconColor}
                />
                <TagTitle title={'Coordonations'} size={16} />
              </HStack>
            </Box>

            <Divider mb={3} mt={3} />
            <Stack>
              <Stack mt={2}>
                <HightLightContent
                  title="DMGP • Lorem Ipsum Title"
                  body="Dysfonctionnements Promo Bonus sur 2023 vs 20 en 2022 / 2 en Oct, 2 en Sept 2023 après une période"
                  date={'12-03-2023'}
                  bgColor={coordinationPoint.style.bgColor}
                  radius="3px"
                  blw="2px"
                  p={1}
                  blc={coordinationPoint.style.iconColor}
                />
              </Stack>
            </Stack>
          </GridItem>
          <GridItem
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
            w={gstyle.w}
            overflowY="auto"
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={challenges.style.iconColor}
                />
                <TagTitle title={'Enjeux'} size={16} />
              </HStack>
            </Box>
            <Divider mb={3} mt={3} />
            <Stack>
              <Stack mt={2}>
                <HightLightContent
                  title="DMGP • Lorem Ipsum Title"
                  body="Dysfonctionnements Promo Bonus sur 2023"
                  iconBgColor={challenges.style.iconColor}
                  date={'12-03-2023'}
                  bgColor={challenges.style.bgColor}
                  radius="3px"
                  blw="2px"
                  p={1}
                  blc={challenges.style.iconColor}
                />
              </Stack>
            </Stack>
          </GridItem>

          <GridItem
            p={gstyle.p}
            overflowY="auto"
            bg={gstyle.bg_h}
            borderRadius={gstyle.radius}
            width={'100%'}
            w={gstyle.w}
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={difficults.style.iconColor}
                />
                <TagTitle title={'Difficultés'} size={16} />
              </HStack>
            </Box>
            <Divider mb={3} mt={3} />
            <Stack mt={1}>
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Dysfonctionnements"
                iconBgColor={difficults.style.iconColor}
                date={'12-03-2023'}
                bgColor={difficults.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={difficults.style.iconColor}
              />

              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus"
                iconBgColor={difficults.style.iconColor}
                date={'12-03-2023'}
                bgColor={difficults.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={difficults.style.iconColor}
              />
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus sur 2023 vs 20 en 2022 / 2 en Oct"
                iconBgColor={difficults.style.iconColor}
                date={'12-03-2023'}
                bgColor={difficults.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={difficults.style.iconColor}
              />
            </Stack>
          </GridItem>
        </Grid>
      </Stack>
    </DashboardLayout>
  );
}

export const getServerSideProps = async ({ req }) => {
  const secret = process.env.NEXTAUTH_SECRET;
  const session = await getToken({ req, secret });

  return {
    props: {
      token: session,
    },
  };
};
