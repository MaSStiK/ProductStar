import { Collapse } from "./components/presentational/Collapse";
import { EpisodeList } from "./components/presentational/EpisodeList";
import { LocationList } from "./components/presentational/LocationList";

import "./App.css"

function App() {
  return (
    <>
      <Collapse
        className="episode-list-collapse"
        title={"Episodes"}
        content={<EpisodeList />}
      />

      <Collapse
        className="location-list-collapse"
        title={"Locations"}
        content={<LocationList />}
      />
    </>
  );
}

export default App;
