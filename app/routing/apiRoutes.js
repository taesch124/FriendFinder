const express = require('express');
const path = require('path');

const router = express.Router();

var friends = require('./../data/friends').friends;

router.get('/friends', (req, res) => {
    if(req.query.name) {
        res.json(searchFriendByName(req.query.name));  
    } else {
        res.json(friends);
    }
    
});

router.get('/friends/:name', (req, res) => {
    let name = req.params.name;
    
    res.json(searchFriendByName(name));
});

router.post('/friends', (req, res) => {

    let name = req.body.name;
    let image = req.body.image;
    let answers = req.body.answers.map(e => parseInt(e));

    let newFriend = {
        name: name,
        image: image,
        answers: answers
    };

    let bestMatch= require('./../data/friends').getClosestMatch(newFriend.answers);
    friends.push(newFriend);
    res.json(bestMatch);
});

function searchFriendByName(name) {
    return friends.filter(e => e.name.includes(name));
}

module.exports = router;