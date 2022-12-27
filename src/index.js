import 'dotenv/config'
import {ConnectDatabase} from "./util/database.js"
import {httpServer} from './express.js';

const PORT = process.env.PORT


// initialize app !
async function initialize() {
  await ConnectDatabase()

  httpServer.listen(PORT, () => {
      console.log(`server is now listening to port : ${PORT}`)
  });
}

initialize()