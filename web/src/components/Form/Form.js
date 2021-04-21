import {useCallback, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Drawer from '@material-ui/core/Drawer';

import residenceService from '../../services/residenceService';

import {showToast} from '../StyledToast';
import ButtonContainer from '../ButtonContainer';
import Input from '../Input';
import GridItem from '../GridItem';

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

  const inputs = [
    {
      id: 'zipCode', label: 'Zip code', type: 'text',
      error: zipCodeError, setError: setZipCodeError,
      value: zipCode, setValue: setZipCode
    }, {
      id: 'number', label: 'Number', type: 'number',
      error: numberError, setError: setNumberError,
      value: number, setValue: setNumber
    }, {
      id: 'latitude', label: 'Latitude', type: 'number',
      error: latitudeError, setError: setLatitudeError,
      value: latitude, setValue: setLatitude
    }, {
      id: 'longitude', label: 'Longitude', type: 'number',
      error: longitudeError, setError: setLongitudeError,
      value: longitude, setValue: setLongitude
    }, {
      id: 'numberOfResidents', label: 'Number of residents', type: 'number',
      error: numberOfResidentsError, setError: setNumberOfResidentsError,
      value: numberOfResidents, setValue: setNumberOfResidents
    }
  ];

  const handleClick = (e) => {
    e.stopPropagation();
  };

  const isValid = (value, setError) => {
    if (value === '' || value === undefined) {
      setError(true);
      return false;
    }

    setError(false);
    return true;
  }

  const save = useCallback(
    async (event) => {
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
        event.preventDefault();
        showToast('error', 'Please, fill required fields!')
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
      <form onSubmit={save} style={{margin: 16}}>
        <Typography variant="body1" component="header">
          Add a residence
        </Typography>

        <Grid container
              direction="column"
              spacing={1}
              justify="space-between">
          {
            inputs.map(({id, ...props}) =>
              <GridItem key={id}>
                <Input id={id} key={id} {...props}/>
              </GridItem>
            )
          }
        </Grid>

        <ButtonContainer>
          <Button color="primary" variant="contained" type="submit">Save</Button>
        </ButtonContainer>
      </form>
    </Drawer>

  );
}

export default Form;