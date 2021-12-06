# Personalizer Engine

## Intuition.
- Bayesian ML or A/B testing (in the context) allows to sample from its mean posterior distribution. 
- The mean posterior distribution can be understood as the distribution of the avgerage CTR or Conversation ratio of an impression or an target campaign. 
- Note that we are treating the the average CTR or Conversation rate as a random variable. To be explicit, the porsterior distribution of CTR for impresssion A can be represented as: P(mean CTR for Impression A | Client views of the Impression A).
- As more clients interact with the page impressions, it will imform the system their respective parameters that forms their posterio distribution. 
- In other words, the parameters of the mean posterior distriubtion of each impressions or campaign will change as more clients viewing them.
- These on-line or real-time update allow the engine or Bayesian A/B test machnism to automatically optimise the campaign strategy on our behalf.
- We as campaign or optimization owner will not reactively validate which impression or campaign perform well. Such optimisation will be done by the engine. 
- As the client request increasing, the posteries distribution of the winning impression or campaign will receive almost all traffic. Therefore, we never need to perform campaign switch off mannual. 
- Frequentist/Classical A/B test can still be be used to perform ad-hoc validation to ensure there isn't system malfunction caused by mis-configuration and mis-initialisation.
 
