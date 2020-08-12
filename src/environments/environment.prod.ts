import {Environment} from './interface';

export const environment: Environment = {
  production: true,
  // apiKey and fbDbUrl should be provided in order to work properly
  // information about how to get it you can find by link -
  // https://firebase.google.com/docs/web/setup
  apiKey: '',
  fbDbUrl: 'https://blog-4a874.firebaseio.com'
};
