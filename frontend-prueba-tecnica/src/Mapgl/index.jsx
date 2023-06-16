import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect } from "react";
import React from "react";

const token_access = 'pk.eyJ1Ijoiam9yZ2VtZXJpbm83NDMiLCJhIjoiY2xpeTVkdDljMGNmZTNsbzhxeXdwbm5pYiJ9.Bs7LwiKjb97Yppmp8pFtbw';

function Mapbox() {
  const [verPuerto, setVerPuerto] = useEffect({
    latitude: -74.81239,
    longitud: 11.009956,
    zoom: 9,
  });

  return (
    <div style={{width: "100vw", height: "100vh"}}>
      <React
      {...verPuerto}
    mapboxApiAccessToken={token_access}
    width="100%"
    height="100%"
    transitionDuration="200"
    mapStyle="https://api.mapbox.com/styles/v1/jorgemerino743/cliyfrgly02lv01qgatep8vyf.html?title=view&access_token=pk.eyJ1Ijoiam9yZ2VtZXJpbm83NDMiLCJhIjoiY2xpeTVkdDljMGNmZTNsbzhxeXdwbm5pYiJ9.Bs7LwiKjb97Yppmp8pFtbw&zoomwheel=true&fresh=true#2/37.75/-92.25"
    >
        
      </React>
    </div>
  );
}

export default Mapbox
