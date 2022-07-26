import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { usePinboardFilters } from "../Utils/usePinboardFilters";
import {
  TechKnowHow,
  Availability,
  TimeSlots,
  Field,
  Level,
} from "../Utils/enums";

//TODO add reset button filter

export default function FilterForm(props: any) {
  const { operations, models } = usePinboardFilters();
  const [techKnowHow, setTechKnowHow] = useState([]);
  const [availability, setAvailability] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const [field, setField] = useState([]);
  const [level, setLevel] = useState([]);
  const theme = useTheme();

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  function getStyles(key: string, state: any, theme: any) {
    return {
      fontWeight:
        state.indexOf(key) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChangeFilter = (
    event: SelectChangeEvent<unknown>,
    callback: Function,
    filter: string
    // state: any
  ) => {
    const {
      target: { value },
    } = event;
    callback(value);
    operations.updateFilter(filter, value);
    // console.log("state", state);
  };

  const handleChange2 = (event: SelectChangeEvent<typeof availability>) => {
    const {
      target: { value },
    } = event;
    setAvailability(typeof value === "string" ? value.split(",") : value);
    operations.updateFilter("availability", value);
  };

  const handleChange3 = (event: any) => {
    const {
      target: { value },
    } = event;
    setTimeSlots(value);
    operations.updateFilter("timeslots", value);
  };

  const handleChange4 = (event: any) => {
    const {
      target: { value },
    } = event;
    setField(value);
    operations.updateFilter("field", value);
  };

  const handleChange5 = (event: any) => {
    const {
      target: { value },
    } = event;
    setLevel(value);
    operations.updateFilter("level", value);
  };

  return (
    <>
      <div>
        <Button
          onClick={() =>
            props.refetch({
              input: {
                location: models.filters.location,
                level: models.filters.level,
                offer: models.filters.offer,
                availability: models.filters.availability,
                timeslots: models.filters.timeslots,
                field: models.filters.field,
                techKnowHow: models.filters.techKnowHow,
              },
            })
          }
        >
          Filter Pins
        </Button>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Mentee</Typography>
            <Switch
              checked={models.filters.offer}
              onChange={(e: any) =>
                operations.updateFilter("offer", e.target.checked)
              }
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography>Mentor</Typography>
          </Stack>
          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="techknowhow-label">Techknowhow</InputLabel>
            <Select
              labelId="techknowhow-label"
              id="techknowhow"
              multiple
              value={techKnowHow}
              onChange={(event) =>
                handleChangeFilter(event, setTechKnowHow, "techKnowHow")
              }
              input={<OutlinedInput id="select-techknowhow" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(
                Object.keys(TechKnowHow) as Array<keyof typeof TechKnowHow>
              ).map((key) => (
                <MenuItem
                  key={TechKnowHow[key]}
                  value={TechKnowHow[key]}
                  style={getStyles(TechKnowHow[key], techKnowHow, theme)}
                >
                  {TechKnowHow[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="availability-label">Availability</InputLabel>
            <Select
              labelId="availability-label"
              id="availability"
              multiple
              value={availability}
              onChange={handleChange2}
              input={<OutlinedInput id="select-availability" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(
                Object.keys(Availability) as Array<keyof typeof Availability>
              ).map((key) => (
                <MenuItem
                  key={Availability[key]}
                  value={Availability[key]}
                  style={getStyles(Availability[key], availability, theme)}
                >
                  {Availability[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="timeslots-label">Timeslots</InputLabel>
            <Select
              labelId="timeslots-label"
              id="timeslots"
              multiple
              value={timeSlots}
              onChange={handleChange3}
              input={<OutlinedInput id="select-timeslots" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(Object.keys(TimeSlots) as Array<keyof typeof TimeSlots>).map(
                (key) => (
                  <MenuItem
                    key={TimeSlots[key]}
                    value={TimeSlots[key]}
                    style={getStyles(TimeSlots[key], timeSlots, theme)}
                  >
                    {TimeSlots[key]}
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="fields-label">Field</InputLabel>
            <Select
              labelId="fields-label"
              id="fields"
              multiple
              value={field}
              onChange={handleChange4}
              input={<OutlinedInput id="select-fields" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(Object.keys(Field) as Array<keyof typeof Field>).map((key) => (
                <MenuItem
                  key={Field[key]}
                  value={Field[key]}
                  style={getStyles(Field[key], field, theme)}
                >
                  {Field[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: 300 }} size="small">
            <InputLabel id="level-label">Level</InputLabel>
            <Select
              labelId="level-label"
              id="level"
              multiple
              value={level}
              onChange={handleChange5}
              input={<OutlinedInput id="select-fields" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {(Object.keys(Level) as Array<keyof typeof Level>).map((key) => (
                <MenuItem
                  key={Level[key]}
                  value={Level[key]}
                  style={getStyles(Level[key], level, theme)}
                >
                  {Level[key]}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            size="small"
            id="outlined-name"
            label="City"
            value={models.filters.location}
            onChange={(e) =>
              operations.updateFilter("location", e.target.value)
            }
          />
        </Box>
      </div>
    </>
  );
}
