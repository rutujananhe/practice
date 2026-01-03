const axios = require('axios');
async function callAPI(){
    let url = 'http://localhost:3000/ledger/5';
    let response = await axios.get(url);
    let data = response.data;
    console.log(data);
}

callAPI();