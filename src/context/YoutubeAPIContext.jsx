import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

const YoutubeAPIContext = createContext();

const client = new YoutubeClient()
const youtube = new Youtube(client)
export function YoutubeAPIProvider({children}){
  return (
    <YoutubeAPIContext.Provider value={{youtube}}>
      {children}
    </YoutubeAPIContext.Provider>
  )
}

export function useYoutubeAPI(){
  return useContext(YoutubeAPIContext);
}