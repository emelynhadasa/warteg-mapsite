import React from 'react';
import RestoItemBody from './RestoItemBody';
import RestoItemImage from './RestoItemImage';

function RestoItem({ imageUrl, restoName, address, priceRange }) {
 return (
   <div className="resto-item">
     <RestoItemImage imageUrl={imageUrl} />
     <RestoItemBody name={restoName} address={address} priceRange={priceRange} />
   </div>
 );
}

export default RestoItem;