import React from 'react'

const HomeLayout = () => {
    return (
        <div className="homepage_container">
			<div className="fullscreen_background"></div>
			<div className="homepage_content">
				<div className="homepage_body">
					<div className="homepage_body_title"><span className="fa fa-apple"></span> i-Tune</div>
					<div className="homepage_body_info_wrap">
						<div className="homepage_body_text">
							A beautiful tool for iTunes search.<br />Built into your browser.
						</div>
						<div className="homepage_body_subtext">
							Look up for the Artists,songs and apps that you would enjoy in your device
						</div>
						<div className="start_button">
							<a href='http://localhost:3000/search-grid'>Start Searching</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default HomeLayout;