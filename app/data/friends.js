var friends = [{
    name: 'James Thompson',
    image: 'URL',
    answers: [
        1,
        2,
        5
    ]
},
{
    name: 'Betty Thomas',
    image: 'URL',
    answers: [
        4,
        3,
        4
    ]
},
{
    name: 'Alex Zimmerman',
    image: 'URL',
    answers: [
        5,
        1,
        3
    ]
},
{
    name: 'Sarah Livingston',
    image: 'URL',
    answers: [
        3,
        3,
        4
    ]
}
]

function getClosestMatch(userAnswers) {
    let compatibilityMin = Infinity;

    let index = -1;
    
    friends.forEach((friend, friendIndex) => {
        let currentMin = 0;
        friend.answers.forEach((answer, i) => {
            currentMin += Math.abs(userAnswers[i] - answer);
        });
        
        if (currentMin < compatibilityMin) {
            console.log(friendIndex);
            index = friendIndex;
            compatibilityMin = currentMin;
        }
    });

    return friends[index];
}

module.exports = {
    friends: friends,
    getClosestMatch: getClosestMatch
};