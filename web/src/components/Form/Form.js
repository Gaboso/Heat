import {useCallback, useState} from 'react';
import {Button, Drawer, makeStyles, TextField, Typography} from '@material-ui/core';

import {showToast} from '../StyledToast';
import residenceService from '../../services/residenceService';

const useStyles = makeStyles(() => ({
  paperRoot: {
    maxWidth: '50%',
    minWidth: '50%',
    padding: 16
  }
}));

const Form = ({open, handleClose}) => {

  const [zipCode, setZipCode] = useState('');
  const [number, setNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [numberOfResidents, setNumberOfResidents] = useState('');

  const classes = useStyles();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const save = useCallback(
    async () => {
      const residence = {zipCode, number, latitude, longitude, numberOfResidents};

      const response = await residenceService.saveResidence({payload: residence});

      if (response.status === 200) {
        showToast('success',`Residence created successfully`);
      }

  }, [zipCode, number, latitude, longitude, numberOfResidents])

  return (
    <Drawer
      anchor="right"
      open={open}
      onClick={handleClick}
      onClose={handleClose}
      PaperProps={{
        classes: {root: classes.paperRoot}
      }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Typography variant="body1"
                    component="header">
          Add a residence
        </Typography>

        <TextField label="Zip code" id="zipCode" type="text"
                   value={zipCode}
                   onChange={(e) => {
                     console.log(e.target.value);
                     setZipCode(e.target.value)
                   }
                   }/>

        <TextField label="Number" id="number" type="number"
                   value={number}
                   onChange={(e) => setNumber(e.target.value)}/>

        <TextField label="Latitude" id="latitude" type="number"
                   value={latitude}
                   onChange={(e) => setLatitude(e.target.value)}/>

        <TextField label="Longitude" id="longitude" type="number"
                   value={longitude}
                   onChange={(e) => setLongitude(e.target.value)}/>

        <TextField label="Number of residents" id="numberOfResidents" type="number"
                   value={numberOfResidents}
                   onChange={(e) => setNumberOfResidents(e.target.value)}/>

        <Button variant="contained" onClick={save}>Save</Button>
      </div>
    </Drawer>

  );
}

export default Form;