import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { usePinboardFilters } from "../Utils/filter";
import { TechKnowHow, Availability, TimeSlots } from "../Utils/common";
//import { GET_ADS } from "../GraphQL/Queries";

const GET_ADS = gql`
  query Query($input: InputFilter) {
    mentoring(input: $input) {
      field
      location
      _id
      description
      date
      techKnowHow
      level
      availability
      timeslots
      offer
    }
  }
`;

function FilterGraphQL() {
  const { operations, models } = usePinboardFilters();
  const { data, loading, error, refetch } = useQuery(GET_ADS, {
    variables: {},
  });
  const [techKnowHow, setTechKnowHow] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [timeSlots, setTimeSlots] = useState([]);
  const theme = useTheme();

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

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

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setTechKnowHow(value);
    operations.updateFilter("techKnowHow", value);
  };

  const handleChange2 = (event: any) => {
    const {
      target: { value },
    } = event;
    setAvailability(value);
    operations.updateFilter("availability", value);
  };

  const handleChange3 = (event: any) => {
    const {
      target: { value },
    } = event;
    setTimeSlots(value);
    operations.updateFilter("timeslots", value);
  };

  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="techknowhow-label">Techknowhow</InputLabel>
          <Select
            labelId="techknowhow-label"
            id="techknowhow"
            multiple
            value={techKnowHow}
            onChange={handleChange}
            input={<OutlinedInput id="select-techknowhow" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {(Object.keys(TechKnowHow) as Array<keyof typeof TechKnowHow>).map(
              (key) => (
                <MenuItem
                  key={TechKnowHow[key]}
                  value={TechKnowHow[key]}
                  style={getStyles(TechKnowHow[key], techKnowHow, theme)}
                >
                  {TechKnowHow[key]}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
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
                {selected.map((value: any) => (
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
        <FormControl sx={{ m: 1, width: 300 }}>
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
                {selected.map((value: any) => (
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
      </div>
      <div></div>

      <div>
        <label>Location</label>
        <input
          onChange={(e) => operations.updateFilter("location", e.target.value)}
          type="string"
        />

        <br />
        {data.mentoring.map((ad: any) => (
          <div>{JSON.stringify(ad)}</div>
        ))}
        <br />
        <button
          onClick={() =>
            refetch({
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
          Filter!
        </button>
      </div>
    </>
  );
}

export default FilterGraphQL;