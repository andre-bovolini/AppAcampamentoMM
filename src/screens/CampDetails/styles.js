import { Image } from 'react-native';
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
    height: ${100}px;

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
    
    padding-bottom: 30px;
    margin-bottom: 20px;


    margin-top: -172px;
`;


export const CampFeaturesWrapper = styled.View`
    width: 100%;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;

    background-color: 'rgba(13, 65, 74, 0.85)';
    border-radius: 20px;
`;


export const CampFeaturesTitle = styled.Text`
     color: white;
    font-size: 14px;
`;


export const CamFeaturesCarouselWrapper = styled.View`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

    background-color: 'rgba(20, 100, 114, 1)';
    border-radius: 10px;

    margin-top: 10px;
`;


export const CampFeaturesCarouselItem = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const DetailsWrapper = styled.View`
     width: 45%;
    justify-content: space-between;
    align-items: center;
`;   


export const DetailsTitle = styled.Text`
     color: white;
    font-size: 18px;

    text-align: center;
`;


export const DetailsButton = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7,
})`
    width: 90%;
    height: 32px;

    justify-content: center;
    align-items: center;

    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-color: 'rgba(255, 255, 255, 1)';
    border-width: 0.5px;

    background-color: 'rgba(255, 255, 255, 0.53)';

    margin-top: 4px;
`;


export const DetailsButtonTitle = styled.Text`
    color: 'rgba(22, 38, 73, 1)';
    font-size: 18px;
    font-weight: bold;
`;


export const DetailsPicture = styled(Image)`
    width: 165px;
    height: 124px;

    border-radius: 10px;
`;

export const LocationWrapper = styled.View`
    width: 100%;

    margin-top: 10px;
    align-items: center;
`;

export const LocationTitleWrapper = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const LocationTitle = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: bold;
`;

export const LocationPlusIcon = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

`;

export const LocationMapsView = styled.View`

`;



