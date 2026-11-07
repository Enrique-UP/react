import {useState} from "react";

function Exp2() {
	const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  const [car, setCar] = useState({
    brand: "Nissan",
    model: "Mustang",
    year: "2020",
    color: "black"
  });
  return(
    <>
      <aside>
        <h2>Exp 2</h2>
        <p>My new car features: {brand}, {model}, {year} and {color}</p>
        <p>My new car features: {car.brand}, {car.model}, {car.year} and {car.color}</p>
      </aside>
    </>
  );
}

export default Exp2;