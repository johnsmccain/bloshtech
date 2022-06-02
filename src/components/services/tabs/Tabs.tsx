import  React from 'react';
import {Typography,Box,Tab,Tabs} from '@mui/material';
import {Activity,Card} from '../../';
import coding from "../../../assets/coding.png"
import robot from "../../../assets/activity.png"
import robotics from "../../../assets/vector1.svg"
import codings from "../../../assets/vector3.svg"
import stem from "../../../assets/vector4.svg"
import stem2 from "../../../assets/stem.png"
import stemsvg from "../../../assets/compatition.svg"
import codingsvg from "../../../assets/coding.svg"
import roboticsvg from "../../../assets/robotics.svg"
import "./tab.scss"
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


    {/* <div className="tab1"> */}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,fontSize: 50, color: "white"}} className="tab1" >
        <Tabs value={value} onChange={handleChange} centered >
          <Tab className='tab_text'  label={<span className='tab_font'>Robotitcs</span>} {...a11yProps(0)} />
          <Tab  className='tab_text' label={<span className='tab_font'>Coding</span>} {...a11yProps(1)} />
          <Tab className='tab_text'  label={<span className='tab_font'>Competition</span>}{...a11yProps(2)} />
        </Tabs>
      </Box>
    {/* </div> */}
    {/* <div className="tab2"> */}

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tab2">
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label={<Card  img={roboticsvg} title='ROBOTICS' text='Hands-on activities, Games, STEM,'/>
}  {...a11yProps(0)} />
          <Tab label={<Card img={codingsvg} title='CODING' text='Scratch, Python, HTML, PHP, Android'/>} {...a11yProps(1)} />
          <Tab label={<Card  img={stemsvg} title='COMPETITION' text='Events, Partnerships, Summer, Camps, National and International Competitions Online Streaming'/>} {...a11yProps(2)} />
        </Tabs>
      </Box>
    {/* </div> */}


      <TabPanel value={value} index={0}>
        <Activity  img={robot} svg={robotics} text="Our robotic Team building programme is designed to build a stronger unit of employees, breaking away from the monotony of work, relieve stress, have fun while at work, encourage creativity and collaboration, enhancing communication, Improve morale, increase productivity, trust. The program is designed for families, corporate, social and religious settings.

" />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Activity  img={coding} svg={codings} text="Our Coding programme is designed to equip our learners with a computational thinking mindset. It provides learners ability to solve problems systematically, quickly fix a problem and deploy another strategy when something is not working. This programme also provides learners with opportunities to experiment their ideas, question the assumptions of their imagination, run into errors and learn from them. " />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Activity  img={stem2} svg={stem} text="Our STEAM education will get pupils and students engrossed in hands-on investigation of STEAM concepts using everyday subject matter. This will enable kids to get real life experience and be able to solve real world problems." />
      </TabPanel>
    </Box>
  );
}
