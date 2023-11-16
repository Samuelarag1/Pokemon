const server = require("./src/app.js");
const { conn } = require("./src/db.js");

const { getTypes } = require("./src/controllers/getTypes.js");

conn.sync({ force: true }).then(async () => {
  await getTypes();
  server.listen(3001, () => {});
});
