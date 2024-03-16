import React from 'react';

function RestoItemBody({ restoName, address, priceRange }) {
 return (
   <div className="resto-item__body">
     <h3 className="resto-item__name">{restoName}</h3>
     <p className="resto-item__address">{address}</p>
     <p className="resto-item__price">{priceRange}</p>
   </div>
 );
}

export default RestoItemBody;