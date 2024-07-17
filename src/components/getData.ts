// import {db} from "../../drizzle/db"
import { randQuote } from '@ngneat/falso';
export const getData = async () => {
	// const data = await db.query.users.findFirst()
	const data = randQuote();
	await wait(2000);
	return data;
};

function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
