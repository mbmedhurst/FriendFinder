module.exports = app => {

    // post new friend
    app.post('/friends/:id', (req, res) => {
        let newFriend = req.body
        newFriend.id = friends.length + 1
        friends.push(newFriend)
        res.send('Friend was added')
    })

}