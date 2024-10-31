import React from "react";
import { useEffect, useState } from "react";

//create your first component
const TrafficLight  = () => {

  const [luz, setluz] = useState("red");
  const [blue, setBlue] = useState(false);

  useEffect(() => {
    console.log(`Ahora el color es: ${luz}`)
  }, [luz]);

  const changeColor = () => {
    setluz((color)=> {
      switch (color) {
        case "red":
          return "yellow";
        case "yellow":
          return "green";
        case "green":
          return blue ? "blue" : "red";
        default:
          return "red";
      }
    });
  }


  const ColorBlue = () => {
    return (
      blue && (
        <div
          className={`luz bg-info rounded-circle border border-dark ${
            luz === "blue" ? "selected" : ""
          }`}
          onClick={() => setluz("blue")}
        ></div>
      )
    );
  };

  const addBlue = () => {
    console.log("Activando el color azul");
    setBlue(true); 
  };

	return (
		<div className="container d-flex flex-column justify-content-center align-items-center bg-light mt-5">
            <div class="semaforo bg-secondary rounded-4 d-flex flex-column align-items-center shadow-sm p-3 d-grid gap-3">
              <div class={`luz bg-danger rounded-circle  border border-dark ${luz === "red"    ? "selected" : ""}`} onClick={() => setluz("red")}></div>
              <div class={`luz bg-warning rounded-circle border border-dark ${luz === "yellow" ? "selected" : ""}`} onClick={() => setluz("yellow")}></div>
              <div class={`luz bg-success rounded-circle border border-dark ${luz === "green"  ? "selected" : ""}`} onClick={() => setluz("green")}></div>
              {ColorBlue()}
            </div>
            <div className="btn btn-primary mt-2" onClick={changeColor}>Change color</div>
            <div className="btn btn-primary mt-2" onClick={addBlue}>New color</div>
		</div>
	);
};

export default TrafficLight;
