import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
// Context
import globalContext from '../../context/global/globalContext';

const AnimatedObject = ({ id, zIndex, src, height, width, bottom, delay, duration ,flipVertically, flipHorizontally }) => {

    const {getAndStartObjectAnimations} = useContext(globalContext);

    const keyframes = [
        {transform: `translateX(calc(100vw + ${width}vw)) ${flipVertically?'rotateY(180deg)':''} ${flipHorizontally?'rotateX(180deg)':''}`},
        {transform: `translateX(0) ${flipVertically?'rotateY(180deg)':''} ${flipHorizontally?'rotateX(180deg)':''}`},
    ]

    const options = {
        duration: duration,
        delay: delay,
        iterations: 'Infinity',
        playbackRate: 1
    }

    useEffect(() => {
        getAndStartObjectAnimations(id, keyframes, options);
        // eslint-disable-next-line
    }, [])

    return (
        <img
            className="animated-object"
            id={id}
            src={src}
            style={{
                bottom: `${bottom}%`,
                left: `-${width}%`,
                height: `${height}%`,
                width: `${width}%`,
                zIndex: zIndex,
            }}
            alt="animated-object"
        />
    )
}

AnimatedObject.propTypes = {
    id: PropTypes.string.isRequired,
    zIndex: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    bottom: PropTypes.number.isRequired,
    delay: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
    flipVertically: PropTypes.bool.isRequired,
    flipHorizontally: PropTypes.bool.isRequired
}

export default AnimatedObject;
