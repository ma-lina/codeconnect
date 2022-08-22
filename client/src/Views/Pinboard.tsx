import { useQuery, gql } from "@apollo/client";

interface Query {
  id: any;
  creator: any;
  location: string;
  field: string;
  description: string;
}

interface QueryData {
  mentoring: Query[];
}

const Pinboard = () => {
  const GET_EVERYTHING = gql`
    query Query {
      mentoring {
        id
        creator
        location
        field
        description
      }
    }
  `;
  const { loading, error, data } = useQuery<QueryData>(GET_EVERYTHING);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.mentoring.map(({ id, creator, location, field, description }) => (
        <div key={id}>
          <h3>{creator}</h3>
          <p>{location}</p>
          <p>{field}</p>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
};

export default Pinboard;
