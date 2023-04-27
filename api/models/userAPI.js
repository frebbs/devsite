import bcrypt from 'bcryptjs';
const SALT = process.env.SALT || 5;
import { createNewUser, findUserByEmail, findAllUsers } from '../utils/dbUtils.js'
export default {
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await findUserByEmail(email)
            const userObject = user.rows[0]

            if(user.rowCount === 0) {
                return res.json({
                        message: "Error",
                        data: "User not found"
                    })
            }

            const match = await bcrypt.compare(password, userObject.password)

            if (!match) {
                return res.json({
                    message: "Error",
                    data: "Password does not match"
                })
            }

            const userObjectClean = {
                id: userObject.id,
                username: userObject.username,
                email: userObject.email,
                createdAt: userObject.created_at
            }

            res.json({
                message: "Passwords matched!",
                data: userObjectClean
            })

        } catch (error) {
            res.json({
                message: "Login Route Hit! - Error",
                data: error
            })
        }
    },
    createUser: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const hash = await bcrypt.hash(password, SALT);

            const newUser = {
                username,
                email,
                password: hash
            };

            await createNewUser(username, email, hash);

            return res.json({
                message: "User Created",
                data: newUser
            });
        } catch (error) {
            return res.json({
                message: "Create user failed",
                error: error
            });
        }
    },
    findAllUsers: async (req, res) => {
        const allUsers = await findAllUsers();

        const usersArray = allUsers.rows.map(user => {
            const { id, username, email } = user;
            return { id, username, email };
        });

        console.log(usersArray)
        return res.json({
            message: "All users",
            data: usersArray
        });
    }
};
