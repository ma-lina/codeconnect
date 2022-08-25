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
import { TechKnowHow } from "../Utils/common";
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
  const [personName, setPersonName] = useState([]);
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
  function getStyles(name: string, personName: any, theme: any) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  /*   const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
 */
  return (
    <>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={models.filters.techKnowHow}
            onChange={(e) =>
              operations.updateFilter("techKnowHow", e.target.value)
            }
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {/*            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
              >
                {name}
              </MenuItem>
            ))} */}
            {(Object.keys(TechKnowHow) as Array<keyof typeof TechKnowHow>).map(
              (key) => (
                <MenuItem
                  key={TechKnowHow[key]}
                  value={TechKnowHow[key]}
                  style={getStyles(TechKnowHow[key], personName, theme)}
                >
                  {TechKnowHow[key]}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </div>
      <div></div>

      <div>
        {/*         <div>
          {(Object.keys(TechKnowHow) as Array<keyof typeof TechKnowHow>).map(
            (key) => {
              return TechKnowHow[key];
            }
          )}
        </div> */}
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
                //    level: models.filters.level,
                //     offer: models.filters.offer,
                //     availability: models.filters.availability,
                //     timeslots: models.filters.timeslots,
                //     field: models.filters.field,
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
