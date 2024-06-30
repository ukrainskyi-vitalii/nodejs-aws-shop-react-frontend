import aws_cdk as core
import aws_cdk.assertions as assertions

from cdk_front.cdk_front_stack import CdkFrontStack

# example tests. To run these tests, uncomment this file along with the example
# resource in cdk_front/cdk_front_stack.py
def test_sqs_queue_created():
    app = core.App()
    stack = CdkFrontStack(app, "cdk-front")
    template = assertions.Template.from_stack(stack)

#     template.has_resource_properties("AWS::SQS::Queue", {
#         "VisibilityTimeout": 300
#     })
