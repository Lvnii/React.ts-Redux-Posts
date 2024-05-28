import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Friends from "../Pages/Friends";
import Profile from "../Pages/Profile";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/friends" element={<Friends />}/>
            <Route path="/profile/:id" element={<Profile />}/>
        </Routes>
    )
}

export default Router; 