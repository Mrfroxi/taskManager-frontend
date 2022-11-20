import React from "react";
import { Outlet } from "react-router-dom";


function Main() {
	return (
		<div className="main">
			<h1>main</h1>
			<Outlet/>
			<footer>footer</footer>
		</div>
	);
}

export default Main;
