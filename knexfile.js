// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/starwars.db3'
    },
    useNullAsDefault: true,
    migrations: {
      dirctory: './data/migrations'
    }
  }

};
