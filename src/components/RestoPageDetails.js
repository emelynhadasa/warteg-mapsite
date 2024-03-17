import React from 'react';
import RestoList from './RestoList';
import { getData } from '../utils/data';
import forkSpoonIcon from './fork-spoon.png'; // Import the icon file

function RestoPageDetails() {
 const restos = getData();
 
 return (
   <div className="resto-page__details">
     <div style={{ display: 'flex', alignItems: 'center' }}>
       <img src={forkSpoonIcon} alt="Fork Spoon Icon" style={{ width: '40px', height: '40px', marginRight: '10px' }} /> {/* Icon */}
       <h1>Restaurant @ Kos PLN</h1>
     </div>
     <h3>3 Restaurants</h3>
     <hr />
     <RestoList restos={restos} />
   </div>
 );
}
 
export default RestoPageDetails;
