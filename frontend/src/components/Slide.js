import React from 'react';

const Slide = ({image}) => {
    return(
        <div className='slide'>
            <img src={image.file} alt='image'/>
            <h3>by {image.owner}</h3>
            <h3>{image.height} X {image.width}</h3>
            <h3>keyword : {image.keyword}</h3>
        </div>
    )
}

export default Slide