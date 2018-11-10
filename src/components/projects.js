import React, { Component } from 'react'
import {Tabs, Tab,Grid, Cell,Card, CardTitle, CardText,CardActions,CardMenu,Button } from 'react-mdl';
import IconButton from 'react-mdl/lib/IconButton';

class Projects extends Component {
  constructor(props){
    super(props)
    this.state= {activeTab:0};
  }
  toggleCategories(){
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{width:'400px', margin:'auto'}}>
            <CardTitle style={{color: '#000', height:'176px', background:'url(https://res.cloudinary.com/cynux/image/upload/v1540654836/demo-app/download.png) center/cover'}}> React JS  Project 1 </CardTitle>
              <CardText>Lorem ipsum dolor sit amet.</CardText>
              <CardActions border>
                <Button colored> Github</Button>
                <Button colored> Codepen</Button>
                <Button colored> Live Demo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"></IconButton>
              </CardMenu>
          </Card>
        
       
          <Card shadow={5} style={{width:'400px', margin:'auto'}}>
            <CardTitle style={{color: '#000', height:'176px', background:'url(https://res.cloudinary.com/cynux/image/upload/v1540654836/demo-app/download.png) center/cover'}}> React JS  Project 2 </CardTitle>
              <CardText>Lorem ipsum dolor sit amet.</CardText>
              <CardActions border>
                <Button colored> Github</Button>
                <Button colored> Codepen</Button>
                <Button colored> Live Demo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"></IconButton>
              </CardMenu>
          </Card>
      
          <Card shadow={5} style={{width:'400px', margin:'auto'}}>
            <CardTitle style={{color: '#000', height:'176px', background:'url(https://res.cloudinary.com/cynux/image/upload/v1540654836/demo-app/download.png) center/cover'}}> React JS Project 3 </CardTitle>
              <CardText>Lorem ipsum dolor sit amet.</CardText>
              <CardActions border>
                <Button colored> Github</Button>
                <Button colored> Codepen</Button>
                <Button colored> Live Demo</Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
                <IconButton name="share"></IconButton>
              </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1){
      return(
        <div>
          <h1>Vue JS</h1>
        </div>
      ) 
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <h1>Vanilla JS</h1>
        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
          <div>
            <h1>JQuery</h1>
          </div>
      )
    }
  }
  render () {
    return (
      <div className="project-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId}) } ripple >
          <Tab>React</Tab>
          <Tab>Vue JS</Tab>
          <Tab>Vanilla JS</Tab>
          <Tab>JQuery</Tab>
        </Tabs>
        <Grid >
          <Cell col={12}>
          <div className="content">
          {this.toggleCategories()}
          </div>
          </Cell>
        </Grid>
        
      </div>
    )
  }
}

export default Projects