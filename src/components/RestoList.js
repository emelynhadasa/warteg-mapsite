import React from 'react';
import RestoItem from './RestoItem';
 
function RestoList({ restos }) {
 return (
   <div className="resto-list">
     {
       restos.map((resto) => (
         <RestoItem key={resto.id} {...resto} />
       ))
     }
   </div>
 );
}
 
export default RestoList;