import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { Image } from 'react-native'

export const Container = styled(LinearGradient).attrs({
    colors: ['rgba(38, 48, 107, 1)', 'rgba(0, 166, 81, 1)']
})`
flex: 1;

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
    width: 100%;
    padding-right: 19px;
    padding-left: 19px;
    margin-bottom: 20px;


    margin-top: -172px;

    padding-bottom: 30px;

`;

export const CountdownWrapper = styled.View`
    width: 100%;
    height: 197px;

    background-color: 'rgba(8, 59, 66, 0.76)';

    border-radius: 20px;

    padding-top: 9px;
    padding-left: 13px;
    padding-right: 18px;
`;



export const CountDownTitle = styled.Text`
    color: white;
    font-size: 18px;
`;

export const CountDownTimeWrapper = styled.View`
    flex-direction: row;
    margin-left: 3px;
    margin-top: 8px;

    border-radius: 5px;
    border-color: white;
    border-width: 0.5px;

    align-items: center;
    justify-content: space-evenly;
`;

export const TwoDigitWrapper = styled.View`

`;

export const DigitWrapper = styled.Text`
      color: white;
    font-size: 36px;
    font-weight: bold;

`;

export const DigitTitle = styled.Text`
      color: white;
    font-size: 10px;

    align-self: flex-end;

    margin-top: -10px;
`;

export const NumbersDivider = styled.Text`
      color: 'rgba(255, 255, 255, 0.63)';
    font-size: 36px;
`;

export const DateWrapper = styled.Text`
        color: white;
    font-size: 18px;
    font-weight: bold;

    align-self: flex-end;

    margin-top: 5px;
`;

export const LocationButtonWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex-direction: row;

    height: 26px;
    width: 80%;

    background-color: 'rgba(20, 100, 114, 1)';

    justify-content: space-between;
    align-items: center;

    align-self: center;

    padding-left: 28px;
    padding-right: 28px;

    border-radius: 5px;

    margin-top: 4px;
`;

export const LocationTitle = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;  

export const LocationIconWrapper = styled.View`



`;

export const MoreInformationButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    flex-direction: row;

    height: 26px;
    width: 80%;

    background-color: 'rgba(20, 100, 114, 1)';

    justify-content: space-between;
    align-items: center;

    align-self: center;

    padding-left: 28px;
    padding-right: 28px;

    border-radius: 5px;

    margin-top: 10px;
`;

export const MoreInformationTitle = styled.Text`
    color: white;
    font-size: 18px;
    font-weight: bold;
`;

export const MoreInformationIcon = styled.View`

`;

export const CarouselTitle = styled.Text`
     color: white;
    font-size: 20px;
    font-weight: bold;

    margin-top: 10px;
`;

export const CarouselItemContainer = styled.View`
    width: 186px;
    height: 210px;

    align-items: center;
`;

export const CarouselItemHeader = styled.View`
    height: 45px;
    width: 100%;

    background-color: 'rgba(8, 59, 66, 0.83)';

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    justify-content: center;
    align-items: center;
`;

export const CarouselItemHeaderText = styled.Text`
      color: white;
    font-size: 20px;
    font-family: 'ChakraPetch-SemiBold'
`;

export const CarouselItemBody = styled.View`
    width: 100%;
    height: 165px;

    background-color: 'rgba(255, 255, 255, 0.66)';

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    padding-left: 4px;
    padding-right: 4px;

`;

export const CarouselItemBodyText = styled.Text`
      color: 'rgba(21, 30, 68, 1)';
    font-size: 14px;
    font-family: 'ChakraPetch-Medium'
`;

export const OurTimeWrapper = styled.View`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;

    background-color: 'rgba(8, 59, 66, 0.76)';
    border-radius: 10px;

    padding-left: 17px;
    padding-right: 17px;

    margin-top: 10px;
    margin-bottom: 10px;
`;

export const OurTeamTitle = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const OurTeamDescription = styled.Text`
    color: white;
    font-size: 13px;
`;

export const OurTeamImage = styled(Image)`
    width: 290px;
    height: 170px;

    border-radius: 10px;
    margin-top: 10px;
`;




