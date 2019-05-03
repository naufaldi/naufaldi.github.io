import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Phone from "@material-ui/icons/Smartphone"
import Laptop from "@material-ui/icons/Laptop";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class SkillSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Skills</h2>
            <h5 className={classes.description}>
            There is a lot of new technology in the development of Industry 4.0. So I am very happy to try new things and start getting new knowledge and experience
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Responsive"
                description="Everything in myproject will easy to open in every device"
                icon={Phone}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Modern"
                description="Using new technology that suits your needs will accelerate performance"
                icon={Laptop}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Dynamic"
                description="Simple to use and will easy more"
                icon={Cloud}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem   xs={12} sm={12} md={12} >
            <Button
                  color="info"
                  href="https://github.com/naufaldi/My-Learning-Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  More About My Skills
                </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(SkillSection);
