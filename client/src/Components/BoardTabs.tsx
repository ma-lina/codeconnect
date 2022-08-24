import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import { Box, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

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
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
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
      id: `tab-${index}`,
      'aria-controls': `tabpanel-${index}`,
    };
  }

export default function BoardTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
        <Box sx={{display:"flex", justifyContent:"center", width: '100%', borderBottom: 1, borderColor: 'divider' }}>
            <Tabs sx={{pt:1}} value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab sx={{px:4}} icon={<RocketLaunchIcon />} label="Mentoring" {...a11yProps(0)} />
                <Tab sx={{px:4}} icon={<EmojiObjectsIcon />} label="Coworking" {...a11yProps(1)} />
                <Tab sx={{px:4}} icon={<PeopleAltTwoToneIcon />} label="Shadowing" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <Box>
            <TabPanel value={value} index={0}>
                ***Mentoring Items here***
            </TabPanel>
            <TabPanel value={value} index={1}>
                ***Coworking Items here***
            </TabPanel>
            <TabPanel value={value} index={2}>
                ***Shadowing Items here***
            </TabPanel>
        </Box>
    </Box>
  );
}