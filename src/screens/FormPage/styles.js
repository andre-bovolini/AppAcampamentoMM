import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient).attrs({
    colors: ['rgba(38, 48, 107, 1)', 'rgba(0, 166, 81, 1)']
})`
height: 100%;
width: 100%;

`;

export const HeaderContainer = styled.ImageBackground`
    width: 100%;
    height: 300px;

    align-items: center;
`;

export const HeaderWrapper = styled.View`
    width:102%;
    height: ${110}px;

    background-color: "rgba(0, 0, 0, 0.6)";

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    border-color: "rgba(255, 255, 255, 0.7)";
    border-width: 1px;

    justify-content: space-between;
    align-items: flex-end;

    flex-direction: row;

    padding-left: 31px;
    padding-right: 31px;
`;

export const IconWrapper = styled.View`
    margin-bottom: 18px;
`;

export const MailIconWrapper = styled.TouchableOpacity`
    margin-bottom: 23px;
    justify-self: flex-end;
`;


export const ContentWrapper = styled.ScrollView`
flex: 1;
margin-right: 19px;
margin-left: 19px;


padding-right: 10px;
padding-left: 10px;
padding-bottom: 20px;
margin-bottom: 20px;


margin-top: -172px;

background-color: 'rgba(13, 65, 74, 0.9)';

border-radius: 20px;

`;

export const FormTitleWrapper = styled.View`
    padding-left: 7px;
    padding-top: 3px;
`;

export const FormTitle = styled.Text`
    color: 'rgba(255, 255, 255, 1)';
    font-size: 18px;
    font-family: 'ChakraPetch-SemiBold';
`;

export const FormIntructions = styled.Text`
    color: 'rgba(255, 255, 255, 1)';
    font-size: 14px;
    font-family: 'ChakraPetch-Medium';
`;

export const FormWrapper = styled.View`
    padding-left: 7px;
    padding-right: 7px;
    padding-top: 5px;
`;

export const InputWrapper = styled.View`

`;

export const Label = styled.Text`
 color: 'rgba(255, 255, 255, 1)';
    font-size: 13px;
    font-family: 'ChakraPetch-Medium';
`;

export const TextInputWrapper = styled.View`
    width: 100%;
    height: 35px;

    background-color: 'rgba(20, 100, 114, 1)';

    border-radius: 5px;

    padding-left: 10px;
`;

export const TextInput = styled.TextInput`
    margin-bottom: -6px;

    color: 'rgba(255, 255, 255, 1)';
    font-size: 14px;
    font-family: 'ChakraPetch-Medium';
`;

export const DoubleInputWrapper = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IndividualInputWrapper = styled.View`
    width: 47%;

`;


export const SaveButtonWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 80%;
    height: 50px;

    justify-content: center;
    align-items: center;

    background-color: 'rgba(31, 42, 90, 1)';

    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 10px;

    align-self: center;
`;      


export const SaveButtonTitle = styled.Text`
      color: 'rgba(255, 255, 255, 1)';
    font-size: 14px;
    font-family: 'ChakraPetch-Medium';
`;


