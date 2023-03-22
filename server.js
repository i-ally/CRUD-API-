const http = require("http");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const getReq = require("./routes/get_request") 
const postReq = require("./routes/post_request")
const deleteReq = require("./routes/delete_request")
let users = require("./data/dummydata.json")

const server = http.createServer((req, res) => {
    req.users = users;
    switch (req.method) {
        case "GET":
            getReq(req, res);
            break;
        case "POST":
            postReq(req, res);
            break;
        case "DELETE":
            deleteReq(req, res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("Content-Type", "application/json");
            res.write(JSON.stringify({title:"Not Found" ,message: "Route Not Found" }));
            res.end();
            break;
    }
    
});

server.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
})
