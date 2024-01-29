# dm-screen

This is intended to be a basic web app used as a virtual "DM Screen" for running TTRPG games. 

This iteration plans to support the following screens:

- [ ] Login Page
- [ ] Homepage to select games
- [ ] Custom Rules Reference screen
- [ ] Custom Shop screen with updatable inventory
- [ ] Characters page to see high level character stats (5e)

## Local Development

- copy the `template.env` in to `.env` file and fill in all values
  - this is used for both the PG config in Docker and the Sequelize config
- run `docker compose up` to start the PG instance
- run `npm start` to start the server on port 3000
