import React, { createContext, useState } from "react";
import ahsan from "../ahsan.jpg";
import "./Search.css";
import ReactDOM from "react-dom";
import Display from "../Display/Display";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
const userName = createContext();
const userClick = createContext();
function Search() {
  const [name, setname] = useState("");
  const [click, setclick] = useState(false);
  const change = (event) => {
    console.log(event.target.value);
    setclick(false);
    setname(event.target.value);
  };
  const press = () => {
    setclick(true);
  };
  return (
          <div className="searchmain">
    <>
      <userName.Provider value={name}>
        <userClick.Provider value={click}>
          {/* <div>Search</div> */}
            <h1 className="title">User Finder By Ahsan Bilal</h1>
            <div className="ahsan">
              <img src={ahsan} alt="" />
            </div>
            <div className="mainn">
              <p className="userName">Enter the UserName</p>
              <div className="userDetail">
                <input
                  placeholder="Enter the Name"
                  onChange={change}
                  type="text"
                  name="username"
                />
                <button onClick={press} className="Button">
                  
                  Search
                </button>
              </div>
              <div className="display">
                {click ? (
                  <Display value={name} />
                ) : (
                  <p>Please Click on Button</p>
                )}
              </div>
          </div>
        </userClick.Provider>
      </userName.Provider>
    </>
            </div>
  );
}
export { userName, userClick };
export default Search;
