module.exports = ({ env }) => ({
  host: env('HOST', 'api.qr-world.io'),
  port: env.int('PORT', 80),
  app: {
    keys: env.array('APP_KEYS', ['test','keys','for','strapi','session'])
  },
});
