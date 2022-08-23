import { useQuery, gql } from "@apollo/client";
import { GET_EVERYTHING } from "../GraphQL/Queries";
//to define and move to types
interface Query {
  _id: any;
  creator: any;
  field: any;
  location: string;
  description: string;
  date: Date;
  starred: any;
  techKnowHow: any;
  level: string;
  availability: any;
  timeslots: any;
  offer: boolean;
}

interface QueryData {
  mentoring: Query[];
}

const Pinboard = () => {
  const { loading, error, data } = useQuery<QueryData>(GET_EVERYTHING);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.mentoring.map(
        ({
          _id,
          creator,
          field,
          location,
          description,
          date,
          techKnowHow,
          level,
          availability,
          timeslots,
          offer,
        }) => (
          <div key={_id}>
            <p>{creator}</p>
            <p>{location}</p>
            <p>{field}</p>
            <p>{description}</p>
            <br />
          </div>
        )
      )}
    </>
  );
};

export default Pinboard;
