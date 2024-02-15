import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("none");
	return (
		<div className="semaforo text-center d-inline-block">
			<div onClick={() => setSelectedColor("red")} className={`light red ${selectedColor === "red" ? "shineRed" : "red"}`}>
				
			</div>
			<div onClick={() => setSelectedColor("yellow")} className={`light yellow ${selectedColor === "yellow" ? "shineYellow" : "yellow"}`}>

			</div>
			<div onClick={() => setSelectedColor("green")} className={`light green ${selectedColor === "green" ? "shineGreen" : "green"}`}>

			</div>
		</div>
	);
};

export default Home;
