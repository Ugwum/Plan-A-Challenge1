const express = require('express')
const app = express()
const os = require("os");
// get host name
const hostName = os.hostname();
const port = 3000;
const timestamp = new Date().getTime();
   


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
});

app.get('/', function (req, res) {

    res.json({ "timestamp": timestamp.Date, "hostname": hostName, "engine": os.platform, "visitor ip": req.ip });
});

app.use(express.urlencoded({
    extended: true
}));
