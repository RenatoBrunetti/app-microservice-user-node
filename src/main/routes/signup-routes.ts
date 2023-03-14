import { Request, Response, Router } from 'express';

export default (router: Router): void => {
	router.post('/signup', (req: Request, res: Response) => {
		console.log('/signup');
		res.status(200).json({
			status: 'success',
			message: '/signup'
		});
	});
};
