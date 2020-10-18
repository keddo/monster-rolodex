import React from 'react';

import './card.styles.css';
export const Card = props => (
  <div className="card-container">
      <img src={`https://robohash.org/${props.monstor.id}?set=set2&size=180x180`} alt="monstor"/>
      <h3>{ props.monstor.name}</h3>
      <p>{props.monstor.email}</p>
  </div>
)