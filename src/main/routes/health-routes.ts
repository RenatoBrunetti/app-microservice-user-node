
import { Router, Request, Response } from 'express';

export default (router: Router): void => {
	router.get('/health', (req: Request, res: Response) => {
		console.log('/health');
		res.status(200).json({
			status: 'success',
			message: '/health'
		});
	});
};
