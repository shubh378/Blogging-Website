const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Step 1: make our schema which defines the structure
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body:{
       type: String,
       required: true 
    }
},{ timestamps: true});

// Step 2: Creating model based on the schema(name of the model should be singular of the collection name)
const Blog = mongoose.model('Blog',blogSchema);

module.exports =Blog;
