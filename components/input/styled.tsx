import styled from '@emotion/styled';
import { Input} from 'antd';
import { FC } from 'react';
import { InputProps } from 'antd/lib/input';

export const CustomInput:FC<InputProps> = styled(Input)`
  border-bottom: solid 1px #1c1c1e;
`