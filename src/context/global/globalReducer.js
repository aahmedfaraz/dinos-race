import { DECREASE_PLAYBACKRATE_AUTOMATICALLY, GET_AND_START_OBJECT_ANIMS, PAUSE_ALL, PLAY_ALL, SET_PLAYBACKRATE } from "../types";

const globalReducer = (state, action) => {
    switch (action.type) {
        case GET_AND_START_OBJECT_ANIMS:
            return {
                ...state,
                objectAnims: [...state.objectAnims, action.payload]
            };
        case SET_PLAYBACKRATE:
            // update playbackRate of all objects
            state.objectAnims.forEach(objectAnim => objectAnim.updatePlaybackRate(action.payload));
            return {
                ...state,
                playbackRate: action.payload
            }
        case PAUSE_ALL:
            state.objectAnims.forEach(objectAnim => objectAnim.pause());
            return {
                ...state,
                running: false
            };
        case PLAY_ALL:
            state.objectAnims.forEach(objectAnim => objectAnim.play());
            return {
                ...state,
                running: true
            };
        case DECREASE_PLAYBACKRATE_AUTOMATICALLY:
            if(state.playbackRate > 1 && state.running){
                // update(decrease) playbackRate of all objects
                state.objectAnims.forEach(objectAnim => objectAnim.updatePlaybackRate(state.playbackRate * 0.5));
                return {
                    ...state,
                    playbackRate: state.playbackRate * 0.5
                }
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default globalReducer;