import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket1 = new aws.s3.Bucket("my-bucket1");

// Export the name of the bucket
export const bucketName1 = bucket1.id;

// // Create ECS Cluster(Unsuported localstack community)
// const foo = new aws.ecs.Cluster("foo", {settings: [{
//     name: "containerInsights",
//     value: "enabled",
// }]});

// Create KMS
const exampleKey = new aws.kms.Key("exampleKey", {
    description: "example",
    deletionWindowInDays: 7,
});

// Create ClowdWatch LogGroup
const exampleLogGroup = new aws.cloudwatch.LogGroup("exampleLogGroup", {});


