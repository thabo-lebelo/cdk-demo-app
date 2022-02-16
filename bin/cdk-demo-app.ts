#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { FargateDemoStack } from '../lib/fargate';
import { CloudfrontDemoStack } from '../lib/cloudfront';

const app = new cdk.App();

new FargateDemoStack(app, 'CdkDemoAppStack', {
   env: { account: '737327749629', region: 'af-south-1' },
});

new CloudfrontDemoStack(app, "CloudfrontDemoStack", {
  stage: "prod",
  env: { account: "737327749629", region: "af-south-1" },
});