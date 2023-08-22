// full_server/server.js
import express from 'express';
import routes from './routes';

const app = express();
const port = 1245;

app.use('/', routes);
app.use('/students', routes);
app.use('/students/:major', routes);

app.listen(port, () => {});

export default app;
