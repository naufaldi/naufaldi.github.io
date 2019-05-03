import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
// @material-ui/icons
import Email from '@material-ui/icons/Email';
import People from '@material-ui/icons/People';
// core components
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
import { cardTitle } from 'assets/jss/material-kit-react.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import card1 from "assets/img/faces/avatar.jpg";
import teamStyle from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';

const style = {
	...imagesStyles,
	cardTitle,
	textMuted: {
		color: '#6c757d'
	}
};

class ProjectSection extends React.Component {
	constructor(props) {
		super(props);
		// we use this to make the card to appear after the page has been rendered
		this.state = {
			cardAnimaton: 'cardHidden'
		};
	}
	componentDidMount() {
		// we add a hidden class to the card and after 700 ms we delete it and the transition appears
		setTimeout(
			function() {
				this.setState({ cardAnimaton: '' });
			}.bind(this),
			700
		);
	}
	render() {
		const { classes, ...rest } = this.props;
		return (
			<div className={classes.section}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={4}>
						<h2 className={classes.title}>Project</h2>
						<h5 className={classes.description}>Beberapa project yang telah saya selesaikan.</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={6} md={3}>
							<Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Deliv Beta Landing Page</h4>
									<p>
									Landing page for Deliv Beta Version
									</p>
                  <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
								</CardBody>
							</Card>

						</GridItem>
						<GridItem xs={12} sm={6} md={3} >
            <Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>CSS30</h4>
									<p>
									Course 30 Day CSS
									</p>
                  <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
								</CardBody>
							</Card>
            </GridItem>
						<GridItem xs={12} sm={6} md={3} >
            <Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Admin Kritik dan Saran</h4>
									<p>
									Dashboard Kritik dan Saran for Informatic Engineer UIN Malang
									</p>
                  <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
								</CardBody>
							</Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} >
            <Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>30 Day JS</h4>
									<p>
                    Course 30 Day JS
									</p>
                  <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
								</CardBody>
							</Card>
            </GridItem>
            <GridItem xs={12} sm={6} md={3} >
            <Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Landing Page FORKOMIF</h4>
									<p>
                    Course 30 Day JS
									</p>
								</CardBody>
                <CardFooter className={classes.cardFooter}>
                <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
                </CardFooter>
							</Card>
            </GridItem>
             <GridItem xs={12} sm={6} md={3} >
            <Card className={classes.cardSize}>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Landing Page Y2Get!</h4>
									<p>
                  Landing Page for Y2Get!
									</p>

								</CardBody>
                <CardFooter className={classes.cardFooter}>
                <Button color="info" size="sm">Github</Button>
									<Button color="primary" size="sm"> Demo</Button>
                </CardFooter>
							</Card>
            </GridItem>
					</GridContainer>
				</div>
			</div>
		);
	}
}

export default withStyles(teamStyle)(ProjectSection);
