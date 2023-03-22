const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    try {
     
    let text = fs.writeFileSync(path.join(__dirname,"..","data","dummydata.json"),JSON.stringify(data),"utf-8");
    console.log(text);
    } catch (err) {
        console.log(err);
    }
}
    