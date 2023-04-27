import express from 'express';
const router = express.Router();

const welcomeMessage = {
    message: 'Welcome to the Root API'
}

router.get('/', (req, res) => {
    res.json({
        message: welcomeMessage.message
    });
});

export default router;
