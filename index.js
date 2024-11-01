const express = require("express");
const session = require("express-session");
const generalRoutes = require("./router/general.js");
const authRoutes = require("./router/auth_users.js");

const app = express();

app.use(express.json());
app.use(session({ secret: "your-secret-key", resave: false, saveUninitialized: true }));

app.use("/", generalRoutes);
app.use("/customer", authRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
