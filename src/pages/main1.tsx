import React from "react";
import { Outlet } from "react-router-dom";


function NotFoundRoute() {
	return (
		<div className="main">
			<h1>NotFoundRoute</h1>
			<Outlet/>
		</div>
	);
}

export default NotFoundRoute;
