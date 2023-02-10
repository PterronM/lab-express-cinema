
const mongoose = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new mongoose.Schema(
  {
    title: {
        type: String,
        unique: true,
    },
    director: String,
    stars: [
        String
    ],
    image: String,
    description: String,
    showtimes:[
        String
    ]

  },
  {
    //                                      Cuando se creo y cuando se actualizo
    //                                                  |               |
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  })

  
const MoviesModel = mongoose.model("Movie", movieSchema);

module.exports = MoviesModel
