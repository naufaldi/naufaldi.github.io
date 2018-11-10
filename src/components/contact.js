import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl';
import {ListItemContent, List, ListItem,} from 'react-mdl/lib/List';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Naufaldi Rafif S</h2>
            <img
              src="https://res.cloudinary.com/cynux/image/upload/v1540647007/demo-app/avatar-1606916_1280.png"
              alt="Naufaldi Rafif S"
              style={{
              width: '250px',
              borderRadius: '50%'
            }}/>
            <p
              style={{
              width: '75%',
              margin: 'auto',
              paddingTop: '2em'
            }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deleniti quos et
              vero qui pariatur accusamus quisquam sint ipsum, quas aliquam tempora omnis
              dolorem accusantium impedit quaerat quia, odit maxime.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact</h2>
            <hr/>
           <div className="contact-list">
           <List>
           <ListItem>
             <ListItemContent className="list-item-content"> <i className="fas fa-envelope"></i> naufaldi.rafif@gmail.com</ListItemContent>
           </ListItem>
           <ListItem>
             <ListItemContent className="list-item-content"><i className="fas fa-phone"></i>+62 81334502312</ListItemContent>
           </ListItem>
           <ListItem>
             <ListItemContent className="list-item-content"><i className="fas fa-globe"></i> <a href="www.kureview.web.id">KuReview</a></ListItemContent>
           </ListItem>
         </List>
         </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact