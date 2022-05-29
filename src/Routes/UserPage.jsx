import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setLoading(true);
    const { id } = params;
    axios({
      url: `https://reqres.in/api/users/${id}`,
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.product);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [params.id]);
  console.log("Haris");
  console.log(data);
  console.log("Johnson");
  return (
    <div>
      {loading && <div>Loading</div>}
      <div style={{ marginBottom: "1rem" }} key={data?.data?.id}>
        <img src={data?.data?.image} alt="icon" width="50px" />
        <div>Name: {data?.data?.name}</div>
        <div>Name: {data?.data?.name}</div>
        <div>Email: {data?.data?.des}</div>
      </div>
      {/* {data?.data.map((item) => (
        
      ))} */}
    </div>
  );
}

export default Users;
