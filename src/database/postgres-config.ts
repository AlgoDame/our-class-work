import postgres from "postgres";
const connectionString = process.env.DATABASE_URL as string;

const sql = postgres(connectionString);

export function personDB() {
    sql`SELECT 1=1`.then((con) => {
        console.log("Connected to postgreSQL")
    }).catch(err => {
        console.log({ Error: err.message })
    })
}
export default sql;