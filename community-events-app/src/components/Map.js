import React from "react";
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from "react-google-maps";

const displayMap = () => {
  return (
    <>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 53.480759, lng: -2.242631 }}
      />
      <Marker position={{ lat: 53.480759, lng: -2.242631 }} />
    </>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(displayMap));

const Map = () => {
  return (
    <div
      style={{
        width: "50vw",
        height: "50vh",
        paddingBottom: "20px",
        paddingLeft: "15px",
      }}
    >
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;
