# Serverless Framework

## Como usar

### **Para criar um novo service/projeto**

Para criar um novo projeto, execute o comando:

```bash
npx sls
```

A partir dai, irão aparecer opções de template para usar como base para o projeto. Para este projeto de estudo, por exemplo, foi usado o template `aws-node-express-api`.

### **Invocando funções localmente sem endpoint**

Para invocar o funções localmente (que nao precisam de endpoint), execute o comando:

```bash
npx sls invoke local -f function_name
```

o parametro `function_name` é encontrado no arquivo `serverless.yml` na seção `functions`. No exemplo abaixo, o nome da função é `api`:

```yml
service: aws-node-express-api-project
frameworkVersion: "3"

provider:
  name: aws
  runtime: nodejs18.x

functions:
  api:
    handler: index.handler
    events:
      - httpApi: "*"
```

- para invocar a função passando parametros diretamente, execute o comando:

```bash
npx sls invoke local -f function_name --path path_to_json_file
```

no arquivo JSON, você coloca os dados que deseja alterar para fazer a invocação da função. Ex:

```JSON
{
  "resource": "/",
  "path": "/path",
  "httpMethod": "GET"
}
```

### **Para fazer deploy na AWS**

Para fazer deploy na AWS, execute o comando:

```bash
npx sls deploy --aws-profile profile_name
```

o usuário criado na AWS deve conter as permissões padrões contidas neste [gist](https://gist.github.com/ServerlessBot/7618156b8671840a539f405dea2704c8). São configurações recomendadas pelo Serverless Framework, mas estão sujeitas a alterações.

Configurações de policy que funcionaram:

```JSON
{
    "Statement": [
        {
            "Action": [
                "apigateway:*",
                "cloudformation:CancelUpdateStack",
                "cloudformation:ContinueUpdateRollback",
                "cloudformation:CreateChangeSet",
                "cloudformation:CreateStack",
                "cloudformation:CreateUploadBucket",
                "cloudformation:DeleteStack",
                "cloudformation:Describe*",
                "cloudformation:EstimateTemplateCost",
                "cloudformation:ExecuteChangeSet",
                "cloudformation:Get*",
                "cloudformation:List*",
                "cloudformation:UpdateStack",
                "cloudformation:UpdateTerminationProtection",
                "cloudformation:ValidateTemplate",
                "cloudformation:DeleteChangeSet",
                "dynamodb:CreateTable",
                "dynamodb:DeleteTable",
                "dynamodb:DescribeTable",
                "dynamodb:DescribeTimeToLive",
                "dynamodb:UpdateTimeToLive",
                "ec2:AttachInternetGateway",
                "ec2:AuthorizeSecurityGroupIngress",
                "ec2:CreateInternetGateway",
                "ec2:CreateNetworkAcl",
                "ec2:CreateNetworkAclEntry",
                "ec2:CreateRouteTable",
                "ec2:CreateSecurityGroup",
                "ec2:CreateSubnet",
                "ec2:CreateTags",
                "ec2:CreateVpc",
                "ec2:DeleteInternetGateway",
                "ec2:DeleteNetworkAcl",
                "ec2:DeleteNetworkAclEntry",
                "ec2:DeleteRouteTable",
                "ec2:DeleteSecurityGroup",
                "ec2:DeleteSubnet",
                "ec2:DeleteVpc",
                "ec2:Describe*",
                "ec2:DetachInternetGateway",
                "ec2:ModifyVpcAttribute",
                "events:DeleteRule",
                "events:DescribeRule",
                "events:ListRuleNamesByTarget",
                "events:ListRules",
                "events:ListTargetsByRule",
                "events:PutRule",
                "events:PutTargets",
                "events:RemoveTargets",
                "iam:AttachRolePolicy",
                "iam:CreateRole",
                "iam:DeleteRole",
                "iam:DeleteRolePolicy",
                "iam:DetachRolePolicy",
                "iam:GetRole",
                "iam:PassRole",
                "iam:PutRolePolicy",
                "iot:CreateTopicRule",
                "iot:DeleteTopicRule",
                "iot:DisableTopicRule",
                "iot:EnableTopicRule",
                "iot:ReplaceTopicRule",
                "kinesis:CreateStream",
                "kinesis:DeleteStream",
                "kinesis:DescribeStream",
                "lambda:*",
                "logs:CreateLogGroup",
                "logs:DeleteLogGroup",
                "logs:DescribeLogGroups",
                "logs:DescribeLogStreams",
                "logs:FilterLogEvents",
                "logs:GetLogEvents",
                "logs:PutSubscriptionFilter",
                "s3:CreateBucket",
                "s3:DeleteBucket",
                "s3:DeleteBucketPolicy",
                "s3:DeleteObject",
                "s3:DeleteObjectVersion",
                "s3:GetObject",
                "s3:GetObjectVersion",
                "s3:ListAllMyBuckets",
                "s3:ListBucket",
                "s3:PutBucketNotification",
                "s3:PutBucketPolicy",
                "s3:PutBucketTagging",
                "s3:PutBucketWebsite",
                "s3:PutEncryptionConfiguration",
                "s3:PutObject",
                "sns:CreateTopic",
                "sns:DeleteTopic",
                "sns:GetSubscriptionAttributes",
                "sns:GetTopicAttributes",
                "sns:ListSubscriptions",
                "sns:ListSubscriptionsByTopic",
                "sns:ListTopics",
                "sns:SetSubscriptionAttributes",
                "sns:SetTopicAttributes",
                "sns:Subscribe",
                "sns:Unsubscribe",
                "states:CreateStateMachine",
                "states:DeleteStateMachine",
                "logs:TagResource"
            ],
            "Effect": "Allow",
            "Resource": "*"
        }
    ],
    "Version": "2012-10-17"
}
```