import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../component/VideoCard";
import FakeYoutube from "../api/fakeAPI";

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
      queryKey: ["videos", keyword], 
      queryFn: () => {
        const youtube = new FakeYoutube();
        return youtube.search(keyword)
      }
       }); //useQuery를 이용해서 3개의 속성 값을 받아오는데 data는 의미를 분명하게 하기 위해 :을 사용하여 키를 변경해준다. 그리고 첫번째 인자로 []을 사용해서 Query할때 사용할 키워드를 나열해주는데 첫번째 배열요소로 'videos'라는 키워드로 데이터를 찾고 그 안에서 다시 주어지는 keyword(Params에서 받는)로 찾은 데이터를 전달해준다. 
    //response를 받아오면 .json()을 이용해 JSON 형태의 데이터로 변환하고 변환한 데이터를 이용해 콜백함수를 실행한다. 
  return (
    <>
      <div>Videos {keyword ? `🔎${keyword}` : `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>something is wrong😢 </p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
