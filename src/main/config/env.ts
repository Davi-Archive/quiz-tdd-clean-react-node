// eslint-disable-next-line @typescript-eslint/no-var-requires
export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/clean-node-api',
  port: process.env.PORT || 3001
}