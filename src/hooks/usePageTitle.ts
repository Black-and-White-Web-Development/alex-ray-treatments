import { useEffect } from "react";

export const usePageTitle = (title: string, siteName = "Alex Ray Wellbeing") => {
	useEffect(() => {
		document.title = `${siteName}${title ? ` | ${title}` : ""}`;
	}, [title, siteName]);
};
