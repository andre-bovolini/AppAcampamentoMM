import React from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import { View } from 'react-native';

export function Template() {
return (
    <Container>
        <HeaderContainer source={require('../../assets/starPattern.png')}>
            <HeaderWrapper>
                <MailIconWrapper>
                    <MailIcon/>
                </MailIconWrapper>
                <IconWrapper>
                <MmLogo />
                </IconWrapper>
                <MailIconWrapper>
                    <MailIcon/>
                </MailIconWrapper>
            </HeaderWrapper>

        </HeaderContainer>

    </Container>
  );
}