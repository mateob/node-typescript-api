import * as http from 'http';
import { DecodecUser } from './services/auth';

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    decoded?: DecodecUser;
  }
}
