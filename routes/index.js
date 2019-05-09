const friends = require('../data')

// these handle incoming requests from the client

module.exports = app => {

    // post new friend
    app.post('/friends', (req, res) => {
        console.log("Test")
        let newFriend = req.body
        newFriend.id = friends.length + 1
        friends.push(newFriend)
        // res.send('Friend was added')
    })

}