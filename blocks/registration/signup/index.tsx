import { Button, Checkbox, Form, Input } from 'antd';
import { Social } from '../../../components/social-button';
import * as React from 'react';
import styled from '@emotion/styled';

const layout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
};
const tailLayout = {
    wrapperCol: {  span: 24 },
};

export const SignUp = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <SignUpWrapper>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="Confirm Password"
                    rules={[{ required: true, message: 'Please input your Confirm Password!' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Account terms & conditions</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout} style={{textAlign:'center'}}>
                    <Button style={{width:'189px'}} type="primary" htmlType="submit" shape="round">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        <SocialContainer>
            <Social icon={<img src="/facebook.svg" alt="facebook"/>}/>
            <Social icon={<img src="/google.svg" alt="google"/>}/>
            <Social icon={<img src="/apple.svg" alt="apple"/>}/>
        </SocialContainer>
        </SignUpWrapper>
    );
};

const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
`