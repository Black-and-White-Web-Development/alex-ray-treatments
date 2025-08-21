import type { RouteObject } from "react-router-dom";

import { AccessibilityStatement, CookiePolicy, PrivacyPolicy, TermsOfUse } from "@/pages/legal";

const routes: RouteObject = {
	path: "/",
	children: [
		{ path: "accessibility-statement", element: <AccessibilityStatement /> },
		{ path: "cookie-policy", element: <CookiePolicy /> },
		{ path: "privacy-policy", element: <PrivacyPolicy /> },
		{ path: "terms-of-use", element: <TermsOfUse /> },
	],
};

export default routes;
