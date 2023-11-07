import { Outlet } from "react-router-dom";
import SearchHeader from "./component/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeAPIProvider } from "./context/YoutubeAPIContext";

const queryClient = new QueryClient(); //tanstack에서 제공하는 클래스

function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeAPIProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeAPIProvider>
    </>
  );
}

export default App;
