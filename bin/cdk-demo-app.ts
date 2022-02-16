#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from "@aws-cdk/core";
import { FargateDemoStack } from '../lib/fargate';

const app = new cdk.App();
new FargateDemoStack(app, 'CdkDemoAppStack', {
   env: { account: '737327749629', region: 'af-south-1' },
});