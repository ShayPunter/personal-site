module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'personal'),
      user: env('DATABASE_USERNAME', 'forge'),
      password: env('DATABASE_PASSWORD', 'test'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
