import { Dispatch, SetStateAction } from "react";

export const LeftPanel = ({ callback }: { callback: Dispatch<SetStateAction<any>> }) => {

  return (
    <div id="LeftPanel" className="h-screen grid grid-rows-12 justify-left border-1 border-dark-grey-300 bg-elevation-0">
    </div>
  )
}

export default LeftPanel


