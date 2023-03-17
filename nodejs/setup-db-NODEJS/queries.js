const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "containers-us-west-145.railway.app",
  database: "test",
  password: "jV5fIgD0rupHoCcGDkOp",
  port: 6033,
});

pool.connect((err, client, done) => {
  if (err) throw err;
  console.log(`[POOL] connect database success`);
});
module.exports = pool;
