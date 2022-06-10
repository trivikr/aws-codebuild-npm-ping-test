import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as codebuild from "aws-cdk-lib/aws-codebuild";

export class CodeBuildNpmPingTest extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new codebuild.Project(this, "CodeBuildNpmPingTest", {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: "0.2",
        phases: {
          build: {
            commands: ['echo "Hello, CodeBuild!"'],
          },
        },
      }),
    });
  }
}
