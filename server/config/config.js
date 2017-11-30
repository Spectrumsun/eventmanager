module.exports = {
  development: {
    username: process.env.Username,
    password: process.env.Password,
    database: process.env.Db,
    host: process.env.Host,
    dialect: process.env.Dialect
  },
  test: {
    username: process.env.Username,
    password: process.env.Password,
    database: process.env.TestDb,
    host: process.env.Host,
    dialect: process.env.Dialect
  },
  production: {
    DATABASE_URL: process.env.DATABASE
  }
};
