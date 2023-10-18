import { Outlet } from "react-router-dom";
import SearchHeader from "./component/SearchHeader";

function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

export default App;
