import React, { Component } from 'react';

class CardName extends Component {
	render() {
		return (
			<div className="flip-container centered">
				<div className="flipper">
					<div className="front" />
					<div className="back">
						<div className="container-flex">
							<h1>Naufaldi Rafif S</h1>
							<p>Front End Development</p>
							<div className="font-icons">
								<div className="icon-group">
									<span className="contact">+62 81334502312</span>
									<div className="icon-group">
										<a className="contact" href="mailto:naufaldi.rafif@gmail.com" target="_top">
											naufaldi.rafif@gmail.com
										</a>
									</div>
									<div className="icon-group">
										<a className="contact" href="http://www.kureview.web.id" target="_blank">
											www.kureview.web.id
										</a>
									</div>
									<div className="icon-group">
										<a className="contact" href="http://www.medium.com/naufaldi" target="_blank">
											medium.com/naufaldi
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="footer">
							<ul>
								<li>
									{' '}
									<a
										className="icon-box"
										href="https://www.facebook.com/naufaldi.rafifsatriya"
									>
										<i className="fa fa-facebook" />
									</a>
								</li>
								<li>
									{' '}
									<a className="icon-box" href="https://twitter.com/@f2aldi" target="_blank">
										<i className="fa fa-twitter" />
									</a>
								</li>
								<li>
									<a
										className="icon-box"
										href="https://www.linkedin.com/in/naufaldirafif/"
									>
										<i className="fa fa-linkedin" />
									</a>
								</li>
								<li>
									{' '}
									<a className="icon-box" href="https://codepen.io/naufaldi/" target="_blank">
										<i className="fa fa-codepen" />
									</a>
								</li>
								<li>
									{' '}
									<a className="icon-box" href="https://github.com/naufaldi" target="_blank">
										<i className="fa fa-github" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CardName;
