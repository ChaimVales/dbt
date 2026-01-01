
import { config } from 'dotenv';
import { MongoClient, Db, ObjectId } from 'mongodb';
config();
const client = new MongoClient(process.env.DB_CONNECTION);
/**
 * @type {Db | null}
 */
let dbMongo = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    try {
        if (!dbMongo) {
            await client.connect();
            dbMongo = client.db("start_mongo");
            console.log("Connected to MongoDB");
        }
        return dbMongo;
    } catch (err) {
        console.error(err);
    }
}
await connect();
export default dbMongo;