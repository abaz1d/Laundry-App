import React, { useState } from 'react';

const Preloader = () => {
	const [message, setMessage] = useState('d-none');

	setTimeout(() => {
		setMessage('d-block');
	}, 5000);

	function refreshPage() {
		window.location.reload();
	}

	return (
		<div>
			<div id="preloader">
				<div id="ctn-preloader" className="ctn-preloader">
					<div className="animation-preloader">
						<div className="spinner"></div>
						<div className="txt-loading">
							<span data-text-preloader="C" className="letters-loading">
								C
							</span>
							<span data-text-preloader="L" className="letters-loading">
								L
							</span>
							<span data-text-preloader="E" className="letters-loading">
								E
							</span>
							<span data-text-preloader="A" className="letters-loading">
								A
							</span>
							<span data-text-preloader="N" className="letters-loading">
								N
							</span>
							<span data-text-preloader="I" className="letters-loading">
								I
							</span>
							<span data-text-preloader="X" className="letters-loading">
								X
							</span>
							<span data-text-preloader="E" className="letters-loading">
								E
							</span>
							<span data-text-preloader="R" className="letters-loading">
								R
							</span>
						</div>
					</div>
					<div className="loader">
						<div className="row">
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-left">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
							<div className="col-3 loader-section section-right">
								<div className="bg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={message}>
				<button className="btn btn-primary mt-3" onClick={refreshPage}>
					Please Reload the Page
				</button>
			</div>
		</div>
	);
};

export default Preloader;
