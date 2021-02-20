#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoStack } from '../lib/cdkpipelines-demo-stack';

const app = new App();

new CdkpipelinesDemoStack(app, 'CdkpipelinesDemoStack', {
  env: { account: '166129620984', region: 'eu-north-1' },
});

app.synth();
