const express = require('express')
const connectDB = require('./connectDB/connectDB')
const user = require('./route/contact')
const app = express()
connectDB()
app.use('/api/users' , user)

const port = 7000


const User = require("./model/User");
app.post("/users", (req, res) => {
  const { name, age, favoriteFoods } = req.body;
  const Person = new User({ name, age, favoriteFoods });
  Person.save()
    .then(
      (newPerson) =>
        res.send({ msg: "User added SUCCESSFULLY.", newPerson }) &&
        console.log("User added SUCCESSFULLY.", newPerson)
    )
    .catch(
      (err) =>
        res.send({ msg: "Operation Failed!!", err }) &&
        console.log("Operation Failed!!", err)
    );
});




app.post("/users/many", (req, res) => {
    const newUsers = req.body;
    User.create(newUsers, (err, data) => {
      data
        ? res.send({ msg: "All userS have been added SUCCESSFULLY", data }) &&
          console.log("All userS have been added SUCCESSFULLY", data)
        : res.send({ msg: "Adding new userS failed!!", err }) &&
          console.log("Adding new userS failed!!", err);
    });
  });
  
  // Use model.find() to Search Your Database
  app.get("/users", (req, res) => {
    User.find()
      .then(
        (users) =>
          res.send({ msg: "Getting users Done", users }) &&
          console.log("Getting users Done", users)
      )
      .catch(
        (err) =>
          res.send({ msg: "Getting users Failed!!", err }) &&
          console.log("Getting users Failed!!", err)
      );
  });


  app.get("/users/user/:userId", (req, res) => {
    const id = req.params.userId;
    User.findById(id)
      .then(
        (user) =>
          res.status(200).send({ msg: "User has Founded", user }) &&
          console.log("User has Founded", user)
      )
      .catch(
        (err) =>
          res
            .status(400)
            .send({ msg: "Cannot find any user matching this ID!", err }) &&
          console.log("Cannot find any user matching this ID!")
      );
  });

app.listen(port , (error)=> error ? console.log('error connect to database'):console.log(`database is connected on port ${port}`))