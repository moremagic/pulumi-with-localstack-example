# sample
http://localhost:4566/test-bucket/sample.txt

# pulumi sample

- login pulumi container
- `pulumi login --local`
- `cd ~/test`
- `pulumi up`


# localstack resouce view

`awslocal s3 ls`
`awslocal kms list-keys`
`awslocal kms describe-key --key-id <KeyId>`
`awslocal logs describe-log-groups`

## see
https://docs.localstack.cloud/references/coverage/

# pulumi-local

```
pip install --upgrade pip
pip install pulumi-local

mkdir hoge && cd hoge
pulumilocal new aws-typescript
pulumilocal up
```
