#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CodeBuildNpmPingTest } from "./CodeBuildNpmPingTest";

const app = new cdk.App();
new CodeBuildNpmPingTest(app, "CodeBuildNpmPingTest");
