const app = require('./server/server');
const PORT = process.env.PORT || 8128;

app.listen(PORT);
console.log(`Listening on http://localhost:${PORT}`);
