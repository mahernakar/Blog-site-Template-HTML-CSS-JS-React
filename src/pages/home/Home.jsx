import Header from "../../components/Header/Header"
import Post from "../../components/post/Post"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/SideBar"
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home"> 
        <Posts/>
        <SideBar/>
    </div>
    </>
  )
}
