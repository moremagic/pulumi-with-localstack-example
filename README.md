# pulumi-with-localstack

# quick start

`docker compose up`

## pulumi sample run

login pulumi container

```shell
docker compose exec -ti pulumi bash
```

pulumi start
```shell
pulumi login --local
cd ~/test
pulumi up
```

## localstack resouce view

login localstack container

```shell
docker compose exec -ti localstack bash
```

```shell
awslocal s3 ls
awslocal kms list-keys
awslocal kms describe-key --key-id <KeyId>
awslocal logs describe-log-groups
```

### see
https://docs.localstack.cloud/references/coverage/

# create new pulumi project

login pulumi container

```shell
docker compose exec -ti pulumi bash
```

```
pip install --upgrade pip
pip install pulumi-local

mkdir hoge && cd hoge
pulumilocal new aws-typescript
pulumilocal up
```
