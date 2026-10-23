const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
res.send('Hello! DevOps CI/CD Pipeline is working.');
});

app.get('/health', (req, res) => {
res.json({ status: 'healthy' });
});

if (require.main === module) {
app.listen(PORT, '0.0.0.0', () => {
console.log(`Server running on port ${PORT}`);
});
}

module.exports = app;


