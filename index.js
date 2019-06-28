const mongoose = require("mongoose");
const Recipe = require("./models/Recipe"); // Import of the model Recipe from './models/Recipe'
const data = require("./data.js"); // Import of the data from './data.js'

// Connection to the database "recipeApp"
mongoose
  .connect("mongodb://localhost/recipeApp", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

//Recipe Already Saved !

// Recipe.create({
//   title: "Curry Chicken Thighs",
//   level: "Amateur Chef",
//   ingredients: [
//     "lots of cayenne",
//     "5 tablespoons curry powder",
//     "1/3 cup soy sauce (such as Silver Swan®)",
//     "1/4 cup Asian (toasted) sesame oil",
//     "3 tablespoons Asian chili garlic sauce",
//     "3 tablespoons minced garlic",
//     "salt to taste",
//     "8 skinless, boneless chicken thighs"
//   ],
//   cuisine: "Asian",
//   dishType: "Dish",
//   image: "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
//   duration: 40,
//   creator: "Chef LePapu"
// })
//   .then(data => {
//     console.log("recipe successfully saved");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// Recipe array already inserted

// Recipe.insertMany(data)
//   .then(data => {
//     console.log("recipe array successfully imported into the database");
//   })
//   .catch(err => {
//     console.log(err);
//   });

//Recipe already Updated

// Recipe.findOneAndUpdate(
//   { title: "Rigatoni alla Genovese" },
//   { duration: 95 },
//   { new: true }
// )
//   .then(data => {
//     console.log(data.title, "is succesfully Updated to", data.duration);
//   })
//   .catch(err => {
//     console.log(err);
//   });

//Recipe already Deleted

// Recipe.deleteOne({ title: "Carrot Cake" })
//   .then(data => {
//     console.log("Item succesfully deleted");
//   })
//   .catch(err => {
//     console.log(err);
//   });

mongoose.connection
  .close()
  .then(() => {
    console.log("Disconnected from Mongo!");
  })
  .catch(err => {
    console.error(err);
  });
