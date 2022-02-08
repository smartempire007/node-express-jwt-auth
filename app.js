const express = require('express');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/homeRoutes');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const { checkUser } = require('./middleware/authMiddleware');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


require('dotenv').config();
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  ;

// routes
app.get('*', checkUser);
app.use(homeRoutes);
app.use(authRoutes);


// Configuration swagger documentation.
const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "Smoothies application",
      version: "1.0.0",
      description: "Smoothies ordering application.",

      license: {
        name: "apache 2.0",
        url: "http://www.apache.org/license/LICENSE-2.0.html",
      },

      contact: {
        name: "node-express-jwt-auth",
        email: "jcyoung.mjc44@gmail.com",
      },

    },

    components: {
      securitySchemes: {
        Bearer: {
          description: "JWT Authorization Token",
          type: "apiKey",
          scheme: "bearer",
          name: "authorization",
          in: "header",
          bearerFormat: "JWT"
        },
      }
    },


    servers: [
      {
        url: process.env.BASE_URL,
        description: "production server",
      }

    ],
  },

  apis: ["./routes/authRoutes.js"]
};


const specs = swaggerJsdoc(options);


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {explorer: true})
);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server has started successfully");
});
