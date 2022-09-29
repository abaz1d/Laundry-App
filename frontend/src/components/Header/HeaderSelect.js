import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Modal,
	NavbarBrand,
	NavItem,
	NavLink,
} from 'reactstrap';
import '../../App.css';
import userPhoto from '../../images/auth/man.png';
import { useAuth } from '../Authentication/useAuth';

const Header = (props) => {
	const auth = useAuth();
	const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });
	const headerRef = useRef(null);
	const [modalLive, setModalLive] = useState(false);

	// handle scroll event
	const handleScroll = (elTopOffset, elHeight) => {
		if (window.pageYOffset > (elTopOffset + elHeight)) {
			setSticky({ isSticky: true, offset: elHeight });
		} else {
			setSticky({ isSticky: false, offset: 0 });
		}
	};

	// add/remove scroll event listener
	useEffect(() => {
		var header = headerRef.current.getBoundingClientRect();
		const handleScrollEvent = () => {
			handleScroll(header.top, header.height)
		}

		window.addEventListener('scroll', handleScrollEvent);

		return () => {
			window.removeEventListener('scroll', handleScrollEvent);
		};
	}, []);

	const totalQuantity = props.cart.reduce((totalQuantity, product) => {
		return totalQuantity + product.quantity;
	}, 0);

	return (
		<div style={{ marginTop: sticky.offset }}>
			{/* <!-- header start --> */}
			<header className="site-header">
				<div className="header-top-area">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<div className="col-xl-6 col-lg-8 col-md-12 custom-width-note text-center">
								<div className="header-top-note header-top-note-3">
									<p><strong>Buka Setiap Hari, dari jam 7.00 Pagi - 10.00 Malam</strong></p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="sticky-header" className={`nav-area${sticky.isSticky ? ' sticky-header animated fadeInDown' : ''}`} ref={headerRef}>
					<div className="container-fluid">
						<div className="row align-items-lg-center align-items-start">
							<div className="col-xl-3 col-lg-2">
								<div className="header-info-left-wrap">
									<div className="header-info-left">
										<Link to="/">
											<NavbarBrand onClick={(e) => e.preventDefault()}>
												<a className="site-logo">
													<img src="assets/images/logo/logo.png" alt="Cleanixer" />
												</a>
											</NavbarBrand>
										</Link>
										<a href="#0" className="site-btn">Appointment <span className="icon"><i
											className="fal fa-calendar-alt"></i></span></a>
									</div>
									<div className="mobile-menu"></div>
								</div>
							</div>
							<div className="col-xl-6 col-lg-8 d-none d-xl-block d-lg-block">
								<div className="main-menu">
									<nav id="mobile-menu">
										<ul>
											<li><Link to="/">Home</Link></li>
											<li><Link to="">About</Link></li>
											<li><Link to="/services">Services</Link></li>
											<li><Link to="/dashboard">Transactions</Link></li>
											<li><a href="#0">News +</a>
												<ul class="sub-menu">
													<li><a href="#">Blog</a></li>
													<li><a href="#">Blog Details</a></li>
												</ul>
											</li>
											<li><a href="#0">Pages +</a>
												<ul class="sub-menu">
													<li><a href="#">Offer</a></li>
													<li><a href="#">Faq</a></li>
													<li><a href="#">Contact</a></li>
													<li><a href="#">Team</a></li>
													<li><a href="#">Team Details</a></li>
													<li><a href="#">Portfolio</a></li>
													<li><a href="#">Portfolio Details</a></li>
													<li><a href="#">Pricing Plans</a></li>
												</ul>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="col-xl-3 col-lg-2 d-none d-xl-block d-lg-block">
								<div className="header-info-right">
									<NavItem>
										{auth.user ? (
											<div className="header-lang">
												<div className="lang-icon">
													<a href="#0" className="site-btn">{auth.user.displayName}<span className=""><img
														className="ml-3"
														src={auth.user.photoURL ? auth.user.photoURL : userPhoto}
														width="35px"
														alt="user"
													/></span></a>
												</div>
												<ul className="header-lang-list">
													<li><a href="#0" onClick={() => setModalLive(true)}>My Profile</a></li>
													<li><a href="#0" onClick={() => { auth.signOut(); }}>Sign Out</a></li>
												</ul>
											</div>
										) : (
											<div className="header-lang">
												<div className="lang-icon">
													<a href="/login" className="site-btn">Login <span className="icon"><i className="fas fa-sign-in"></i></span></a>
												</div>
											</div>
										)}
									</NavItem>
									<div className="header-button-list">
										<button className="btn search-trigger"><i className="fal fa-search"></i></button>
										<NavItem>
											<Link to="/cart-and-shipment">
												<NavLink>
													<button className="notif">
														<i className="fal fa-shopping-cart"></i>
														{totalQuantity ? <span className="badge">{totalQuantity}</span> : <span />}
													</button>
												</NavLink>
											</Link>
										</NavItem>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* <!-- header end --> */}

			{/* <!-- breadcrumb area start --> */}
			<section className="breadcrumb-area pt-10 pb-10 bg_img" data-overlay="5">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="breadcrumb-text">
								<h1 className="breadcrumb-title">Select Services</h1>
								<p><span>Welcome</span> to our laundry company</p>
							</div>
						</div>
						<div className="col-lg-6 my-auto">
							<div className="breadcrumb-nav">
								<ul>
									<li><a href="/">Home</a></li>
									<li>|</li>
									<li>Services</li>
									<li>|</li>
									<li>Select Services</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<hr></hr>
			{/* <!-- breadcrumb area end --> */}

			<Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
				<div className="modal-header">
					<h5 className="modal-title text-primary" id="exampleModalLiveLabel">
						Email Verification
					</h5>
					<button aria-label="Close" className="close" type="button" onClick={() => setModalLive(false)}>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<div className="modal-body">
					<p>Verify your email for Cleanixer Online Laundry Web App</p>
				</div>
				<div className="modal-footer">
					<Button color="danger" type="button" onClick={() => setModalLive(false)}>
						Close
					</Button>
					<a href="https://mail.google.com/mail/u/0/#inbox" rel="noopener">
						<Button color="success" type="button" onClick={() => setModalLive(false)}>
							Go to Email Inbox
						</Button>
					</a>
				</div>
			</Modal>
		</div>
	);
};

export default Header;
