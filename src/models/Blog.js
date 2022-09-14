const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic:String,
    description:String,
    posted_by:String
},{timestamps:true})

const Blog = mongooose.model('Blog', blogSchema);

module.exports = Blog;
