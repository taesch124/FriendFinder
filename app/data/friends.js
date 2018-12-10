var friends = [{
    name: 'James Thompson',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBHW9yhG6YZrviLzUWd5526XANPvvN0kTe9GyuvdFcf0boAziG',
    answers: [
        1,
        2,
        5,
        3,
        5,
        4,
        2,
        5,
        1,
        4
    ]
},
{
    name: 'Betty Thomas',
    image: 'https://i1.wp.com/digital-photography-school.com/wp-content/uploads/2011/07/outdoor-portraits-1.jpg?resize=2000%2C1160&ssl=1',
    answers: [
        4,
        3,
        2,
        5,
        2,
        3,
        4,
        2,
        4,
        1
    ]
},
{
    name: 'Alex Zimmerman',
    image: 'https://static1.squarespace.com/static/58c6e2ced2b857a91c5e8f81/5aa94bb171c10b91674cccf1/5aa94c25e2c4839970210482/1521045587369/_DSC2878bw.jpg?format=300w',
    answers: [
        5,
        1,
        3,
        4,
        1,
        5,
        2,
        4,
        5,
        3
    ]
},
{
    name: 'Sarah Livingston',
    image: 'https://www.barksdalephoto.com/img/BD4_1641.jpg',
    answers: [
        3,
        3,
        4,
        2,
        4,
        2,
        1,
        3,
        3,
        2
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