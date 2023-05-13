import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import LinearProgress from '@mui/material/LinearProgress';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

function App() {
  const [state, setState] = React.useState({
    dashboard: false,
    endingHunger: false,
    changingLives: false,
    savingLives: false,
  });
  const [progress, setProgress] = React.useState({
    endingHunger: 0, 
    changingLives: 0, 
    savingLives: 0,
  });

  const { dashboard, endingHunger, changingLives, savingLives } = state;

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const handleDonate = () => {
    console.log('donate');
    setState({
      ...state,
      dashboard: true
    })
    setProgress({
      ...state,
      endingHunger: endingHunger ? 100 : 0,
      changingLives: changingLives ? 100 : 0,
      savingLives: savingLives ? 100 : 0,
    })
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TogetherFund
          </Typography>
          {!dashboard && <Button color="inherit" onClick={handleDonate}>Donate</Button>}
        </Toolbar>
      </AppBar>
      
      {
        dashboard ? (
          <Box p={4}>
            <Box p={4}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ending Hunger
              </Typography>
              <LinearProgressWithLabel value={progress.endingHunger} />
              <Typography variant="body2" component="div">
                Ending world hunger is one of the greatest challenges of our times. Across the globe, up to 828 million people do not have enough food and nearly 43.3 million people are at serious risk of famine
              </Typography>
            </Box>
            <Box p={4}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Changing Lives
              </Typography>
              <LinearProgressWithLabel value={progress.changingLives} />
              <Typography variant="body2" component="div">
              Your donation will assist millions of people displaced, rendered homeless or deprived of basic resources by cataclysmic events, whether man-made or natural, avoidable or not
              </Typography>
            </Box>
            <Box p={4}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Saving Lives
              </Typography>
              <LinearProgressWithLabel value={progress.savingLives} />
              <Typography variant="body2" component="div">
              Emergencies are described as “urgent situations in which there is clear evidence that an event, or series of events, has occurred which causes human suffering or imminently threatens lives or livelihoods
              </Typography>
            </Box>
          </Box>
        ) 
        : (
      <FormControl sx={{ m: 6 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Choose initiatives to support:</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={endingHunger} onChange={handleChange} name="endingHunger" size='large' />
            }
            label="Ending Hunger"
          />
          <Typography variant="body2" component="div">
            Ending world hunger is one of the greatest challenges of our times. Across the globe, up to 828 million people do not have enough food and nearly 43.3 million people are at serious risk of famine
          </Typography>
          <FormControlLabel
            control={
              <Checkbox checked={changingLives} onChange={handleChange} name="changingLives" size='large' />
            }
            label="Changing Lives"
          />
          <Typography variant="body2" component="div">
            Your donation will assist millions of people displaced, rendered homeless or deprived of basic resources by cataclysmic events, whether man-made or natural, avoidable or not
          </Typography>
          <FormControlLabel
            control={
              <Checkbox checked={savingLives} onChange={handleChange} name="savingLives" size='large' />
            }
            label="Saving Lives"
          />
          <Typography variant="body2" component="div">
            Emergencies are described as “urgent situations in which there is clear evidence that an event, or series of events, has occurred which causes human suffering or imminently threatens lives or livelihoods
          </Typography>
        </FormGroup>
        </FormControl>
        ) 
      }
      
    </div>
  );
}

export default App;
