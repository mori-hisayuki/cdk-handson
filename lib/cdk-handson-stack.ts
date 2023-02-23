import * as cdk from "aws-cdk-lib";
import * as path from "path";

import { DockerImageAsset } from "aws-cdk-lib/aws-ecr-assets";
import { Construct } from "constructs";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Cluster } from "aws-cdk-lib/aws-ecs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkHandsonStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // DockerImageAssetを使って、DockerイメージをビルドしてECRにプッシュする
    const imageAsset = new DockerImageAsset(this, "ImageAsset", {
      directory: path.join(__dirname, "../api"),
    });
  }
}
