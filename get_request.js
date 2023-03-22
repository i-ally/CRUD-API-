var _ = require('lodash');

module.exports = ((req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.toString().split("/")[3];

    if (req.url === "/api/users") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(JSON.stringify(req.users));
        res.end();
    }
    else if (req.url === "/api/users/"+id) {
        let users = req.users;
        let user = users.filter((user) => {
            return user.id.toString() === id
        })
        if (user.length > 0) {
                    res.statusCode = 200;
                    res.write(JSON.stringify(user));
                    res.end();
                } else {
                    res.statusCode = 404;
                    res.write(JSON.stringify({ title: "Not Found", message: "user Not Found" }));
                    res.end();
                }
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end({ title: "Not Found", message: "User Not Found" })


    }
});
