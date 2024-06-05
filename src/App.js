import { Player } from "@remotion/player";
import React, { useEffect, useState } from "react";
import PlayerCheck from "./components/Player";
import { getVideoMetadata } from "@remotion/media-utils";

const App = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(true);

  const [totalDuration, setTotalDuration] = useState(1);

  const [startTimeFrame, setStartTimeFrame] = useState(0);
  const [endTimeFrame, setEndTimeFrame] = useState(1);

  const calculateDuration = async () => {
    setLoading(true);
    const { durationInSeconds } = await getVideoMetadata(
      "https://clippingplatformprod.blob.core.windows.net/assets/clients/000c8f8a-e849-4bbe-af06-b620ddc193e9/events/e91058cf-ebd7-4b16-892e-1d5fd13c5e48/SJU_2024_Graduate_Level_Commencement_PM_Ceremony-5948.mp4?st=2024-06-04T15%3A22%3A36Z&se=2024-06-05T15%3A22%3A36Z&sp=r&sv=2018-03-28&sr=b&sig=j%2BHjqKV13WrmY3D%2FfMgfwoaauSlb5v5u3qNtXwAbki0%3D"
    );
    setTotalDuration(Math.round(durationInSeconds * 30));
    setEndTimeFrame(Math.round(durationInSeconds * 30));
    setLoading(false);
  };

  useEffect(() => {
    calculateDuration();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartTimeFrame(startTime * 60 * 30);
    setEndTimeFrame(endTime * 60 * 30);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="font-bold text-2xl text-gray-700">
          Stageclip Ceremony Video Testing
        </h1>
      </div>
      <div className="flex justify-center items-center gap-6 mt-6 mb-6">
        <input
          type="number"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="enter start time"
          onChange={(e) => setStartTime(e.target.value)}
        />
        <input
          type="number"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="enter start time"
          onChange={(e) => setEndTime(e.target.value)}
        />

        {startTime === "" ||
        endTime === "" ||
        Number(endTime) < Number(startTime) ? (
          <button
            className="bg-gray-300 px-4 py-2 rounded-md opacity-50"
            disabled
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        )}
      </div>
      <div className="flex justify-center items-center gap-6 mt-10">
        {loading ? (
          <h1 className="text-gray-800">
            Please wait your ceremony video is Loading....
          </h1>
        ) : (
          <Player
            component={PlayerCheck}
            durationInFrames={Number(totalDuration)}
            compositionWidth={1920}
            compositionHeight={1080}
            fps={30}
            controls={true}
            style={{
              width: 800,
              height: 450,
            }}
            inFrame={Number(startTimeFrame)}
            outFrame={
              Number(endTimeFrame) === Number(totalDuration)
                ? Number(totalDuration) - 1
                : Number(endTimeFrame)
            }
          />
        )}
      </div>
    </>
  );
};

export default App;
