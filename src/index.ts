import express, {Request, Response, NextFunction} from 'express'
import { userRouter } from './users/users';
const app = express();

const PORT = 4000;
const serverHandling = () => {
  console.log(`Server is running on port ${PORT}`);
};

app.use( '/users', userRouter)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message)
  res.status(401).send(err.message)
})

app.listen(PORT, serverHandling);
