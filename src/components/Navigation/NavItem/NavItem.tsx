import clsx from "clsx";
import { NavigationMenu } from "radix-ui";
import { NavLink, type NavLinkProps } from "react-router-dom";

interface NavItemProps {
	to: string;
	name: string;
	isCta?: boolean;
}

type RouterNavLinkProps = NavLinkProps & {
	ref?: React.Ref<HTMLAnchorElement>;
	isCta: boolean;
};

const RouterNavLink = (props: RouterNavLinkProps) => {
	const { ref, isCta, ...rest } = props;

	return (
		<NavLink
			ref={ref}
			{...rest}
			className={({ isActive, isPending }) =>
				clsx("nav__link", {
					"nav__link--active": isActive,
					"nav__link--pending": isPending,
					"nav__link--cta": isCta,
				})
			}
		/>
	);
};

const NavItem = function ({ to, name, isCta = false }: NavItemProps) {
	return (
		// <NavigationMenu.Item className="nav__list-item">
		<NavigationMenu.Item className="nav__list-item">
			<NavigationMenu.Link asChild>
				<RouterNavLink to={to} isCta={isCta}>
					{name}
				</RouterNavLink>
			</NavigationMenu.Link>
		</NavigationMenu.Item>
	);
};

export default NavItem;
