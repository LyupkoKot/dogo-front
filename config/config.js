const { SERVER_URL, NODE_ENV, PORT } = process.env

export default {
  port: Boolean(PORT) ? PORT : '3001',
  serverUrl: Boolean(SERVER_URL) ? SERVER_URL : 'localhost',
  nodeEnv: NODE_ENV
}
