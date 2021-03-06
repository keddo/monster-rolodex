import React from 'react';
import {Card} from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
<div className="card-list">
    {
      props.monstors.map(monstor => (<Card key = {monstor.id} monstor = {monstor}/>))
    }
</div>
)