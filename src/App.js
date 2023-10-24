import './App.css';
import { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';
function App() {

const [users, setUsers] = useState([]);

const url = "https://api.github.com/users";

  const loadData =  async() => {
    // console.log("pandu");
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUsers(data);
} 

 useEffect(()=>{
  loadData();
 },[]) 


  return (
    <div>
      {/* <h1>panduMySon</h1> */}
      {users.map((user) => {
        return (
        <ProfileCard name={user.login} image={user.avatar_url}/>
        )
      }
      )}
      {/* <ProfileCard/> */}
      {/* {console.log("Noids")} */}
      {/* {loadData()} */}
    </div>
  );
}

export default App;
