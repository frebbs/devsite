import userAPI from '../models/userAPI.js';
jest.mock('../utils/dbUtils.js');
import { createNewUser, findUserByEmail, findAllUsers } from '../utils/dbUtils.js';

import bcrypt from 'bcryptjs';

jest.mock('bcryptjs', () => {
    const actualBcrypt = jest.requireActual('bcryptjs');
    return {
        compare: jest.fn(() => {
            return true
        }),
        hash: actualBcrypt.hash,
        genSalt: actualBcrypt.genSalt,
        getRounds: actualBcrypt.getRounds,
    };
});

beforeEach(() => {
    findUserByEmail.mockImplementation(async (email) => {
        return {
            rowCount: 1,
            rows: [
                {
                    id: 1,
                    username: 'testuser',
                    email: 'test@example.com',
                    password: 'hashedpassword',
                    created_at: new Date(),
                },
            ],
        };
    });

    createNewUser.mockImplementation(async (username, email, password) => {
        return {
            rowCount: 1,
        };
    });

    findAllUsers.mockImplementation(async () => {
        return {
            rows: [
                {
                    id: 1,
                    username: 'testuser',
                    email: 'test@example.com',
                },
                {
                    id: 2,
                    username: 'anotheruser',
                    email: 'another@example.com',
                },
            ],
        };
    });
});

describe('User API tests', () => {
// ...

    test('Login user', async () => {
        const req = {
            body: {
                email: 'test@example.com',
                password: 'testpassword',
            },
        };
        const res = {
            json: jest.fn(),
        };

        await userAPI.login(req, res);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            message: "Passwords matched!",
            data: {
                id: 1,
                username: 'testuser',
                email: 'test@example.com',
                createdAt: expect.any(Date),
            },
        });
    });

    test('Create user', async () => {
        const req = {
            body: {
                username: 'testuser',
                email: 'test@example.com',
                password: 'testpassword',
            },
        };
        const res = {
            json: jest.fn(),
        };

        await userAPI.createUser(req, res);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            message: "User Created",
            data: {
                username: 'testuser',
                email: 'test@example.com',
                password: expect.any(String),
            },
        });
        expect(createNewUser).toHaveBeenCalledWith(
            'testuser',
            'test@example.com',
            expect.any(String)
        );
    });

    test('Find all users', async () => {
        const req = {};
        const res = {
            json: jest.fn(),
        };

        await userAPI.findAllUsers(req, res);

        expect(res.json).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            message: "All users",
            data: [
                {
                    id: 1,
                    username: 'testuser',
                    email: 'test@example.com',
                },
                {
                    id: 2,
                    username: 'anotheruser',
                    email: 'another@example.com',
                },
            ],
        });
    });
});
