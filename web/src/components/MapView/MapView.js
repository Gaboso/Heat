import {GoogleApiWrapper, Map} from 'google-maps-react';

const MapView = ({google}) => {

  const mapStyles = {
    width: '100%',
    height: '100%'
  };

  return (
    <Map google={google} style={mapStyles}
         zoom={14}
         initialCenter={{
           lat: 52.1326,
           lng: 5.2913
         }}
    />
  )

}

export default GoogleApiWrapper({apiKey: ''})(MapView)