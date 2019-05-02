import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
class Resume extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{ textAlign: 'center' }}>
							<img
								src="https://res.cloudinary.com/cynux/image/upload/v1540647007/demo-app/avatar-1606916_1280.png"
								alt=""
								className="avatar-img"
							/>
						</div>
						<div>
            <h2 className="">Naufaldi Rafif S</h2>
						  <h4>Frontend Engineer</h4>
						<hr />
              <p>
              Hello! I am Frontend Engineer. Have passion in making software and active in software community. I am currently concentrating on learning in Javascript. Not only that, besides being a software developer. Also became a gamers,FPS games like PUBG and Apex Legends!
              </p>
						<hr  />
						<h5>Address</h5>
					  	<p>Malang, East Java in Indonesia</p>
						<h5>Email</h5>
						  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=naufaldi.rafif@email.com">naufaldi.rafif@gmail.com</a>
            </div>
					</Cell>
					<Cell col={8} className="resume-right-col">
						<h2>Education</h2>
						<Education />
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Resume;
