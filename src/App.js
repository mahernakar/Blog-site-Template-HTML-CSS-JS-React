import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/home/register/Register";
import { Routes,Route, BrowserRouter } from "react-router-dom";
import Post from "./components/post/Post";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user=false;
  return (
    <BrowserRouter>
    <TopBar/>
   <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/register" element={user ?<Home/>: <Register/>}/>
      <Route  path="/login" element={user ?<Home/>: <Login/>}/>
      <Route  path="/about" element={<SinglePost/>}/>
      <Route  path="/write" element={user ?<Write/>: <Register/>}/>
      <Route  path="/settings" element={user ?<settings/>: <Register/>}/>
      <Route  path="/post/:postId" element={<Single/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
