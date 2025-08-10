import PageNotFound from "@/components/PageNotFound";

import type { RouteObject } from "react-router-dom";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Treatments from "@/pages/Treatments";
import Root from "@/Root";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "treatments", element: <Treatments /> },
			{ path: "book", element: <Contact /> },
		],
	},
];

export default routes;
