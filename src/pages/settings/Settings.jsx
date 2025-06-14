import SideBar from "../../components/sidebar/SideBar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form action="" className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/7693745/pexels-photo-7693745.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>UserName:</label>
                <input type="text" placeholder="Maher"/>
                <label>Email:</label>
                <input type="email" placeholder="maher@gmail.com"/>
                <label>Password:</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
