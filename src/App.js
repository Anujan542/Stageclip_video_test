import { Player } from "@remotion/player";
import PlayerCheck from "./components/Player";
import { AbsoluteFill } from "remotion";
import { useCallback } from "react";
import { LoaderIcon } from "lucide-react";

const App = () => {
  const renderPoster = useCallback(({ isBuffering }) => {
    if (isBuffering) {
      return (
        <AbsoluteFill
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <LoaderIcon className="animate-spin" />
        </AbsoluteFill>
      );
    }

    return null;
  }, []);
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <h1 className="font-bold text-2xl text-gray-700">
          Stageclip Ceremony Video Testing
        </h1>
      </div>

      <div className="flex justify-center items-center gap-6 mt-10">
        <Player
          component={PlayerCheck}
          durationInFrames={910}
          compositionWidth={1920}
          compositionHeight={1080}
          fps={30}
          controls={true}
          style={{
            width: 800,
            height: 450,
          }}
          renderPoster={renderPoster}
          showPosterWhenBuffering
        />
      </div>
    </>
  );
};

export default App;
