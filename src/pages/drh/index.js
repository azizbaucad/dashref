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
import {
  scroll_customize,
  scroll_x_customize,
} from '@components/common/styleprops';

export default function Dsipage() {
  const gstyle = gird.style;
  const {
    realizes,
    difficults,
    challenges,
    coordinationPoint,
    carePoint,
    challengeInProgress,
  } = hightlightStatus;

  const statusLenght = 6;

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
    {
      name: carePoint.label,
      icon: carePoint.icon,
      iconColor: carePoint.style.iconColor,
    },
    {
      name: challengeInProgress.label,
      icon: challengeInProgress.icon,
      iconColor: challengeInProgress.style.iconColor,
    },
  ];

  return (
    <DashboardLayout activeMenu={'account-drh'}>
      <Flex mt={6} px={2} w={'100%'} mb={3}>
        <Box>
          <PageTitle
            titleSize={17}
            titleColor={'black'}
            subtitleColor={'gray'}
            subtitleSize={14}
            icon={<MdOutlineDesktopMac fontSize={24} color="white" />}
            title={'DRH'}
            subtitle={' / Direction des ressources humaines'}
          />
        </Box>
        <Spacer />
        <Box>
          <IconedButton message={'Faits Marquants'} rightIcon={<BsPlusLg />} />
        </Box>
      </Flex>

      <Stack p={3} w={'100%'} mb={3}>
        <Grid
          templateColumns={`repeat(${statusLenght}, 1fr)`}
          gap={1}
          /* h={`calc(100vh - 80px)`} */
          h={`calc(100vh - 130px)`}
          overflowX="auto"
          css={scroll_x_customize}
        >
          <GridItem
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
            w={gstyle.w}
            overflowY="auto"
            css={scroll_customize}
            mb={1}
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
            css={scroll_customize}
            mb={1}
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={coordinationPoint.style.iconColor}
                />
                <TagTitle title={coordinationPoint.label} size={16} />
              </HStack>
            </Box>

            <Divider mb={3} mt={3} />
            <Stack>
              <Stack mt={2}>
                <HightLightContent
                  title="Lorem Ipsum Title"
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
            css={scroll_customize}
            mb={1}
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
                  title="Lorem Ipsum Title"
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
            css={scroll_customize}
            bg={gstyle.bg_h}
            borderRadius={gstyle.radius}
            width={'100%'}
            w={gstyle.w}
            mb={1}
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
                title="Lorem Ipsum Title"
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
                title="Lorem Ipsum Title"
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
                title="Lorem Ipsum Title"
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
          <GridItem
            p={gstyle.p}
            overflowY="auto"
            css={scroll_customize}
            bg={gstyle.bg_h}
            borderRadius={gstyle.radius}
            width={'100%'}
            w={gstyle.w}
            mb={1}
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={carePoint.style.iconColor}
                />
                <TagTitle title={"Point d'attention"} size={16} />
              </HStack>
            </Box>
            <Divider mb={3} mt={3} />
            <Stack mt={1}>
              <HightLightContent
                title="Lorem Ipsum Title"
                body="Dysfonctionnements"
                iconBgColor={carePoint.style.iconColor}
                date={'12-03-2023'}
                bgColor={carePoint.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={carePoint.style.iconColor}
              />

              <HightLightContent
                title="Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus"
                iconBgColor={carePoint.style.iconColor}
                date={'12-03-2023'}
                bgColor={carePoint.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={carePoint.style.iconColor}
              />
              <HightLightContent
                title="Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus sur 2023 vs 20 en 2022 / 2 en Oct"
                iconBgColor={carePoint.style.iconColor}
                date={'12-03-2023'}
                bgColor={carePoint.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={carePoint.style.iconColor}
              />
            </Stack>
          </GridItem>
          <GridItem
            p={gstyle.p}
            overflowY="auto"
            css={scroll_customize}
            bg={gstyle.bg_h}
            borderRadius={gstyle.radius}
            width={'100%'}
            w={gstyle.w}
            mb={1}
          >
            <Box>
              <HStack>
                <BiSolidSquareRounded
                  fontSize={18}
                  color={challengeInProgress.style.iconColor}
                />
                <TagTitle title={'Challenge en cours'} size={16} />
              </HStack>
            </Box>
            <Divider mb={3} mt={3} />
            <Stack mt={1}>
              <HightLightContent
                title="Lorem Ipsum Title"
                body="Dysfonctionnements"
                iconBgColor={challengeInProgress.style.iconColor}
                date={'12-03-2023'}
                bgColor={challengeInProgress.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={challengeInProgress.style.iconColor}
              />

              <HightLightContent
                title="Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus"
                iconBgColor={challengeInProgress.style.iconColor}
                date={'12-03-2023'}
                bgColor={challengeInProgress.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={challengeInProgress.style.iconColor}
              />
              <HightLightContent
                title="Lorem Ipsum Title"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                iconBgColor={challengeInProgress.style.iconColor}
                date={'12-03-2023'}
                bgColor={challengeInProgress.style.bgColor}
                radius="3px"
                blw="2px"
                p={1}
                blc={challengeInProgress.style.iconColor}
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
