import {
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Text,
} from '@chakra-ui/react';
import { FormSearch } from '@components/common/input/FormInput';
import { downloadCSV } from '@utils/csv';
import {
  REPORTING_COLUMNS,
  REPORTING_ROW_STYLES,
  reportingFilter,
} from '@utils/tools/_reporting/mappers';
import dynamic from 'next/dynamic';
import { memo, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { Export } from '../export';

const ExpandedComponent = dynamic(() =>
  import('@components/common/cards/reporting/expendable').then(
    (module) => module.ExpandedComponent
  )
);

const PanelTabs = ({ applications, setSelectedTabIndex }) => {
  return (
    <TabList w={'100%'}>
      {applications.map((app, i) => (
        <Tab
          onClick={() => setSelectedTabIndex(i)}
          key={`trx-tab-${i}`}
          sx={{ _selected: { fontWeight: 700 } }}
        >
          <Text fontSize={16}>{app.name}</Text>
        </Tab>
      ))}
    </TabList>
  );
};

const DataSet = ({ applications, selectedIndex = 0 }) => {
  const [filterText, setFilterText] = useState('');

  let filtered = [];
  filtered.length = applications.length;

  filtered[selectedIndex] = useMemo(() =>
    reportingFilter({
      applications,
      position: selectedIndex,
      needle: filterText,
    })
  );

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <HStack alignItems={'center'} my={3} w={'35vw'}>
        <FormSearch
          placeholder={
            'Search reference , transaction_id , status , transaction_type , receiver ...'
          }
          keyUp={(e) => setFilterText(e.target.value)}
        />
        <Export onExport={() => downloadCSV(filtered[selectedIndex])} />
      </HStack>
    );
  }, [filterText, selectedIndex]);

  return (
    <TabPanels>
      {applications.map((app, i) => (
        <TabPanel key={`trx-${app.name}-tab-${i}`}>
          <DataTable
            style={{ width: '100%' }}
            columns={REPORTING_COLUMNS}
            data={filtered[i]}
            defaultCanSort
            initialState={{ sortBy: [{ id: 'created_at', desc: true }] }}
            expandableRows
            conditionalRowStyles={REPORTING_ROW_STYLES}
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            expandableRowsComponent={ExpandedComponent}
            pagination
          />
        </TabPanel>
      ))}
    </TabPanels>
  );
};

export const ReportingDataSet = memo(DataSet);
export const ReportingTabs = memo(PanelTabs);
