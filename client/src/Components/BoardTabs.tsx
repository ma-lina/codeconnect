import * as React from "react";
import { AuthContext } from "../Context/AuthContext";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import { Box, Typography } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BoardCard from "./BoardCard";
import ButtonAddPin from "./ButtonAddPin";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  console.log("children", children);
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
          <Typography component="div">{children}</Typography>
          {/* {children} */}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

export default function BoardTabs(props: any) {
  const { queryRes } = props;
  const [value, setValue] = React.useState(0);
  const { isUserLoggedIn } = React.useContext(AuthContext);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          sx={{ pt: 1 }}
          value={value}
          onChange={handleChange}
          aria-label="icon label tabs example"
        >
          <Tab
            sx={{ px: 2.5 }}
            icon={<RocketLaunchIcon />}
            label="Mentoring"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ px: 2.5 }}
            icon={<EmojiObjectsIcon />}
            label="Coworking"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ px: 2.5 }}
            icon={<PeopleAltTwoToneIcon />}
            label="Shadowing"
            {...a11yProps(2)}
          />
          {isUserLoggedIn() && <ButtonAddPin />}
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {queryRes?.data.mentoring.map((mentoringDetail: any) => (
              <div key={mentoringDetail._id}>
                <BoardCard cardDetail={mentoringDetail} />
              </div>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {queryRes?.data?.coworking.map((coworkingDetail: any) => (
              <div key={coworkingDetail._id}>
                <BoardCard cardDetail={coworkingDetail} />
              </div>
            ))}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {queryRes?.data?.shadowing.map((shadowingDetail: any) => (
              <div key={shadowingDetail._id}>
                <BoardCard cardDetail={shadowingDetail} />
              </div>
            ))}
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
