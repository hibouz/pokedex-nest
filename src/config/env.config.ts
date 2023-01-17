export const EnvConfiguration = () => ({
  environment: process.env.NODE_ENV || 'dev',
  mongoUrl: process.env.MONGO_URL,
  nodePort: process.env.NODE_PORT || 3001,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7,
});
