import React from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,

ContentWrapper,
CampFeaturesWrapper,
CampFeaturesTitle,
CamFeaturesCarouselWrapper,
CampFeaturesCarouselItem,
DetailsWrapper,   
DetailsTitle,
DetailsButton,
DetailsButtonTitle,
DetailsPicture,

LocationWrapper,
LocationTitleWrapper,
LocationTitle,
LocationPlusIcon,
LocationMapsView,
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import LocationPlusIconSVG from '../../assets/locationPlusIcon.svg'
import { View } from 'react-native';

import { showLocation } from 'react-native-map-link'

export function CampDetails() {


    const options = {
        latitude: -23.5028,
        longitude: -47.7089,
        // googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
        googlePlaceId: 'ChIJX-AEcHrpxZQRXuUTg4vSQTs',  // optionally specify the google-place-id
        alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
        dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
        dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
        cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
        appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)

    }

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
        <ContentWrapper>
            <CampFeaturesWrapper>
                <CampFeaturesTitle>
                O Acampamento M.M. fica na cidade de Capela do Alto próximo a  região de Sorocaba SP - 130 Km de São Paulo, onde temos a sua disposição mais de 50.000 m2 de área verde. Conheça nossa infraestrutura:
                </CampFeaturesTitle>
                <CamFeaturesCarouselWrapper>
                    <CampFeaturesCarouselItem>
                        <DetailsWrapper>    
                            <DetailsTitle>
                            Alojamentos (suítes) com ar condicionado
                            </DetailsTitle>
                            <DetailsButton>
                                <DetailsButtonTitle>
                                    Ver Mais
                                </DetailsButtonTitle>
                            </DetailsButton>
                        </DetailsWrapper>
                        <DetailsPicture source={require('../../assets/exampleCampCarousel.png')}/>
                    </CampFeaturesCarouselItem>
                </CamFeaturesCarouselWrapper>
            </CampFeaturesWrapper>

            <LocationWrapper>
                <LocationTitleWrapper>
                    <LocationTitle>Localização</LocationTitle>
                    <LocationPlusIcon onPress={() => showLocation(options)}>
                        <LocationPlusIconSVG />
                    </LocationPlusIcon>
                </LocationTitleWrapper>
                <LocationMapsView>

                </LocationMapsView>
            </LocationWrapper>
        </ContentWrapper>

    </Container>
  );
}