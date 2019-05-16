const friends = require("../data")

// these routes handle incoming requests from the client

module.exports = app => {
    let compare = newFriend => {
        // object to hold the eventual match
        let match = {
            name: '',
            photo: '',
            lowScore: 40
        }
        // converts newfriend scores from string to integer
        let newFriendScores = newFriend.scores.map(num => parseInt(num));
        console.log(newFriendScores);
        // method to calculate differences between two values
        let difference = (a, b) => { return Math.abs(a - b) }
        // loop to go through each of the existing friends in the data list
        for (i = 0; i < friends.length; i++) {
            // array to hold values for any differences between two arrays
            let diffArr = []
            // for each old friend in the data list, loop to compare scores to those of the new friend
            for (j = 0; j < newFriendScores.length; j++) {
                // compares numbers in the same index position
                if (newFriendScores[j] !== friends[i].scores[j]) {
                    // if a difference is found, the value of the differnce is pushed to the diffArr
                    diffArr.push(difference(newFriendScores[j], friends[i].scores[j]))
                }
            }
            // calculates the sum of values in the diffArr
            let sum = diffArr.reduce(function (a, b) {
                return a + b
            })
            // compare each sum to the default low score
            // if sum is lower, then sum becomes the new low score
            if (sum < match.lowScore) {
                match.lowScore = sum
                match.name = friends[i].name
                match.photo = friends[i].photo
                console.log(match.name)
            }
            return match
            console.log(`Your closest match is ${match.name} with a score of ${match.lowScore}.`)
            // console.log(diffArr)
            // console.log(sum)
            // console.log(lowScore)
        }
    }

    // post new friend
    app.post("/friends", (req, res) => {
        let newFriend = req.body;
        newFriend.id = friends.length + 1;
        // call function to trigger comparison
        let newMatch = compare(newFriend);
        // once comparison is done the new friend is pushed to the old friends array
        friends.push(newFriend)
        // friend match is displayed on survey page
        return res.send(newMatch)
    })

    // get request for all friends
    app.get("/friends", (req, res) => {
        res.json(friends)
    })
}