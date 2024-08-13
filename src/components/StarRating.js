import React, { useState } from 'react';
import Star from './Star';

const StarRating = () => {
   
  const [courseRating,setCourseRating] = useState();

    
    const renderStars = () =>{
        let stars = []
        const maxRating = 5;
        for(let i = 0; i < maxRating; i++){
            stars.push(
                <Star 
                isSelected={courseRating > i}
                setRating={ () => handlingSetRating(i + 1)}
                key={i}
                />
            )
        }
        return stars
    }

   
    const handlingSetRating = (rating) => {
        if(courseRating === rating){
            setCourseRating(0)
        }else
       { 
        setCourseRating(rating);
    }
    }

    return (
        <ul className='course--stars'>
            {renderStars()}
        </ul>
    );
}

export default StarRating;