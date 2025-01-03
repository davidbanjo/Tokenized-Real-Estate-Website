import React from 'react'
import "./team.css"

const Team = () => {
  return (
    <div className="main-content">
		<div className="container">
			<h2 className="text-center sectionTitleText">Our <b>Team</b></h2>
			<p className="text-center text-muted">Meet the members of our Leadership team.</p>
			<br></br>
			<div className="row">
				<div className="col-lg-4 col-md-6 col-sm-12 mb-4">
					<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
						<div className="profile-card_image">
							<img src="img/team/dapo.jpg" alt="User" className="mb-4 shadow" />
						</div>
						<div className="profile-card_details">
							<h3 className="mb-0">Oladapo Grey</h3>
							<p className="text-muted">CEO</p>
							<p className="text-muted">A serial Business enthusiast, with interest in using technology to solve various life problems</p>
						</div>
						<div className="profile-card_social text-center p-4">
							<a href="#!" className="d-inline-block">
								<img src="img/social/linkedin.png" alt="Linkedin" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/twitter.png" alt="Twitter" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/facebook.png" alt="Facebook" />
							</a>
						</div>
					</div>
				</div>
				{/*<div className="col-lg-4 col-md-6 col-sm-12 mb-4">*/}
				{/*	<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">*/}
				{/*		<div className="profile-card_image">*/}
				{/*			<img src="img/team/dean.jpg" alt="User" className="mb-4 shadow" />*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_details">*/}
				{/*			<h3 className="mb-0">Dean Enzo</h3>*/}
				{/*			<p className="text-muted">COO</p>*/}
				{/*			<p className="text-muted">A goal driven individual with experience in managing various entreprenueral project based activities across West-Africa</p>*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_social text-center p-4">*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/linkedin.png" alt="Linkedin" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/twitter.png" alt="Twitter" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/facebook.png" alt="Facebook" />*/}
				{/*			</a>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				<div className="col-lg-4 col-md-6 col-sm-12 mb-4">
					<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
						<div className="profile-card_image">
							<img src="img/team/cto.jpg" alt="User" className="mb-4 shadow" />
						</div>
						<div className="profile-card_details">
							<h3 className="mb-0">Ajibade Quwiyu</h3>
							<p className="text-muted">CTO</p>
							<p className="text-muted">The Chief-Technical Officer for mixfits with a lot of interest in virtual reality and Augumented Reality</p>
						</div>
						<div className="profile-card_social text-center p-4">
							<a href="#!" className="d-inline-block">
								<img src="img/social/linkedin.png" alt="Linkedin" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/twitter.png" alt="Twitter" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/facebook.png" alt="Facebook" />
							</a>
						</div>
					</div>
				</div>
				{/*<div className="col-lg-4 col-md-6 col-sm-12 mb-4">*/}
				{/*	<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">*/}
				{/*		<div className="profile-card_image">*/}
				{/*			<img src="img/team/nelo.jpg" alt="User" className="mb-4 shadow" />*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_details">*/}
				{/*			<h3 className="mb-0">Chinelonma Anaetoh</h3>*/}
				{/*			<p className="text-muted">CHRO</p>*/}
				{/*			<p className="text-muted">An experienced HR and business consultant passionate creating wonderful human experiences for organizations, employees and its customers. </p>*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_social text-center p-4">*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/linkedin.png" alt="Linkedin" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/twitter.png" alt="Twitter" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/facebook.png" alt="Facebook" />*/}
				{/*			</a>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				{/*<div className="col-lg-4 col-md-6 col-sm-12 mb-4">*/}
				{/*	<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">*/}
				{/*		<div className="profile-card_image">*/}
				{/*			<img src="img/team/david.jpg" alt="User" className="mb-4 shadow" />*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_details">*/}
				{/*			<h3 className="mb-0">David Banjo</h3>*/}
				{/*			<p className="text-muted">Operations Manager</p>*/}
				{/*			<p className="text-muted">An experienced web designer and team lead with a proven track record of managing teams of different sizes</p>*/}
				{/*		</div>*/}
				{/*		<div className="profile-card_social text-center p-4">*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/linkedin.png" alt="Linkedin" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/twitter.png" alt="Twitter" />*/}
				{/*			</a>*/}
				{/*			<a href="#!" className="d-inline-block">*/}
				{/*				<img src="img/social/facebook.png" alt="Facebook" />*/}
				{/*			</a>*/}
				{/*		</div>*/}
				{/*	</div>*/}
				{/*</div>*/}
				<div className="col-lg-4 col-md-6 col-sm-12 mb-4">
					<div className="profile-card bg-white shadow mb-4 text-center rounded-lg p-4 position-relative h-100">
						<div className="profile-card_image">
							<img src="img/team/valentina.jpg" alt="User" className="mb-4 shadow" />
						</div>
						<div className="profile-card_details">
							<h3 className="mb-0">Valentina Chukwulobe
</h3>
							<p className="text-muted">CFO</p>
							<p className="text-muted">An experienced accountant with multile experiences in making profitable financial decisions</p>
						</div>
						<div className="profile-card_social text-center p-4">
							<a href="#!" className="d-inline-block">
								<img src="img/social/linkedin.png" alt="Linkedin" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/twitter.png" alt="Twitter" />
							</a>
							<a href="#!" className="d-inline-block">
								<img src="img/social/facebook.png" alt="Facebook" />
							</a>
						</div>
					</div>
				</div>
			</div>
        </div>
	</div>
  )
}

export default Team