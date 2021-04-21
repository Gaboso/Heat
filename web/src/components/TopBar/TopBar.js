import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Whatshot from '@material-ui/icons/Whatshot'

const TopBar = () => (
  <AppBar position="static">
    <Toolbar variant="dense">
      <Whatshot/>
      <Typography variant="h5" style={{fontWeight: 'bold'}}>Heat</Typography>
    </Toolbar>
  </AppBar>
);

export default TopBar;