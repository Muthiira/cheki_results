import React, {useState} from "react";
import "./../styles/SideNav.css"
import ToolBar from "./ToolBar";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";

function SlideBar(){
	const [sidebar, setSidebar] = useState(false);
	const toggleSidebar = () =>{
		setSidebar((prevState) => !prevState)
	}

	return(
		<div>
			<ToolBar openSidebar={toggleSidebar}/>
			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
			<SideBar sidebar={sidebar}/>
		</div>
	)
}

export default SlideBar;