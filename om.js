const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://om:jaymataji@cluster0.ablhky6.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const postSchema = {
    id: Number,
    name: String,
    desc: String,
    profile_pic: String,
    userId: Number,
    img: String

};

const Post = new mongoose.model("Post", postSchema);
const post = new Post({
    id: 2,
    name: "Jane Doe",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",

});

post.save().then(function (doc) {
    console.log(doc._id.toString());
}).catch(function (error) {
    console.log(error);
});
