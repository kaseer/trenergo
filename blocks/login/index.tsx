import { Button, Checkbox, Form, Input } from 'antd'
import * as React from 'react'
import styled from '@emotion/styled'
import { Social } from '../../components/social-button'
import Title from 'antd/lib/typography/Title'
import Paragraph from 'antd/lib/typography/Paragraph'
import Line from 'antd/lib/progress/Line'
import Link from 'next/link'

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
}
const tailLayout = {
  wrapperCol: { span: 24 },
}

export const Login = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <SignInWrapper>
      <Title level={2}>Log In</Title>
      <Paragraph>
        Don’t have an account?{' '}
        <Link href="/register">
          <a>Sign Up</a>
        </Link>{' '}
        here.
      </Paragraph>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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

        <Form.Item {...tailLayout} style={{ textAlign: 'center' }}>
          <Button
            style={{ width: '189px' }}
            type="primary"
            htmlType="submit"
            shape="round"
          >
            Log In
          </Button>
        </Form.Item>
        <Form.Item
          style={{ textAlign: 'center' }}
          name="remember"
          valuePropName="checked"
        >
          <Link href="/">
            <a>Forgot your password?</a>
          </Link>
        </Form.Item>
      </Form>
      <div>
        <Paragraph>
          <b>OR</b> log in with:
        </Paragraph>
      </div>
      <SocialContainer>
        <Social icon={<img src="/facebook.svg" alt="facebook" />} />
        <Social icon={<img src="/google.svg" alt="google" />} />
        <Social icon={<img src="/apple.svg" alt="apple" />} />
      </SocialContainer>
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
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
