const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
// router.post('/register', (req, res, next) => {
//   const username = req.body.username;
//   const password = encryptLib.encryptPassword(req.body.password);

//   const queryText = `INSERT INTO "user" (username, password)
//     VALUES ($1, $2) RETURNING id`;
//   pool
//     .query(queryText, [username, password])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('User registration failed: ', err);
//       res.sendStatus(500);
//     });
// });
/* This route handles registration for the user. First it inputs the username and password into a table. 
Then it adds the users info to the user info table. Then lastly, it adds the users address into the addresses table */
router.post('/register', async (req, res) => {
  const client = await pool.connect();
  console.log(req.body)

  try {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
      await client.query('BEGIN')
      const queryText = await client.query(`INSERT INTO "user" (username, password)
      VALUES ($1, $2) RETURNING id;`, [username, password]);
      const id = queryText.rows[0].id;
      await client.query('BEGIN')
      const userInfoQuery = await client.query(`INSERT INTO "user_info" ("user_id", "first_name",  "middle_name", "last_name", "birth_date", "email", "phone_number")
      VALUES ($1, $2, $3, $4, $5, $6, $7);`, [id, req.body.first_name, req.body.middle_name, req.body.last_name, req.body.birth_date, req.body.email, req.body.phone_number]);
      await client.query('BEGIN')
      const userAddressQuery = await client.query(`INSERT INTO "user_addresses" ("user_id", "address_line_1", "address_line_2", "city", "state", "zip_code", "billing_or_delivery")
      VALUES ($1, $2, $3, $4, $5, $6, 'Delivery') RETURNING id;`, [id, req.body.address_line_1,req.body.address_line_2, req.body.city, req.body.state, req.body.zip_code]);
      await client.query('COMMIT')
      res.sendStatus(201);
  } catch (error) {
      await client.query('ROLLBACK')
      console.log('User registration failed: ', error);
      res.sendStatus(500);
  } finally {
      client.release()
  }
}); //END POST ROUTE

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
