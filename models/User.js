const { model, Schema } = require('mongoose');


const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    myRecipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recpies"
    }],
    favouriteRecipe: [{


        type: Schema.Type.ObjectId,
        ref: " Recpies"
    }
    ]
}
);

module.exports = model("User", UserSchema);