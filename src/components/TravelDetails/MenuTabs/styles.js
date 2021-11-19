import styled from 'styled-components/native';

export const Container = styled.View`
width: 100%;

margin-top: 5px;
margin-bottom: 5px;
`;

export const MenuTabWrapper = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
    width: 100%;
    

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

export const MenuExpasionTab = styled.View`
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;
    padding-bottom: 5px;

    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    margin-top: -3px;

    z-index: -1;

    background-color: 'rgba(18, 156, 171, 1)';
`;


export const ExpansionTabDesxription = styled.Text`

`;

