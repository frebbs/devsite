export default function handleJsonParsingError(err, req, res, next) {
    if (err instanceof SyntaxError && err.message.includes('JSON')) {
        // Handle JSON parsing errors
        const error = {
            message: 'Invalid JSON format',
            issue: err.message
        };
        console.error('Error parsing JSON:', error);
        // Send an error response to the client
        res.status(400).json({ error });
    } else {
        // Pass the error to the next middleware
        next(err);
    }
}