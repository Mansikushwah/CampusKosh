import { useEffect, useState } from "react";
import API from "../api/api";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/api/home")
      .then(res => {
        setData(res.data.message);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
    </div>
  );
}

export default Home;