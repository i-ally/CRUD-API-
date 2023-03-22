var _ = require('lodash');
const crypto = require("crypto");
const requestBodyParser = require("../utils/body-parser")
const storeNewData = require("../utils/storeNewData")

module.exports = async (req, res) => {
    if (req.url === "/api/users") {
        try {
            let body = await requestBodyParser(req);
            body.id = crypto.randomUUID();
            req.users.push(body);
            storeNewData(req.users);
            res.writeHead(201,{"Content-Type": "application/json"});
            res.end();
        } catch (err) {
          console.log(err);
          res.statusCode = 404;
                    res.write(JSON.stringify({ title: "Validation Failed", message: "Request Body not valid" }));
                    res.end();
        }
    }else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end({ title: "Not Found", message: "Route Not Found" })


    }
};