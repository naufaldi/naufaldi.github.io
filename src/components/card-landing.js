import React, {Component} from 'react';
import {Grid, Card, CardText,Button,IconButton,CardActions,CardMenu} from 'react-mdl';
import { CardTitle } from 'react-mdl/lib/Card';

class Cardlanding extends Component {
  render(){
    return(
      <div>
        <div className="banner-text">
            <h1>Front End Development</h1>
            <hr/>
            <p>CSS/HTML | Javascript ES6 | React JS | Agile Development</p>
          <div className="social-media-link">
            <a href="https://linkedin.com">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://facebook.com">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
      </div>
      </div>
    )
  }
}

export default Cardlanding