import {useState} from 'react';

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Form from '../../components/Form';
import MapView from '../../components/MapView';

const Home = () => {
  const [formOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <div>
      <Form open={formOpen} handleClose={closeForm}/>

      <MapView/>

      <Fab color="primary" aria-label="add" onClick={openForm}>
        <AddIcon/>
      </Fab>
    </div>
  );
}

export default Home;