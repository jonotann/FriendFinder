app.get("/api/friends", function(req, res) {
    var newfriend = req.body;

    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);
});