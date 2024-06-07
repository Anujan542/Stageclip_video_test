import React, { useEffect } from "react";
import { AbsoluteFill, Sequence, Video } from "remotion";
import { preloadVideo } from "@remotion/preload";

let intro =
  "https://remotionlambda-jfkbnf6jjh.s3.eu-west-1.amazonaws.com/cache/f8de3a85-ee1b-4e91-ba41-c3435446b5c3/825cca22-cf0d-40de-85c4-d8dcdafcc522.mp4";
let outro =
  "https://remotionlambda-jfkbnf6jjh.s3.eu-west-1.amazonaws.com/cache/f8de3a85-ee1b-4e91-ba41-c3435446b5c3/b4fcdd47-2468-4513-b632-71d75e45c547.mp4";
let ceremonyVideo =
  "https://clippingplatformprod.blob.core.windows.net/assets/clients/000c8f8a-e849-4bbe-af06-b620ddc193e9/events/e91058cf-ebd7-4b16-892e-1d5fd13c5e48/SJU_2024_Graduate_Level_Commencement_PM_Ceremony-5948.mp4";


  
const PlayerCheck = () => {
  useEffect(() => {
    const unpreloadIntroVideo = preloadVideo(intro);
    const unpreloadOutroVideo = preloadVideo(outro);
    const unpreloadVideo = preloadVideo(ceremonyVideo);

    unpreloadIntroVideo();
    unpreloadOutroVideo();
    unpreloadVideo();
  }, []);

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={421}>
        <Video pauseWhenBuffering src={intro} />
      </Sequence>
      <Sequence from={421} durationInFrames={661}>
        <Video
          pauseWhenBuffering
          startFrom={113400}
          endAt={113640}
          src={ceremonyVideo}
          muted
        />
      </Sequence>
      <Sequence from={660} durationInFrames={910}>
        <Video pauseWhenBuffering src={outro} />
      </Sequence>
    </AbsoluteFill>
  );
};

export default PlayerCheck;
