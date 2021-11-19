import { ImageBackground } from 'react-native';
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
margin-bottom: 20px;


margin-top: -172px;

background-color: 'rgba(13, 65, 74, 0.9)';

border-radius: 20px;

`;

export const PageTitleWrapper = styled.View`
    width: 100%;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-left: 10px;
    padding-left: 10px;
    padding-top: 4px;
`;

export const PageTitle = styled.Text`
    color: 'rgba(255, 255, 255, 1)';
    font-size: 24px;
    font-family: 'ChakraPetch-Medium';
`;

export const PageTitleIcon = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

`;


export const FirstCarouselWrapper = styled.View`
    width: 100%;
    height: 240px;

    align-items: center;

    padding-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const FirstCarouselItem = styled.View`
    width: 100%;
    align-items: center;
`;

export const ItemImageView = styled(ImageBackground).attrs({
    imageStyle: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    }
})`
    width: 240px;
    height: 200px;

    border-radius: 10px;

    justify-content: flex-end;
`;

export const BottomView = styled(LinearGradient).attrs({
    colors: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.99)']
})`
    width: 100%;
    height: 70px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    padding-top: 20px;
    padding-left: 13px;

    justify-content: flex-start;
`;

export const ImageTitle = styled.Text`
    color: 'rgba(255, 255, 255, 1)';
    font-size: 18px;
    font-family: 'ChakraPetch-Medium';
`;

export const ImageSubTitle = styled.Text`
    color: 'rgba(120, 128, 130, 1)';
    font-size: 14px;
    font-family: 'ChakraPetch-Medium';

    margin-top: -10px;
`;
