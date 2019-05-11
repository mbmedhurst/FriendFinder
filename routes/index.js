const friends = require('../data')

// these handle incoming requests from the client

module.exports = app => {
    let compare = (newFriend) => {
        // converts newfriend scores from string to int
        let newFriendScores = newFriend.scores.map((num) => parseInt(num))
        console.log(newFriendScores)
        // loop to go through each of the existing friends
        for (i = 0; i < friends.length; i++) {
            // formula for calculating difference between two values
            let difference = (a, b) => {
                return Math.abs(a - b)
            }
            // array to hold values for any differences between two arrays
            let diffArr = []
            // for each old friend, loop to compare scores to those of the new friend
            for (j = 0; j < newFriendScores.length; j++) {
                // compares numbers in the same index position
                if (newFriendScores[j] !== friends[i].scores[j]) {
                    // if a difference is found, the value of the differnce is pushed to the diffArr
                    diffArr.push(difference(newFriendScores[j], friends[i].scores[j]))
                } else {
                    // need to do something if there are no differences
                    // getting an error if it tries to reduce an empty diffArr
                    null
                }
            }
            console.log(diffArr)
            // the values in the diffArr are added up
            let sum = diffArr.reduce(function (a, b) {
                return a + b
            })
            console.log(sum)
            // let sumArr = []
            // sumArr.push(sum)
            // console.log(sumArr)
        }
    }

    // post new friend
    app.post('/friends', (req, res) => {
        let newFriend = req.body
        newFriend.id = friends.length + 1
        //Test to see if new one is added 
        res.send(newFriend)
        // call function to trigger comparison
        compare(newFriend)
        // once comparison is done the new friend is pushed to the old friends array
        friends.push(newFriend)

    })

    // get request for all friends
    app.get('/friends', (req, res) => {
        res.json(friends)
    })
}