import React from 'react';

function RestoItemImage({ imageUrl }) {
 return (
   <div className="resto-item__image">
     <img src={imageUrl} alt="restaurant img"/>
   </div>
 );
}

export default RestoItemImage;