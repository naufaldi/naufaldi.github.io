import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl';
import Cardlanding from './card-landing'
import CardName from './cardName';

class Landingpage extends Component {
  render () {
    return (
      <div style={{width: '100%', margin:'auto'}} >
      <Grid className="landing-grid" >
        <Cell col={12} className="flex flex-align">
         <CardName />
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Landingpage