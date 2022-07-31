import React from "react";
import Main from "../Main";
function Display(props) {
  const [data, setdata] = React.useState({});

  console.log(props);

  React.useEffect(() => {
    console.log("useeffectran");
    fetch(`https://api.github.com/users/${props.value}`)
      .then((response) => {
        return response.json();
      })
      .then((information) => setdata(information));
  }, [props.value]);

  const {login,avatar_url,bio,public_repos,
  followers , following,name,location } = data ;
  console.log(props.value);
  console.log(data);

  return (
    <>
<Main  
log = {login}
source = {avatar_url}
bbiioo = {bio}
repos = {public_repos}
follw = {followers }
folli = {following}
naam = {name}
jaggah = {location}
></Main>
  
    </>
  );
}

export default Display;

// fetch(`https://api.github.com/users/${props.userName}`)
// console.log("Hello Guys")
// console.log(data)
// console.log(typeof(data))
