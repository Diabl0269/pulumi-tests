import { createNestServer } from '../../../src/main.gcp';
import * as express from 'express';
import { Message } from '@hello-world/interfaces';

const expressApp = express();
createNestServer(expressApp);

export const handler = expressApp;
