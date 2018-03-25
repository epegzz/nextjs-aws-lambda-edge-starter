# Next.js AWS Lambda@Edge starter

- Uses aws-serverless-express-edge to make express work with lambda edge
- Uses claudia for deployment

This is the very first version. Detailed documentation coming soon!


## Development

To run your app locally with HMR enabled, run

`npm run dev`

## Deploying

Deployment is done using claudia. The first time you deploy, run

`npm run deploy`

This will create the file `claudia.js` which stores your lambda API id.

Subsequent deployments are done by running `npm run update`.


## AWS Permissions

Currently, you'll still need to manually add permissions via AWS IAM:

https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-permissions.html

## AWS Environment Variables

In your AWS Lambda function settings, you'll need to set the environment variable `NODE_ENV` to `production`.
