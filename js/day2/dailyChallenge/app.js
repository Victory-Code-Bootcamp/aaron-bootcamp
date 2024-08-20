const welcomeUser = require("./modulePractice");

const express = require("express");
const app = express();
const router = express.Router();

// Static routes
router.get("/", (req, res) => {
  res.send("This is the Main Page");
});

router.get("/about", (req, res) => {
  res.send("This is an about page");
});

// Dynamic route
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Use the router in your app
app.use("/", router);

console.log(welcomeUser(`John Doe`));
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
