import * as React from 'react';
import { AuthContext } from '../Context/AuthContext'
import { useQuery } from "@apollo/client";
import { GET_ADS } from "../GraphQL/Queries";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import { Box, Typography } from '@mui/material';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BoardCard from './BoardCard';
import ButtonAddPin from './ButtonAddPin';

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
          <Box sx={{ p: 1 }}>
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
  const { isUserLoggedIn } = React.useContext(AuthContext); 
  console.log(isUserLoggedIn())


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const { loading, error, data } = useQuery<QueryData>(GET_ADS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

  return (
    <Box sx={{width: '100%'}}>
        <Box sx={{display:"flex", justifyContent:"center", width: '100%', borderBottom: 1, borderColor: 'divider' }}>
            <Tabs sx={{pt:1}} value={value} onChange={handleChange} aria-label="icon label tabs example">
                <Tab sx={{px:2.5}} icon={<RocketLaunchIcon />} label="Mentoring" {...a11yProps(0)} />
                <Tab sx={{px:2.5}} icon={<EmojiObjectsIcon />} label="Coworking" {...a11yProps(1)} />
                <Tab sx={{px:2.5}} icon={<PeopleAltTwoToneIcon />} label="Shadowing" {...a11yProps(2)} />
                {(isUserLoggedIn()) && <ButtonAddPin/>}
            </Tabs>
        </Box>
        <Box>
            <TabPanel value={value} index={0}>
                <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:2}}>
                    {data?.mentoring.map(
                        (mentoringDetail) => (
                        <div key={mentoringDetail._id}>
                            <BoardCard cardDetail={mentoringDetail}/>
                        </div>
                        )
                    )}
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:2}}>
                    {data?.coworking.map(
                        (coworkingDetail) => (
                        <div key={coworkingDetail._id}>
                            <BoardCard cardDetail={coworkingDetail}/>
                        </div>
                        )
                    )}
                </Box>            
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap", gap:2}}>
                    {data?.shadowing.map(
                        (shadowingDetail) => (
                        <div key={shadowingDetail._id}>
                            <BoardCard cardDetail={shadowingDetail}/>
                        </div>
                        )
                    )}
                </Box>            
            </TabPanel>
        </Box>
    </Box>
  );
}