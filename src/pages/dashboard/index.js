import {
  HightLightContent,
  HightLightHeader,
} from '@components/common/data/hightlight';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Spacer,
  Select,
  Stack,
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { ValuesData } from '@components/common/data/values';
import { TagTitle } from '@components/common/title';
import { DashboardLayout } from '@components/layout/dashboard';
import { gird, hightlightStatus, titles } from '@theme';
import { getToken } from 'next-auth/jwt';
import { BsPlusLg } from 'react-icons/bs';
import { PageTitle } from '@components/common/title/page';
import { PiArrowsLeftRightBold } from 'react-icons/pi';
import { IconedButton } from '@components/common/button';
import { HorizontalBarChart } from '@components/common/charts/barcharts';
import { PieCharts } from '@components/common/charts/piecharts';
import { scroll_customize } from '@components/common/styleprops';
import { LineCharts } from '@components/common/charts/linecharts';
import { AiFillHome } from 'react-icons/ai';

export default function DmgpPage() {
  const gstyle = gird.style;
  const { realizes, difficults, challenges, coordinationPoint } =
    hightlightStatus;

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
      name: coordinationPoint.label,
      icon: coordinationPoint.icon,
      iconColor: coordinationPoint.style.iconColor,
    },
  ];

  const listoptions = [
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40,
  ];

  return (
    <DashboardLayout activeMenu={'account-home'}>
      <Flex mt={6} px={2} w={'100%'} mb={3}>
        <Box>
          <PageTitle
            titleSize={17}
            titleColor={'black'}
            subtitleColor={'gray'}
            subtitleSize={14}
            icon={<AiFillHome fontSize={24} color="white" />}
            title={'Synthèse'}
            subtitle={'/ Dashboard Codir Sonatel'}
          />
        </Box>
        <Spacer />

        <Box>
          <Box mr={1} bg={'#fff'} borderRadius={6}>
            <Select type="text" overflowY={'auto'} css={scroll_customize}>
              {listoptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </Box>
        </Box>
      </Flex>

      <Stack p={3} w={'100%'} mb={3}>
        <Grid
          templateRows="repeat(6, 2fr)"
          templateColumns="repeat(4, 1fr)"
          gap={2}
          h={gstyle.h * 5 + 'px'}
        >
          <GridItem
            rowSpan={'2'}
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
          >
            <Box>
              <TagTitle
                title={'CA Mobile'}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
            <Divider mt={2} />
            <Box h={'55%'} w={'98%'}>
              <HorizontalBarChart />
            </Box>
          </GridItem>
          <GridItem
            rowSpan={'2'}
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
          >
            <Box>
              <TagTitle
                title={'Parc Mobile'}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
            <Divider mt={2} />
            <Box h={'55%'} w={'98%'}>
              <HorizontalBarChart />
            </Box>
          </GridItem>
          <GridItem bg={gstyle.bg} p={gstyle.p} borderRadius={gstyle.radius}>
            <Box>
              <TagTitle
                title={'CSAT'}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
          </GridItem>
          <GridItem bg={gstyle.bg} p={gstyle.p} borderRadius={gstyle.radius}>
            <Box>
              <TagTitle
                title={'DSAT'}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
          </GridItem>
          <GridItem
            rowSpan={3}
            colSpan={2}
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
            overflowY="auto"
            css={scroll_customize}
          >
            <Stack mt={3}>
              <HightLightHeader status={status} />
            </Stack>
            <Divider mb={3} mt={3} />
            <Stack mt={2}>
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                iconBgColor={realizes.style.iconColor}
                date={'12-03-2023'}
                bgColor={realizes.style.bgColor}
                icon={realizes.icon}
              />
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                iconBgColor={difficults.style.iconColor}
                date={'12-03-2023'}
                bgColor={difficults.style.bgColor}
                icon={difficults.icon}
              />
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus sur 2023 vs 20 en 2022 / 2 en Oct, 2 en Sept 2023 après une période"
                iconBgColor={challenges.style.iconColor}
                date={'12-03-2023'}
                bgColor={challenges.style.bgColor}
                icon={challenges.icon}
              />
              <HightLightContent
                title="DMGP • Lorem Ipsum Title"
                body="Dysfonctionnements Promo Bonus sur 2023 vs 20 en 2022 / 2 en Oct, 2 en Sept 2023 après une période"
                iconBgColor={coordinationPoint.style.iconColor}
                date={'12-03-2023'}
                bgColor={coordinationPoint.style.bgColor}
                icon={coordinationPoint.icon}
              />
            </Stack>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
          >
            {/* Content for Chiffre d'affaires */}
            <Box>
              <TagTitle title={'Commissions'} size={14} />
            </Box>
            <Divider mt={2} mb={2} />
            <HStack alignItems="flex-start">
              <Box>
                <ValuesData />
              </Box>

              <Box h={'15vh'}>
                <Divider
                  orientation="vertical"
                  ml={5}
                  mr={5}
                  borderWidth={'1px'}
                  borderColor={'#ebedf2'}
                />
              </Box>
              <Box>
                <ValuesData />
              </Box>
              <Box h={'15vh'}>
                <Divider
                  orientation="vertical"
                  ml={5}
                  mr={5}
                  borderWidth={'1px'}
                  borderColor={'#ebedf2'}
                />
              </Box>
              <Box>
                <ValuesData />
              </Box>
            </HStack>
          </GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            bg={gstyle.bg}
            p={gstyle.p}
            borderRadius={gstyle.radius}
          >
            {/* Content for Chiffre d'affaires */}
            <Box>
              <TagTitle title={'Marges'} size={14} />
            </Box>
            <Divider mt={2} mb={2} />
            <HStack alignItems="flex-start">
              <Box>
                <ValuesData />
              </Box>

              <Box h={'15vh'}>
                <Divider
                  orientation="vertical"
                  ml={5}
                  mr={5}
                  borderWidth={'1px'}
                  borderColor={'#ebedf2'}
                />
              </Box>
              <Box>
                <ValuesData />
              </Box>
              <Box h={'15vh'}>
                <Divider
                  orientation="vertical"
                  ml={5}
                  mr={5}
                  borderWidth={'1px'}
                  borderColor={'#ebedf2'}
                />
              </Box>
              <Box>
                <ValuesData />
              </Box>
            </HStack>
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
