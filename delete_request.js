var _ = require('lodash');
const storeNewData = require('../utils/storeNewData');

module.exports = ((req, res) => {
    let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
    console.log(baseUrl);
    let id = req.url.toString().split("/")[3];

    if (req.url === "/api/users/"+id) {
        let users = req.users;
        let index = users.findIndex((user) => {
            return user.id.toString() === id;
        });
     if(index !== -1){
        users.splice(index,1);
        storeNewData(users);
        res.writeHead(204, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
     }
    }else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end({ title: "Not Found", message: "User Not Found" })
    }
});