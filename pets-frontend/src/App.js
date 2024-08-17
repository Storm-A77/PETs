import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp"
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import AdoptionCenter from "./pages/AdoptionCenter";
import LoginWrapper from "./components/LoginWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import SmorkAdoption from "./pages/SmorkAdoption";
import FredrickAdoption from "./pages/FredrickAdoption";


function App() {

  const [user, setUser] = useState({id: "", email:"", password:""})
  const [loggedin, setLoggedIn] = useState(false)

  useEffect(()=>{
    const id = localStorage.getItem("userid")
    const fetchUser = async () => {
  if(id){
    await axios.get(`http://localhost:8080/finduserbyid/${id}`)
    .then((response)=>{
      setUser(response.data)
    })
    .catch((e)=>{
      console.log(e)
    })
  }}
  fetchUser()
  },[user.email])
  
 

  return (
    <>
    <Router>
      {/* Doesn't automatically pass props to components, so I gotta put them in there :) */}
      <LoginWrapper user={user} setUser={setUser}>
        <Navbar user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />}/>
        <Route path="/map" element={<Map user={user} setUser={setUser}/>}/>
        <Route path="/about" element={<About user={user} setUser={setUser}/>}/>
        <Route path="/signin" element={<SignIn user={user} setUser={setUser}/>}/>
        <Route path="/signup" element={<SignUp user={user} setUser={setUser}/>}/>
        <Route path="/games" element={<Games user={user} setUser={setUser}/>}/>
        <Route path="/adoption" element={<AdoptionCenter user={user} setUser={setUser}/>}/>
        <Route path="/profile" element={<Profile user={user} setUser={setUser}/>}/>
        <Route path="/smorkadoption" element={<SmorkAdoption user={user} setUser={setUser}/>}/>
        <Route path="/fredrickadoption" element={<FredrickAdoption user={user} setUser={setUser}/>}/>

      </Routes>
      </LoginWrapper>
    </Router>
    </>
  );
}

export default App;
