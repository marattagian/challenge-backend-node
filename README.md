# Node Challenge - Alkemy

This challenge is one many that can be found at <https://campus.alkemy.org> and it's for the alkemy acceleration.

The project uses `nodejs` with `express` for the main app and `sequelize` as ORM. Under the hood uses jwt for authentication, bcrypt for encryption and dotenv for accessing the `.env` variables.

## Test this repo

The `yarn add` it's used to fetch all dependencies.
While the rename of the file `.env.example` is for allow the app to access the variables inside.

```bash
mv .env.example .env
yarn add
```

The database is a cockroachdb serverless instance.
In order to access the same database than the project it needs a certificate for stablish connection.
The following bash command it's only valid for Linux and Mac.

```bash
curl --create-dirs -o $HOME/.postgresql/root.crt -O https://cockroachlabs.cloud/clusters/8887d4eb-4eb3-4ca6-b8b6-f309dac8d360/cert
```

>Cockroachdb is a postgres database, so it can be replaced with another postgres db.

## Auth routes

- POST /auth/login
- POST /auth/register

## User Model

```json
{
  email: "john@doe.com",
  password: "password"
}
```

## Characters routes

- GET /characters
- GET /characters/:id
- POST /characters/:id (auth required)
- UPDATE /characters/:id (auth required)
- DELETE /characters/:id (auth required)

### Character Model

```json
{
  id: 1,
  image: "milo.image.url",
  name: "Milo Thatch",
  age: 32,
  weight: 65,
  story: "Grandson of Thaddeus Thatch",
  movies: []
}
```

## Movies routes

- GET /movies
- GET /movies/:id
- POST /movies/:id (auth required)
- UPDATE /movies/:id (auth required)
- DELETE /movies/:id (auth required)

### Movie Model

```json
{
  id: 1,
  image: "movie.image.url",
  title: "Toy Story",
  date: "1996-03-22",
  score: 4,
  characters: []
}
```
