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

  const [zipCodeError, setZipCodeError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [latitudeError, setLatitudeError] = useState(false);
  const [longitudeError, setLongitudeError] = useState(false);
  const [numberOfResidentsError, setNumberOfResidentsError] = useState(false);

  const [zipCode, setZipCode] = useState('');
  const [number, setNumber] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [numberOfResidents, setNumberOfResidents] = useState('');

  const classes = useStyles();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const closeDrawer = () => {
    setZipCode('');
    setNumber('');
    setLatitude('');
    setLongitude('');
    setNumberOfResidents('');

    setZipCodeError(false);
    setNumberError(false);
    setLatitudeError(false);
    setLongitudeError(false);
    setNumberOfResidentsError(false);

    handleClose();
  }

  const isValid = (value, setError) => {
    if (value === '' || value === undefined) {
      setError(true);
      return false;
    }

    setError(false);
    return true;
  }

  const save = useCallback(
    async () => {
      const residence = {zipCode, number, latitude, longitude, numberOfResidents};

      const zipValid = isValid(zipCode, setZipCodeError);
      const numberValid = isValid(number, setNumberError);
      const latValid = isValid(latitude, setLatitudeError);
      const lngValid = isValid(longitude, setLongitudeError);
      const numberOfResValid = isValid(numberOfResidents, setNumberOfResidentsError);

      if (zipValid && numberValid && latValid && lngValid && numberOfResValid) {
        const response = await residenceService.saveResidence({payload: residence});

        if (response.status === 200) {
          showToast('success', 'Residence created successfully!');
        }
      } else {
        showToast('error', 'Please, fill required field!')
      }

    }, [zipCode, number, latitude, longitude, numberOfResidents])

  return (
    <Drawer
      anchor="right"
      open={open}
      onClick={handleClick}
      onClose={closeDrawer}
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
                   error={zipCodeError}
                   onBlur={() => isValid(zipCode, setZipCodeError)}
                   helperText={zipCodeError ? 'Required field' : undefined}
                   onChange={(e) => {
                     setZipCode(e.target.value)
                   }}/>

        <TextField label="Number" id="number" type="number"
                   value={number}
                   error={numberError}
                   onBlur={() => isValid(number, setNumberError)}
                   helperText={numberError ? 'Required field' : undefined}
                   onChange={(e) => setNumber(e.target.value)}/>

        <TextField label="Latitude" id="latitude" type="number"
                   value={latitude}
                   error={latitudeError}
                   onBlur={() => isValid(latitude, setLatitudeError)}
                   helperText={latitudeError ? 'Required field' : undefined}
                   onChange={(e) => setLatitude(e.target.value)}/>

        <TextField label="Longitude" id="longitude" type="number"
                   value={longitude}
                   error={longitudeError}
                   onBlur={() => isValid(longitude, setLongitudeError)}
                   helperText={longitudeError ? 'Required field' : undefined}
                   onChange={(e) => setLongitude(e.target.value)}/>

        <TextField label="Number of residents" id="numberOfResidents" type="number"
                   value={numberOfResidents}
                   error={numberOfResidentsError}
                   onBlur={() => isValid(numberOfResidentsError, setNumberOfResidentsError)}
                   helperText={numberOfResidentsError ? 'Required field' : undefined}
                   onChange={(e) => setNumberOfResidents(e.target.value)}/>

        <Button variant="contained" onClick={save}>Save</Button>
      </div>
    </Drawer>

  );
}

export default Form;