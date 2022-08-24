import { useQuery, gql } from "@apollo/client";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
//import { GET_ADS } from "../GraphQL/Queries";
import { usePinboardFilters } from "../Utils/filter";

const GET_ADS = gql`
  query Query($input: MentoringInputFilter) {
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

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="level">Level</InputLabel>
        <Select
          labelId="level"
          id="level"
          value={models.filters.level}
          label="Level"
          onChange={(e) => operations.updateFilter("level", e.target.value)}
        >
          <MenuItem value={"Junior"}>Junior</MenuItem>
          <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
          <MenuItem value={"Senior"}>Senior</MenuItem>
        </Select>
        <InputLabel id="offer">Kind of Pin</InputLabel>
        <Select
          labelId="offer"
          id="offer"
          value={models.filters.offer}
          label="Level"
          onChange={(e) => operations.updateFilter("request", e.target.value)}
        >
          <MenuItem value={false}>Request</MenuItem>
          <MenuItem value={true}>Offer</MenuItem>
        </Select>
      </FormControl>

      <div>
        <label>Search</label>
        <input
          onChange={(e) => operations.updateFilter("location", e.target.value)}
          type="string"
        />
      </div>

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
            },
          })
        }
      >
        Submit!
      </button>
    </div>
  );
}

export default FilterGraphQL;
