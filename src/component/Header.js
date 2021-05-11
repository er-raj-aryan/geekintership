import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(2),
  },
}));
function Header() {
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const classes = useStyles();

  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

    return (
        <div className={classes.root}>
              <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <Link to='/' style={{color: 'white', textDecoration:"none"}}> Assisment</Link>
          </Typography>
          <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <Typography className={classes.typography}> Company: INCRED <br></br>
                Address: Bengaluru<br></br>
                Phone: XXXXXXXXX09<br></br>
                Email: XXXXXX@gmail.com .</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
          <Button onClick={handleClick('bottom-end')} color="inherit">Company Info</Button>
        </Toolbar>
      </AppBar>
        </div>
    )
}

export default Header
