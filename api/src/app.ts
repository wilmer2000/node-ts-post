import express = require('express');
import bodyParser = require('body-parser');
import routes from './routes/post.route';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
