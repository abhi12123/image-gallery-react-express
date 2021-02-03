import React from 'react';
import {useParams} from "react-router-dom";
import Slide from './Slide'

const Slides = ({images}) => {
    const {page_num} = useParams();
    const first_element = 5*(page_num-1);
    const last_element = 5*page_num;
        
    return(
        <div className='gallery'>
          {
            images.slice(first_element,last_element).map(image => <Slide image={image} />)
          }
        </div>
        
    )
}

export default Slides;