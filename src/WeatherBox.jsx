import { useState } from "react";
import Information from "./Information";
import SearchBox from "./searchBox";

export default function WeatherBox(){
  let [info, setInfo]= useState({
  });
  function updateData (data) {
    setInfo(data);
  }

  return (
    <div>
    <SearchBox updateData={updateData} />
    <Information info={info} />
    
    </div>

  );
}