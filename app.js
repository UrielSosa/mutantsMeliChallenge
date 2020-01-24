const express = require('express');
const validator = require('./validator');
const search = require('./search');
const app = express();

const countSecuences = 2;

app.listen(3000, ()=>{ console.log('The server is running!!'); });
app.post('/mutant', function(req, res) {
    res.status(isMutant(req.body.dna)? 200 : 403);
});

function isMutant(dna){
    if (validator.main(dna)) {
        search.searchX(dna);
        search.searchY(dna);
        search.searchZ(dna);
    }
    return checkSecuence();
}

function checkSecuence(){
    return search.foundSecuences >= countSecuences;
}