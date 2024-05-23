const express = require('express');
const { connectDB } = require('./src/config/db');
const passport = require('passport');
require('./src/config/passport');

const app = express();
connectDB();

app.use(express.json());
app.use(passport.initialize());

app.use('/auth', require('./src/routes/auth'));
app.use('/user', require('./src/routes/user'));

// Swagger setup (optional)
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Enhanced Auth API',
            version: '1.0.0',
            description: 'API for authentication with profile visibility settings'
        },
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
