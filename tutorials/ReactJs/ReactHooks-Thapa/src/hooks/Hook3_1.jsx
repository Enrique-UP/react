import { createContext, useContext } from "react";

const ThemeContext = createContext();

export default function Hook3_1() {
  return (
    <>
      <section>
        <ThemeContext.Provider value="Light">
          <Home />
        </ThemeContext.Provider>
      </section>
    </>
  );
}

function Home() {
  return <Dashboard />;
}

function Dashboard() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}
