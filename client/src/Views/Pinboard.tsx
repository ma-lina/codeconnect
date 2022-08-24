import { useQuery } from "@apollo/client";
import { GET_ADS } from "../GraphQL/Queries";

const Pinboard = () => {
  const { loading, error, data } = useQuery<QueryData>(GET_ADS);
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
