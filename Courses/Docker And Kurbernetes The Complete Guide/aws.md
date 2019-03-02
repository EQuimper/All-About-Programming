# Deploy docker to AWS elasticbeanstalk

#### Why elasticbeanstalk

- Because easiest way to run docker app
- Request will be handle by a load balancer.
- Monitor for us
- They will add more vm if need
- Automatic scale for us

## Steps

1. Create application
2. Click env
3. Web server env
4. Platform Docker
5. Go to IAM
6. Create user to be use by the ci
7. Prog access and enable password
8. Take policy for beanstalk full access
9. Put key in ci

