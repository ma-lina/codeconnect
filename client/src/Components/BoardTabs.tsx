import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import { Box } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function BoardTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{display:"flex", justifyContent:"center", width: '100%', borderBottom: 1, borderColor: 'divider' }}>
        <Tabs sx={{pt:1}} value={value} onChange={handleChange} aria-label="icon label tabs example">
            <Tab sx={{px:4}} icon={<RocketLaunchIcon />} label="Mentoring" />
            <Tab sx={{px:4}} icon={<EmojiObjectsIcon />} label="Coworking" />
            <Tab sx={{px:4}} icon={<PeopleAltTwoToneIcon />} label="Shadowing" />
        </Tabs>
    </Box>

  );
}