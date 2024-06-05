import React from "react";
import { Video } from "remotion";
import { preloadVideo, resolveRedirect } from "@remotion/preload";

let urlToLoad =
  "https://clippingplatformprod.blob.core.windows.net/assets/clients/000c8f8a-e849-4bbe-af06-b620ddc193e9/events/e91058cf-ebd7-4b16-892e-1d5fd13c5e48/SJU_2024_Graduate_Level_Commencement_PM_Ceremony-5948.mp4?st=2024-06-04T15%3A22%3A36Z&se=2024-06-05T15%3A22%3A36Z&sp=r&sv=2018-03-28&sr=b&sig=j%2BHjqKV13WrmY3D%2FfMgfwoaauSlb5v5u3qNtXwAbki0%3D";

resolveRedirect(urlToLoad)
  .then((resolved) => {
    urlToLoad = resolved;
  })
  .catch((err) => {
    console.log("Could not resolve redirect", err);
  })
  .finally(() => {
    preloadVideo(urlToLoad);
  });

const PlayerCheck = () => {
  return (
    <div>
      <Video src={urlToLoad} />
    </div>
  );
};

export default PlayerCheck;
