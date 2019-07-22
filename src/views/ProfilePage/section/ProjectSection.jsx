import React from 'react';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import Card from 'components/Card/Card.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';
import imagesStyles from 'assets/jss/material-kit-react/imagesStyles.jsx';
import { cardTitle } from 'assets/jss/material-kit-react.jsx';
import card1 from 'assets/img/design.jpg';
import teamStyle from 'assets/jss/material-kit-react/views/landingPageSections/teamStyle';

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
						<h5 className={classes.description}>Some of my individual project for learning and other stuff.</h5>
					</GridItem>
				</GridContainer>
				<div>
					<GridContainer justify="center">
						<GridItem xs={12} sm={6} md={3}>
							<Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Deliv Beta Landing Page</h4>
									<p>Landing page for Deliv Beta Version</p>
								</CardBody>
								<CardFooter>
									<Button color="info" size="sm" disabled>
										Github
									</Button>
									<Button color="primary" size="sm"  href="https://react-deliv.netlify.com/" target="_blank" >
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>CSS30</h4>
									<p>Course 30 Day CSS</p>
								</CardBody>
								<CardFooter>
									<Button color="info" size="sm" href="https://github.com/naufaldi/learning-css/tree/master/css30" target="_blank">
										Github
									</Button>
									<Button color="primary" size="sm" disabled>
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>30 Day JS</h4>
									<p>Course 30 Day JS</p>
								</CardBody>
								<CardFooter>
									<Button color="info" size="sm" href="https://github.com/naufaldi/learning-js/tree/master/30-day-js" target="_blank">
										Github
									</Button>
									<Button color="primary" size="sm" disabled>
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Practice React + Material Design </h4>
									<p>Example Web Page using Material Design + React</p>
								</CardBody>
								<CardFooter className={classes.cardFooter}>
									<Button color="info" size="sm" disabled>
										Github
									</Button>
									<Button color="primary" size="sm" href="https://naufaldi.netlify.com/" target="_blank" >
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card className={classes.cardSize}>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Guess Flag</h4>
									<p>Practice from Tutorial making WebApp for Guess Flag</p>
								</CardBody>
								<CardFooter className={classes.cardFooter}>
									<Button color="info" size="sm" href="https://github.com/naufaldi/learning-css/tree/master/udemy-advance-bootcamp/react-app/flag-game" target="_blank">
										Github
									</Button>
									<Button color="primary" size="sm" href="http://flag-nrs.surge.sh/" target="_blank">
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card className={classes.cardSize}>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Recipe App</h4>
									<p>Practice from Tutorial making WebApp for Recipe App</p>
								</CardBody>
								<CardFooter className={classes.cardFooter}>
									<Button color="info" size="sm" href="https://github.com/naufaldi/learning-css/tree/master/udemy-advance-bootcamp/react-app/recipe-with-state" target="_blank">
										Github
									</Button>
									<Button color="primary" size="sm" href="recipe-nrs.surge.sh" target="_blank">
										{' '}
										Demo
									</Button>
								</CardFooter>
							</Card>
						</GridItem>
						<GridItem xs={12} sm={6} md={3}>
							<Card className={classes.cardSize}>
								<img className={classes.imgCardTop} src={card1} alt="Card-img-cap" />
								<CardBody>
									<h4 className={classes.cardTitle}>Memory Game</h4>
									<p>Practice from Tutorial making WebApp for Memory Game</p>
								</CardBody>
								<CardFooter className={classes.cardFooter}>
									<Button color="info" size="sm" href="https://github.com/naufaldi/learning-css/tree/master/udemy-advance-bootcamp/react-app/memory-game" target="_blank">
										Github
									</Button>
									<Button color="primary" size="sm" href="memory-nrs.surge.sh" target="_blank">
										{' '}
										Demo
									</Button>
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
