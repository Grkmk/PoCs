import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer, gql } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express, {
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler
} from 'express';

import { User } from './entity/User';

dotenv.config();

const app = express();
const path = '/graphql';
const origin = process.env.BUILD === 'prod' ? process.env.CLIENT_URL! : '*';

app.use(bodyParser.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'DELETE, GET, PATCH, POST, PUT'
  );
  next();
});

app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (res.headersSent) return next(err);
    res.status(500).json({ message: 'An unexpected error occurred' });
  }
);

const typeDefs = gql`
  type Query {
    announcement: String
  }
`;
const resolvers = { Query: { announcement: () => `new Apollo Server!` } };

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app, path });

app.listen({ port: 3000 }, () => {
  console.log('Listening on port 3000...');
  console.log(
    `GraphQl server ready at http://localhost:3000${server.graphqlPath}`
  );
});

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...');
    const user = new User();
    user.firstName = 'Timber';
    user.lastName = 'Saw';
    user.age = 25;
    await connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await connection.manager.find(User);
    console.log('Loaded users: ', users);

    console.log('Here you can setup and run express/koa/any other framework.');
  })
  .catch(error => console.log(error));
