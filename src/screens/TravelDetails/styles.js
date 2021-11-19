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
    flex: 1;
    margin-right: 19px;
    margin-left: 19px;

    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 40px;

    margin-bottom: 20px;


    margin-top: -172px;

    background-color: 'rgba(13, 65, 74, 0.9)';

    border-radius: 20px;

`;

export const CampStayWrapper = styled.View`
    width: 100%;

    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;
`;

export const CampStayTitle = styled.Text`
    color: white;
    font-size: 24px;
    font-family: bold;
`;

export const CampStayCarouselWrapper = styled.View`
    width: 100%;

    padding-top: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px;

    background-color: 'rgba(13, 65, 74, 0.85)';
    border-radius: 20px;

`;

export const CampSatyCarouselItem = styled.View`
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    background-color: 'rgba(20, 100, 114, 0.26)';

    padding: 10px;

    border-radius: 10px;
`;

export const CampStayCarouselDetails = styled.Text`
    width: 50%;
    color: white;
    font-size: 13px;
`;

export const CampStayCarouseImage = styled(Image)`
    height: 85px;
    width: 47%;

    border-radius: 5px;
`;



export const MenuWrapper = styled.View`
    width: 100%;

    padding-right: 20px;
    padding-left: 10px;
`;


export const MenuTitle = styled.Text`
    color: white;
    font-size: 24px;
    font-family: bold;
`;

export const MenuTabWrapper = styled.View`
    width: 100%;
    margin-top: 5px;
    margin-bottom: 5px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: 'rgba(13, 121, 133, 1)';
    border-radius: 5px;

    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const MenuTabIconTitle = styled.View`
    flex-direction: row;

    align-items: center;
`;


export const MenuTabTitle = styled.Text`
    color: white;
    font-size: 14px;

    margin-left: 12px;
`;

export const MenuTabIcon = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`

`;

export const PaymentTitle = styled.Text`
    color: white;
    font-size: 18px;
    font-family: bold;

    margin-left: 10px;
`;

export const PaymentWrapper = styled.View`
    width: 95%;

    align-self: center;
    padding-top: 8px;
    padding-bottom: 28px;
    padding-left: 10px;
    padding-right: 10px;

    margin-top: 5px;

    background-color: 'rgba(18, 137, 155, 0.44)';

    border-radius: 20px;
`;


export const PaymentConditionsWrapper = styled.View`
    width: 100%;

    background-color: 'rgba(13, 121, 133, 1)';

    

    border-radius: 10px;

    border-color: 'rgba(255, 255, 255, 1)';
    border-width: 2px;

    padding-left: 10px;
    padding-top: 5px;
`;

export const PaymentDateWrapper = styled.View`

`;

export const PaymentDateTitle = styled.Text`
    color: white;
    font-size: 18px;
    font-family: bold;
`;

export const PaymentParcels = styled.Text`
    color: black;
    font-size: 14px;
    font-family: bold;
`;

export const BankDetails = styled.Text`
    color: white;
    font-size: 14px;
    font-family: bold;

    margin-left: 10px;
    margin-top: 10px;
`;

export const PromotionWrapper = styled.View`
    width: 90%;

    align-self: center;

    border-radius: 10px;

    background-color: 'rgba(31, 42, 90, 1)';

    padding-top: 5px;
    padding-bottom: 12px;
    padding-left: 13px;
    padding-right: 13px;
`;  

export const PromotionTitle = styled.Text`
    color: white;
    font-size: 14px;
    font-family: bold;
`;

export const PromotionDescription = styled.Text`
    color: 'rgba(191, 191, 191, 1)';
    font-size: 14px;
    font-family: bold;
`;



