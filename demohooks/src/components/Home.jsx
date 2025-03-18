import React, { useContext } from "react";
import { MyContext } from "../MyContext";

const Home = () => {
  const ctx = useContext(MyContext);
  console.log(ctx);
  return (
    <div>
      <h2>HOME PAGE</h2>
      <h4>Logged: {ctx.isLogged}</h4>
    </div>
  );
};

export default Home;
