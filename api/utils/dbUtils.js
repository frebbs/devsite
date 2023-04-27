import {dbPool} from "../config/dbConfig.js";

async function createNewUser(username, email, password) {
    const query = {
        text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3)',
        values: [username, email, password],
    };
    return await dbPool.query(query);
}

async function findUserByEmail(username) {
    const query = {
        text: 'SELECT * from users WHERE email = $1',
        values: [username]
    }

    return await dbPool.query(query)
}

async function findAllUsers() {
    const query = {
        text: 'SELECT * from users'
    }

    return await dbPool.query(query)
}

export {
    createNewUser,
    findUserByEmail,
    findAllUsers
};