import React from "react";
import "./Home.css";
import img from "./imgs/1.png.jpg";
import Pages from "./pages";

const Home = () => {
  return (
    <div className="center">
      <h3>HELP CENTER </h3>
      <div className="home-ar container">
        <div className="tex p">
          <p>
            Containers are the most basic layout element in Bootstrap and are
            required when using our default grid system. Containers are used to
            contain, pad, and (sometimes) center the content within them. While
            containers can be nested, most layouts do not require a nested
            container.
          </p>
          <button className="button"> CLICK ME</button>
        </div>
        <div className="tex">
          <img src={img}></img>
        </div>
      </div>
      <section>
          <div>
          <Pages></Pages>
          </div>
 
      </section>
    </div>
  );
};

export default Home;
