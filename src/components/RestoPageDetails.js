import React from 'react';
import RestoList from './RestoList';
import { getData } from '../utils/data';
import forkSpoonIcon from './fork2.png'; 

function RestoPageDetails() {
 const restos = getData();
 
 return (
   <div className="resto-page__details">
     <div style={{ display: 'flex', alignItems: 'center' }}>
       <img className="fork-spoon" src={forkSpoonIcon} alt="Fork Spoon Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} /> 
       <h1>Restaurant @ Kos PLN</h1>
     </div><br/>
     <hr />
     <RestoList restos={restos} />
   </div>
 );
}
 
export default RestoPageDetails;
