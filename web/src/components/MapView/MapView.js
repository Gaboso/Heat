import {useCallback, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {Button} from '@material-ui/core';
import residenceService from '../../services/residenceService';


const MapView = () => {

  const [heatMapData, setHeatMapData] = useState({
    positions: [{lat: 52.1326, lng: 5.2913}],
    options: {
      radius: 20,
      opacity: 0.6,
    }
  });
  const [showMap, setShowMap] = useState(false);
  let positions = [];

  const loadLocations = useCallback(
    async () => {
      const response = await residenceService.getAllResidences();

      if (response.status === 200) {
        positions = response.data;

        setHeatMapData({positions, options: {
            radius: 20,
            opacity: 0.6,
          }});

        setShowMap(true);
      }
    }, [positions]);



  return (
    <div>
      <Button onClick={loadLocations}>Load Locations</Button>
      {showMap && <div style={{height: '80vh', width: '90%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY, libraries: ['visualization']}}
          defaultCenter={{
            lat: 52.1326,
            lng: 5.2913
          }}
          heatmap={heatMapData}
          defaultZoom={8}
        />
      </div>}
    </div>
  )
};

export default MapView;