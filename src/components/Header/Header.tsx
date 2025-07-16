import { useBreakpoint } from "@/hooks/useBreakpoint";

import Navigation from "@/components/Navigation";
import NavigationDialog from "@/components/NavigationDialog";
import "./Header.scss";

import logo from "@/assets/alex-ray-treatments-logo.svg";

const Header = function () {
	const isMobile = useBreakpoint();

	return (
		<header className="header fb-col-wrapper">
			<div className="header__content">
				<img className="header__logo" src={logo} alt="" width="48" height="48" />
				{isMobile ? <NavigationDialog /> : <Navigation />}
			</div>
		</header>
	);
};

export default Header;
