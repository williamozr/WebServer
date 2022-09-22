const {request, response} = require('express')


const userGet= (req, res) => {
    res.json({
        "msj": "Get!"
    });
} 
const userPost= (req, res) => {
    const body = req.body
    res.json({
        "msj": "Post!",
        body
    });
} 
const userPut= (req, res) => {
    const id = req.params
    res.json({
        "msj": "Put!",
        id
    });
} 
const userDelete= (req, res) => {
    res.json({
        "msj": "Delete"
    });
} 
module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete    
}

    