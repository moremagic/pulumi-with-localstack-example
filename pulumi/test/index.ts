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

const testRole = new aws.iam.Role("testRole", {
    assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Sid: "",
            Principal: {
                Service: "ec2.amazonaws.com",
            },
        }],
    }),
    tags: {
        "tag-key": "tag-value",
    },
});

const policy = new aws.iam.Policy("policy", {
    path: "/",
    description: "My test policy",
    policy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: ["ec2:Describe*"],
            Effect: "Allow",
            Resource: "*",
        }],
    }),
});
