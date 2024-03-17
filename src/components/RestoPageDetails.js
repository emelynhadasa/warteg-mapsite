import React from 'react';
import RestoList from './RestoList';
import { getData } from '../utils/data';
 
function RestoPageDetails() {
 const restos = getData();
 
 return (
   <div className="resto-page__details">
     <h1>Daftar Resto</h1>
     <RestoList restos={restos} />
   </div>
 );
}
 
export default RestoPageDetails;
