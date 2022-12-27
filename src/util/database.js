import {MongoClient} from "mongodb"

const MONGODBURI = process.env.MONGODBURI
const client = new MongoClient(MONGODBURI);
let db;

async function ConnectDatabase() {
    return client.connect().then(
        (client) => {
            console.log("successfully connected to database")
            db = client.db('ups')
        }
    ).catch(
        (err) => {
            console.log('cant connect to database')
            console.log(err)

        }
    )
}

const getDB = ()=>{
    if (db) {
        return db
    }
    throw new Error('No Database Found !')
}

export {
    ConnectDatabase,
    getDB
}