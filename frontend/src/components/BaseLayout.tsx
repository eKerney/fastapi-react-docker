import { DeckMap } from "./DeckMap";
import LeftPanel from "./LeftPanel";
import { MapViewState } from "deck.gl";

export const BaseLayout = () => {

  const INITIAL_VIEW_STATE: MapViewState = {
    longitude: -110,
    latitude: 37.7853,
    zoom: 3.8,
    pitch: 50,
    bearing: 0,
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-0 h-screen overflow-hidden ">
        <DeckMap
          view_state={INITIAL_VIEW_STATE}
          layers={[]}
        />
        <div className="border-2 border-dark-grey-300 bg-elevation-0 col-span-4 z-30 " >
          <LeftPanel
            callback={(() => null)}
          />
        </div>
        <div className="border-2 border-dark-grey-300 bg-elevation-0 col-span-8" >
        </div>
      </div >
    </>
  );
}
export default BaseLayout

