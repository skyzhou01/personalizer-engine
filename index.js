const express = require('express');
const jStat = require('jstat');
const TestingEngine = require('./action');
var iterator = require( '@stdlib/random/iter/beta' );
const app = express();
app.use(express.json());
const port = process.env.port || 8080;

// var it = iterator( 2.0, 5.0 );
// console.log(it.next().value);

const impressionA = new TestingEngine('A');
const impressionB = new TestingEngine('B');
  
// console.log(square.area); // 100
console.log(impressionA.sampleBeta);
console.log(impressionB.sampleBeta);


app.get('/getAd', (req, res) => {

    let ad = '';
    let pageViews = 0;
    let beta = 0;
    let alpha = 0;
    let generatedRVFromA = impressionA.sampleBeta;
    let generatedRVFromB = impressionB.sampleBeta;
    if(generatedRVFromA > generatedRVFromB) {   
        ad = 'Imperession A';
        impressionA.pageView();
        pageViews = impressionA.views;
        beta = impressionA.beta;
        alpha = impressionA.alpha;
    } else {
        ad = 'Impression B';
        impressionB.pageView();
        pageViews = impressionA.views;
        beta = impressionB.beta;
        alpha = impressionB.alpha;
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({Impression: "Client gets " + ad,
                             Pageviews: pageViews,
                             GeneratedRandomVariableFromA: generatedRVFromA,
                             GeneratedRandomVariableFromB: generatedRVFromB,
                             BetaDistribution: JSON.stringify({alphaPara: alpha, betaPra: beta})}));
    // res.send('Client gets ' + ad);
});

app.post('/clickAd', (req, res) => {
    // var random_num = jStat.beta.sample( 1, 2 );
    // var it = iterator( 2.0, 5.0 );
    // res.send(it.next().value.toString());
    let result = 'OK';
    let adImpression = req.body.adImpression;
    let beta = 0;
    let alpha = 0;

    if(adImpression === "ImpressionA") {
        impressionA.pageClickThrough();
        beta = impressionA.beta;
        alpha = impressionA.alpha;
    }if(adImpression === "ImpressionB") {
        impressionB.pageClickThrough();
        beta = impressionB.beta;
        alpha = impressionB.alpha;

    }else{
        console.log('True');
        result = '404 Bad Request!';
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({Impression: "Client Click Through " + adImpression,
                             Message: "Thank for for Investing with VGI.",
                             ResponseMessage: result,
                             BetaDistribution: JSON.stringify({alphaPara: alpha, betaPra: beta})}));
    
});


app.listen(port, () => console.log('listening on port 8080 ....'));