import { useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import residenceService from '../../services/residenceService';

const loadHeatData = async (setHeatMapData, setShowMap) => {
  const response = await residenceService.getAllResidences();

  if (response.status === 200) {
    const positions = response.data;

    setHeatMapData({
      positions, options: {
        radius: 20,
        opacity: 0.6,
      }
    });

    setShowMap(true);
  }
};

const MapView = () => {

  const [heatMapData, setHeatMapData] = useState({
    positions: [{lat: 52.1326, lng: 5.2913}],
    options: {
      radius: 20,
      opacity: 0.6,
    }
  });
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    loadHeatData(setHeatMapData, setShowMap);
  }, [])

  return (
    <div>
      {showMap && <div style={{height: '85vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: process.env.REACT_APP_MAPS_API_KEY, libraries: ['visualization']}}
          defaultCenter={{lat: 52.1326, lng: 5.2913}}
          heatmap={heatMapData}
          defaultZoom={8}
        />
      </div>}
    </div>
  )
};

export default MapView;