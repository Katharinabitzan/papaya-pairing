# papaya-pairing-katharinabitzan

This is a recreation of the DB layer in the Papaya Pairing excercise from: https://github.com/lapapaya/rails-paring 

To get started you need Node, NPM and Postgres.
To install postgres you can you this to make it easier: https://postgresapp.com/. 

Pull down the code, and run 

npm install

Once postgres is up and running locally you can create your database with the command, run within the project folder:

node_modules/.bin/sequelize db:create

This will create a DB using the details from the server/config/config.json file 

run the migrations

node_modules/.bin/sequelize db:migrate


seed the DB:
node_modules/.bin/sequelize db:seed:all


Next steps:

start the webserver:
node index

Test: TBC