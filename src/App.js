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
          <Header className="header-color" title="NRS" scroll>
              <Navigation>
              <Link to="/" className="link-swipe" >Home</Link>
                  <Link to="/resume" className="link-swipe">Resume</Link>
                  <Link to="/aboutme" className="link-swipe">Aboutme</Link>
                  <Link to="/projects "className="link-swipe">Project</Link>
                  <Link to="/contact" className="link-swipe">Contact</Link>
              </Navigation>
          </Header>
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
