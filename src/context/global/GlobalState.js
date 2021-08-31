import React, {useReducer} from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import {DECREASE_PLAYBACKRATE_AUTOMATICALLY, GET_AND_START_OBJECT_ANIMS, PAUSE_ALL, PLAY_ALL, SET_PLAYBACKRATE} from '../types';

const GlobalState = props => {

    const initialState = {
        objectAnims: [],
        running: true,
        playbackRate: 1
    }

    const [state, dispatch] = useReducer(globalReducer, initialState);

    // 1 - Function to start animation from parent component to get ObjectAnims of all objects (This is starting point of every animation)
    const getAndStartObjectAnimations = ( id, keyframes, options ) => {
        // Get object and start animation
        const object = document.getElementById(id);
        const objectAnim = object.animate(keyframes, options);
        // Add objectAnim into the array
        dispatch({
            type: GET_AND_START_OBJECT_ANIMS,
            payload: objectAnim
        })
    }
  
    // 2 - Function to set playbackRate of every moving thing at the same time from parent element
    const setPlaybackRateOfAllObjectsBy = value => {
      // update playbackRate of all objects
      dispatch({
          type: SET_PLAYBACKRATE,
          payload: value
      })
    }
    
    // 3 - Function to pause all animations
    const pause = () => {
      dispatch({type: PAUSE_ALL});
    }
    
    // 4 - Function to play all animations (after pause)
    const play = () => {
      dispatch({type: PLAY_ALL});
    }

    // 5 - Function to reduce playbackRate automatically if exceeds from 1
    const reducePlaybackRateAutomatically = () => {
        setInterval(() => {
            dispatch({
                type: DECREASE_PLAYBACKRATE_AUTOMATICALLY
            })
        }, 2000);
    }

    return (
        <globalContext.Provider
            value={{
                running: state.running,
                playbackRate: state.playbackRate,
                getAndStartObjectAnimations: getAndStartObjectAnimations,
                setPlaybackRateOfAllObjectsBy: setPlaybackRateOfAllObjectsBy,
                reducePlaybackRateAutomatically:reducePlaybackRateAutomatically,
                pause: pause,
                play: play
            }}
        >
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalState;