import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Activity from '../../activity/Activity';
import coding from "../../../assets/coding.png"
import robot from "../../../assets/activity.png"
import robotics from "../../../assets/robotics.svg"
import codings from "../../../assets/coding.svg"
import stem from "../../../assets/compatition.svg"
import stem2 from "../../../assets/stem.png"
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Robotitcs" {...a11yProps(0)} />
          <Tab label="Coding" {...a11yProps(1)} />
          <Tab label="Compatition" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Activity  img={robot} svg={robotics} text="Hands-on activities, Games, STEM," />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Activity  img={coding} svg={codings} text="Scratch, Python, HTML, PHP, Android" />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Activity  img={stem2} svg={stem} text="Events, Partnerships, Summer, Camps, National and International Competitions Online Streaming" />
      </TabPanel>
    </Box>
  );
}
