import React from 'react';
import '../../App.css';

const About = () => {
	return (
		<section className="pricing-area bg-3 pt-120 pb-120">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-4 text-center">
						<div className="section-heading section-heading-2 white mb-70">
							<h2 className="section-title-primary">Price &amp; Plans</h2>
						</div>
					</div>
				</div>
				<div className="row mt-none-30 no-gutters">
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-1.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-1-h.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title">Paket Bulanan</h4> <br />
								<h2 className="price"><span>Rp.</span>199<sup>K</sup></h2>
								<p>Setiap 50 Kilogram</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i> Lebih Hemat</li>
								<li><i className="fal fa-check"></i> Free Delivery</li>
								<li><i className="fal fa-check"></i> Cuci & Setrika</li>
								<li><i className="fal fa-check"></i> Pengerjaan 2-4 Hari</li>
							</ul>
							<a href="#0" className="site-btn">Pesan Sekarang</a>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box active">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-2-h.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-2.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title">Paket Tahunan</h4> <br />
								<h2 className="price"><span>Rp.</span>199<sup>M</sup></h2>
								<p>Setiap 100 Kilogram</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i> Super Hemat</li>
								<li><i className="fal fa-check"></i> Free Pickup & Delivery</li>
								<li><i className="fal fa-check"></i> Cuci Kering</li>
								<li><i className="fal fa-check"></i> Pengerjaan 2-3 Hari</li>
							</ul>
							<a href="#0" className="site-btn">Pesan Sekarang</a>
						</div>
					</div>
					<div className="col-xl-4 col-lg-6 mt-30">
						<div className="single-pricing-box">
							<div className="icon-wrap">
								<div className="pricing-icon">
									<img className="default" src="assets/images/icons/pricing-1-icon-3.png" alt="" />
									<img className="hover" src="assets/images/icons/pricing-1-icon-3-h.png" alt="" />
								</div>
							</div>
							<div className="pricing-head">
								<h4 className="sub-title text-danger">Paket Urgent</h4> <br />
								<h2 className="price"><span>Rp.</span>19<sup>K</sup></h2>
								<p>Setiap Item</p>
							</div>
							<ul>
								<li><i className="fal fa-check"></i> Super Cepat</li>
								<li><i className="fal fa-check"></i> Free Pickup & Delivery</li>
								<li><i className="fal fa-check"></i> Cuci & Setrika</li>
								<li><i className="fal fa-check"></i> Pengerjaan 1-24 Jam</li>
							</ul>
							<a href="#0" className="site-btn">Pesan Sekarang</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
