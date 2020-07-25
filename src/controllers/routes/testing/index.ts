import { Request, Response, Router } from 'express';

const TestingRouter = Router();

TestingRouter.get('/test', (req: Request, res: Response) => {
  return res.status(500).send('hello testing');
});

export default TestingRouter;
