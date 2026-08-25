import { createContext, useContext } from "react";

const UserContext = createContext();

export default function App() {
  const user = {
    name: "Enrique",
    role: "UI Developer"
  };

  const logout = () => {
    alert("User Logged Out");
  };

  return (
    <UserContext.Provider value={{ user, logout }}>
      <Dashboard />
    </UserContext.Provider>
  );
}

function Dashboard() {
  const { user, logout } = useContext(UserContext);

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.role}</p>

      <button onClick={logout}>
        Logout
      </button>
    </div>
  );
}
