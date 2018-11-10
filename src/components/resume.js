import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education'
class Resume extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Cell col={4}>
        <div style={{textAlign:'center'}}>
        <img src="https://res.cloudinary.com/cynux/image/upload/v1540647007/demo-app/avatar-1606916_1280.png" alt="" className="avatar-img"/>
        </div>
        <h2>Naufaldi Rafif S</h2>
        <h4>Programmer</h4>
        <hr style={{borderTop:'3px solid #833fb2'}}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempore aspernatur eos, hic fuga iure voluptatem perferendis tenetur dignissimos voluptatibus! Tenetur magni, repudiandae culpa quo repellat ab eum fugiat excepturi!</p>
        <hr style={{borderTop:'3px solid #833fb2'}}/>
        <h5>Address</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <h5>Phone</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <h5>Email</h5>
        <p>Lorem ipsum dolor sit amet.</p>
        <hr style={{borderTop:'3px solid #833fb2'}}/>
        </Cell>
        <Cell col={8} className="resume-right-col" >
        <h2>Education</h2>
          <Education></Education>
        </Cell>
      </Grid>
      </div>
    );
  }
}

export default Resume;