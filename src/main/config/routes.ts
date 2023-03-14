import express, { Express, Router } from 'express';
import { join } from 'path';
import fg from 'fast-glob';

export default (app: Express): void => {
	const router = Router();
	app.use(express.static(join(process.cwd(), 'public')));
	app.use('/api/users', router);
	fg.sync('**/src/main/routes/**-routes.ts')
		.map(async file => (await import(`../../../${file}`)).default(router));
};
