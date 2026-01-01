const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
let total = 0;
app.get('/ledger/:value', (req, res) => {
    const offered = parseInt(req.params.value);
        res.json({ "offeredEnergy": offered,  "totalEnergy": total+offered  });
    total=total+offered;
    
});
app.listen(3000, () => {
    console.log("server is running");
});