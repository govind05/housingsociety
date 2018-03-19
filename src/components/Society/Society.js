import React from 'react';
import { withRouter } from 'react-router-dom';

import './Society.css';

const society = (props) => {
  //Sorting all residents according to floor and flat no.
  let sortedResidents = props.residents[props.match.params.wing].sort((a, b) => {
    return a.floor - b.floor
  }).sort((a, b) => a.flatNo - b.flatNo)

  //Getting all the unique floors.
  let floors = sortedResidents.reduce((uniqueFloors, resident) => {
    if (resident.floor && !~uniqueFloors.indexOf(resident.floor)) uniqueFloors.push(resident.floor)
    return uniqueFloors;
  }, []);

  //Mapping all floors to their respective residents. 
  let residents = floors.map(floor => {
    let residentsCurrentFloor = sortedResidents.filter(resident => resident.floor === floor);
    return (
      <div className='Floor' key={floor}>
        <h1>Floor {floor}</h1>
        <div className='Residents' >
          {
            residentsCurrentFloor.map(resident => (
              <div key={resident.flatNo}>
                <p>{resident.flatNo}</p>
                <h1 style={{ wordWrap: 'break-word' }}>{resident.name}</h1>
              </div>
            ))
          }
        </div>
      </div>
    );
  });

  return (
    <div className='Society'>
      {residents}
    </div>
  )
}

export default withRouter(society);