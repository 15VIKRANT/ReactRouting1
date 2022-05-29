import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://freshlybackend.herokuapp.com/products",
      method: "GET"
    })
      .then((res) => {
        setLoading(false);
        setData(res.data.product);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}

      {data.map((item) => (
        <div style={{ marginBottom: "1rem" }} key={item.id}>
          <div>{item.name}</div>
          <div>Calorie: {item.cal}</div>
          <div>Price: {item.price}</div>
          <div>
            <img src={item.image} style={{ height: "100px" }} alt="image" />
          </div>
          <Link to={`/products/${item._id}`}>See More</Link>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
