const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
const mp = new Map();
app.get('/scrolls/:id', (req, res) => {
    const sId = parseInt(req.params.id);

    if (mp.has(sId)) {
        res.json({ message: "Scroll Depleted!" });
    }
    else if (sId % 3 === 0 && sId % 5 === 0) {
        res.json({ message: "The Scroll has been found!" });
        mp.set(sId);
    }
    else {
        res.json({ message: "No Scroll found!" });
    }
});
app.listen(3000, () => {
    console.log("server is running");
});