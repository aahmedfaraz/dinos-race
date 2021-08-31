import React from 'react';
import PropTypes from 'prop-types';

const StaticObject = ({ id, zIndex, src, height, width, bottom, left}) => {
    return (
        <img
            className="static-object"
            id={id}
            src={src}
            style={{
                bottom: `${bottom}%`,
                left: `${left}%`,
                height: `${height}%`,
                width: `${width}%`,
                zIndex: zIndex,
            }}
            alt="static-object"
        />
    )
}

StaticObject.propTypes = {
    id: PropTypes.string.isRequired,
    zIndex: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    bottom: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired
}

export default StaticObject;
