import red from '@material-ui/core/colors/red';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import React from 'react';
import { Button, Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > svg': {
			margin: theme.spacing(2),
		},
	},
}));

const ContactUs = () => {

	const classes = useStyles();

	return (
		<section id="contactUs" className="mb-5 mt-5">
			<Container>
				<div className="d-flex justify-content-center mb-4">
					<h2 className="text-primary head-title mt-1">Contact Us</h2>
				</div>
				<Row>
					<Col md={6}>
						<Form>
							<FormGroup>
								<label htmlFor="exampleFormControlInput1">Nama Lengkap</label>
								<Input id="exampleFormControlInput1" placeholder="Your full name" type="text" />
							</FormGroup>
							<FormGroup>
								<label htmlFor="exampleFormControlInput1">Email Address</label>
								<Input id="exampleFormControlInput1" placeholder="name@example.com" type="email" />
							</FormGroup>
							<FormGroup>
								<label htmlFor="exampleFormControlInput1">Phone Number</label>
								<Input id="exampleFormControlInput1" placeholder="01XXX XXX XXX" type="number" />
							</FormGroup>
							<FormGroup>
								<label htmlFor="exampleFormControlTextarea1">Pesan/ Masukan Anda</label>
								<Input id="exampleFormControlTextarea1" rows="2" type="textarea" />
							</FormGroup>
						</Form>
						<Button color="danger" className="nav-name" type="submit">
							<i className="now-ui-icons ui-1_send" /> Kirim
						</Button>
					</Col>
					<Col md={6} className="pl-5">
						<div className="my-4">
							<h6 className="my-3 text-dark">
								Katakan Halo <i class="fas fa-heart" style={{ color: red[500] }}></i>
							</h6>
							<h3 className="text-primary">Hubungi kami, kirim email atau hubungi kami melalui WhatsApp</h3>
						</div>
						<hr/>
						<p>
							<b>Visi Kami Adalah - <spacing/>
							<strong className="text-dark">
								Cucian bersih dalam waktu penyelesaian sesingkat mungkin
							</strong></b>
						</p>
						<hr/>
						<p>
							Ada Pertanyaan? Kritik? Saran? Keraguan eksistensial? <br />Kami siap mendengarkan
							tentang Anda!
						</p>
						<div className={classes.root}>
							<span className="text-primary">Ikuti Kami di </span>
							<FacebookIcon style={{ color: red[500] }} />
							<InstagramIcon style={{ color: red[500] }} />
							<YouTubeIcon style={{ color: red[500] }} />
							<LinkedInIcon style={{ color: red[500] }} />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default ContactUs;
