import React, {Component} from 'react';
import './scss/main.css';
import Main from './components/main.js';
import {Layout, Header, Navigation,Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="React Website" scroll>
              <Navigation>
              <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">Aboutme</Link>
                  <Link to="/projects">Project</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title="React Website">
              <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">Aboutme</Link>
              <Link to="/projects">Project</Link>
              <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
