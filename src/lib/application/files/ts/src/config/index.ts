import alphaConfig from './config.alpha';
import betaConfig from './config.beta';
import defaultConfig from './config.default';
import devConfig from './config.dev';
import productionConfig from './config.production';

const configs = {
  alpha: alphaConfig,
  beta: betaConfig,
  default: defaultConfig,
  dev: devConfig,
  production: productionConfig,
}

const env = process.env.NODE_ENV || 'dev';
console.log('env: ', env);

export const appConfig = (): any => Object.assign({}, defaultConfig, configs[env]);

export type AppConfigType = typeof defaultConfig & typeof devConfig & typeof betaConfig & typeof productionConfig;
