import React from "react";
import "./Main.css";
import { useState, createContext, useContext } from "react";

import Display from "./Display/Display.jsx";
import Search from "./Search/Search.jsx";

function Main(props) {
  return (
    <>
      <div className="main">
        <div className="namepic">
          <img src={props.source} />
          <h2>{props.naam}</h2>
        </div>
        <div className="others">
          <p>
            Name: <span className="properties">{props.naam}</span>
          </p>
          <p>
            Repositries: <span className="properties">{props.repos}</span>
          </p>
          <p>
            LogIn ID: <span className="properties">{props.log}</span>
          </p>
          <p>
            Location: <span className="properties">{props.jaggah}</span>
          </p>
        </div>
        <div className="others">
          <p>
            Bio: <span className="properties">{props.bbiioo}</span>
          </p>
          <p>
            Followers: <span className="properties">{props.follw}</span>
          </p>
          <p>
            Following: <span className="properties">{props.folli}</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;

// Cannot send data from child to parent
// const name = useContext(userName);
// const fun = useContext(userClick);
// import { userName,userClick } from './Search/Search.jsx';
// {fun ? <h1>The Value of name is {name}</h1>: <h1>Please Enter the value</h1> }
// {console.log(`The value of name is ${name}`)}
