import clsx from "clsx";
import { NavigationMenu } from "radix-ui";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import NavItem from "./NavItem";
import "./Navigation.scss";

const Navigation = function () {
	const isMobile = useBreakpoint();

	return (
		<NavigationMenu.Root className={clsx("nav", { "nav--mobile": isMobile })}>
			<NavigationMenu.List className="nav__list">
				<NavItem to="/" name="Home" />
				<NavItem to="/about" name="About" />
				<NavItem to="/treatments" name="Treatments" />
				<NavItem isCta={true} to="/book" name="Book a treament" />
			</NavigationMenu.List>
		</NavigationMenu.Root>
	);
};

export default Navigation;
