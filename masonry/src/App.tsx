import React from "react";
import Isotope from "isotope-layout";

const App = () => {
  // init one ref to store the future isotope object
  const isotope = React.useRef<Isotope | null>();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState("*");

  // initialize an Isotope object with configs
  React.useEffect(() => {
    isotope.current = new Isotope(".filter-container", {
      itemSelector: ".filter-item",
      layoutMode: "fitRows"
    });
    // cleanup
    return () => isotope.current?.destroy();
  }, []);

  // handling filter key change
  React.useEffect(() => {
    if (filterKey === "*") isotope.current?.arrange({ filter: `*` });
    else isotope.current?.arrange({ filter: `.${filterKey}` });
  }, [filterKey]);

  const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

  return (
    <>
      <ul>
        <li onClick={handleFilterKeyChange("*")}>Show All</li>
        <li onClick={handleFilterKeyChange("vege")}>Show Veges</li>
        <li onClick={handleFilterKeyChange("fruit")}>Show Fruits</li>
      </ul>
      <hr />
      <ul className="filter-container">
        <div className="filter-item vege">
          <span>Cucumber</span>
        </div>
        <div className="filter-item fruit">
          <span>Apple</span>
        </div>
        <div className="filter-item fruit">
          <span>Orange</span>
        </div>
        <div className="filter-item fruit vege">
          <span>Tomato</span>
        </div>
      </ul>
    </>
  );
};

export default App;
