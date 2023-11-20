import {
  HightLightContent,
  HightLightHeader,
} from '@components/common/data/hightlight';
import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Spacer,
  Stack,
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

export default function DescPage() {
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

  return (
    <DashboardLayout activeMenu={'account-desc'}>
      <Flex mt={6} px={2} w={'100%'} mb={3}>
        <Box>
          <PageTitle
            titleSize={17}
            titleColor={'black'}
            subtitleColor={'gray'}
            subtitleSize={14}
            icon={<PiArrowsLeftRightBold fontSize={24} color="white" />}
            title={'DESC'}
            subtitle={' / Direction Experience et Serivce Client'}
          />
        </Box>
        <Spacer />
        <Box mr={1}>
          <IconedButton message={'Nouvelle taches'} rightIcon={<BsPlusLg />} />
        </Box>
      </Flex>

      <Stack w={'100%'} p={3}>
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
                title={titles.title.ca.title_mobile}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
            <Divider mt={2} />
            <Box h={'60%'}>
              <PieCharts />
            </Box>
          </GridItem>
          <GridItem bg={gstyle.bg} p={gstyle.p} borderRadius={gstyle.radius}>
            <Box>
              <TagTitle
                title={titles.title.ca.title_mobile}
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
                title={titles.title.ca.title_mobile}
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
                title={titles.title.ca.title_mobile}
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
                title={titles.title.ca.title_mobile}
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
            rowSpan={'2'}
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
          <GridItem bg={gstyle.bg} p={gstyle.p} borderRadius={gstyle.radius}>
            <Box>
              <TagTitle
                title={titles.title.ca.title_mobile}
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
                title={titles.title.ca.title_mobile}
                size={16}
                subtitle={titles.title.ca.subtitle_mobile}
              />
            </Box>
            <Divider mt={2} />
            <Box>
              <ValuesData />
            </Box>
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
