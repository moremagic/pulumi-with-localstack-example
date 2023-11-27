import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket1 = new aws.s3.Bucket("my-bucket1");
const bucket2 = new aws.s3.Bucket("my-bucket2");
const bucket3 = new aws.s3.Bucket("my-bucket3");
const bucket4 = new aws.s3.Bucket("my-bucket4");

// Export the name of the bucket
export const bucketName1 = bucket1.id;
export const bucketName2 = bucket2.id;
export const bucketName3 = bucket3.id;
export const bucketName4 = bucket4.id;
