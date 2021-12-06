var iterator = require( '@stdlib/random/iter/beta' );

// Debugging.
// var it = iterator( 2.0, 5.0 );
// console.log(it.next().value);

module.exports = class TestingEngine {
    constructor(adName) {
      this.adName = adName;
      this.clicks = 0;
      this.views = 0;
      this.alpha = 0;
      this.beta = 0;
    }
    // Getter
    get sampleBeta() {
        // the prior distribution is Beta(1,1)
        return this.betaDistribution();
    }
    betaDistribution() {
        this.alpha = 1 + this.clicks;
        this.beta = 1 + this.views - this.clicks;
        var betaRand = iterator( this.alpha, this.beta );
        // Debugging.
        // console.log(betaRand.next().value.toString());
        return betaRand.next().value;
    }
    pageClickThrough() {
        this.clicks = this.clicks + 1;
        console.log(this.clicks);
    }

    pageView() {
        this.views = this.views + 1;
        console.log(this.views);
    }
        
  }


