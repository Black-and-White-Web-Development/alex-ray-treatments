import React from "react";

const BookingWidget: React.FC = () => {
	return (
		<div className="booking-widget-container">
			<iframe
				src="https://bookings.gettimely.com/alexraytreatments1/bb/book"
				scrolling="no"
				id="timelyWidget"
				style={{ width: "480px", height: "600px", border: "none" }}
				title="Booking Widget"
				// most secure, least control
				// sandbox="allow-scripts allow-forms allow-popups allow-top-navigation"

				// less secure, medium control, can configure which controls to hand over
				// sandbox="allow-scripts allow-forms allow-popups allow-top-navigation-by-user-activation allow-downloads"

				// least secure, most control
				// eslint-disable-next-line react-dom/no-unsafe-iframe-sandbox
				sandbox="allow-scripts allow-forms allow-same-origin allow-popups allow-top-navigation"
			/>
		</div>
	);
};

export default BookingWidget;
