import type { Treatment } from "./treatment.types";

export interface Service {
	id: number;
	image: { url: string; alt: string };
	heading: string;
	body: string[];
	treatments: Treatment[];
}
