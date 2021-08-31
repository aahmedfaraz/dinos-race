import React, { useContext } from 'react';
// Material Components
import { Button, Container, Typography } from '@material-ui/core';
// Context
import globalContext from '../../context/global/globalContext';

const Controls = () => {

  const {running, playbackRate, setPlaybackRateOfAllObjectsBy, pause, play} = useContext(globalContext);
  
  return (
      <Container maxWidth="md" align="center">
        <Button color="primary" onClick={play} disabled={running}>
          Play
        </Button>
        <Button color="primary" onClick={pause} disabled={!running}>
          Pause
        </Button>
        <Button color="secondary" className="speedBtn" 
          onClick={() => setPlaybackRateOfAllObjectsBy(playbackRate * 2)}
        >
          Speed Up
          <Typography variant="body2" className="speed" >{playbackRate}<small>x</small></Typography>
        </Button>
      </Container>
  )
}

export default Controls;
