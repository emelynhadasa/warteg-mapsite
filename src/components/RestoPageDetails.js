import React, { useState } from 'react';
import RestoList from './RestoList';
import { getData } from '../utils/data';
import forkSpoonIcon from './fork2.png';
import sortIcon from './sort.png';

function RestoPageDetails() {
  const allRestos = getData();
  const [restos, setRestos] = useState(allRestos);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortToggle = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'; 
    setSortOrder(newSortOrder); 
    sortRestos(newSortOrder); 
  };

  const sortRestos = (order) => {
    const sortedRestos = [...restos];
    if (order === 'asc') {
      sortedRestos.sort((a, b) => parseFloat(a.priceRange.split(' ')[0]) - parseFloat(b.priceRange.split(' ')[0]));
    } else if (order === 'desc') {
      sortedRestos.sort((a, b) => parseFloat(b.priceRange.split(' ')[0]) - parseFloat(a.priceRange.split(' ')[0]));
    }
    setRestos(sortedRestos); 
  };

  return (
    <div className="resto-page__details">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className="fork-spoon" src={forkSpoonIcon} alt="Fork Spoon Icon" style={{ width: '50px', height: '50px', marginRight: '10px' }} />
        <h1>Restaurant @ Kos PLN</h1>
      </div><br />
      <div className="filter-buttons">
        <button onClick={handleSortToggle} style={{ background: 'transparent', border: 'none', padding: '0', cursor: 'pointer' }}>
          <img src={sortIcon} alt="Sort Icon" />
        </button>
      </div>
      {/* <hr /> */} <br />
      <RestoList restos={restos} />
    </div>
  );
}

export default RestoPageDetails;
