import { dbPool } from "../config/dbConfig.js";

async function createNewUser(username, email, password) {
    const query = {
        text: "INSERT INTO users(username, email, password) VALUES($1, $2, $3)",
        values: [username, email, password],
    };
    let result;
    let client;
    try {
        client = await dbPool.connect();
        result = await client.query(query);
    } finally {
        if (client) client.release();
    }
    return result;
}

async function findUserByEmail(email) {
    const query = {
        text: "SELECT * from users WHERE email = $1",
        values: [email],
    };
    let result;
    let client;
    try {
        client = await dbPool.connect();
        result = await client.query(query);
    } finally {
        if (client) client.release();
    }
    return result;
}

async function findAllUsers() {
    const query = {
        text: "SELECT * from users",
    };
    let result;
    let client;
    try {
        client = await dbPool.connect();
        result = await client.query(query);
    } finally {
        if (client) client.release();
    }
    return result;
}

export { createNewUser, findUserByEmail, findAllUsers };
