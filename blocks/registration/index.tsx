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

export const Registration = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <SignUpWrapper>
      <Title level={2}>Sign Up</Title>
      <Paragraph>
        Already have an account?{' '}
        <Link href="/login">
          <a>Log In</a>
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
          rules={[
            { required: true, message: 'Please input your Confirm Password!' },
          ]}
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </SignUpWrapper>
  )
}

const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
