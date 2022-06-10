# aws-codebuild-npm-ping-test

Tests npm ping on AWS CodeBuild

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Setup

- Run `yarn` to install dependencies.
- Run `yarn cdk deploy` deploy this stack.
- Visit `CodeBuildNpmPingTest*` project in CodeBuild AWS Console,
  and click on `Start Build`.
- Verify that the build succeeds, and the following output is displayed:

  ```console
  node version: v14.19.2

  npm version: 6.14.17

  { code: 0, signal: null }
  ```

- Run `yarn cdk destroy` destroy the stack.

### Oher userful commands

- `yarn cdk diff` compare deployed stack with current state
- `yarn cdk synth` emits the synthesized CloudFormation template
