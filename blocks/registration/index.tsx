import * as React from 'react';
import { LeftContainer, RegisterWrapper, RightContainer } from './styled';
import { SignUp } from './signup';
import { Social } from '../../components/social-button';

type Props = {
    children?: any
};
export const Registration = (props: Props) => {
    return (
        <RegisterWrapper>
            <RightContainer>
                <img src="/text-logo.svg" alt=""/>
            </RightContainer>
            <LeftContainer>
                <SignUp/>
            </LeftContainer>
        </RegisterWrapper>
    );
};