import React from "react";
import { Routes ,Route  } from "react-router-dom";
import AuthComponent from "./pages/auth/authComponent";
import Main from "./pages/main/main";
import NotFoundRoute from "./pages/main1";
import Main2 from "./pages/main2";


function App() {
	return (
		<div className="App">
			
			<Routes >
				<Route path="/auth" element={<AuthComponent/>}/>
				<Route path="/" element={<Main/>}>
					{/* <Route path="main1/*" element={<Main1/>}>
						<Route path="main2" element={<Main2/>}/>
					</Route> */}
					<Route path="*" element={<NotFoundRoute/>} />
				</Route>
				
				
			</Routes>
		</div>
	);
}

export default App;
