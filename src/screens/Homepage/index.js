import React, { useState, useEffect } from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,

ContentWrapper,
CountdownWrapper,

CountDownTitle,
CountDownTimeWrapper,
TwoDigitWrapper,
DigitWrapper,
DigitTitle,
NumbersDivider,
DateWrapper,
LocationButtonWrapper,
LocationTitle,
LocationIconWrapper,
MoreInformationButton,
MoreInformationTitle,
MoreInformationIcon,

CarouselTitle,
CarouselItemContainer,
CarouselItemHeader,
CarouselItemHeaderText,
CarouselItemBody,
CarouselItemBodyText,

OurTimeWrapper,
OurTeamTitle,
OurTeamDescription,
OurTeamImage,
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import { View, StyleSheet, Dimensions, Text } from 'react-native';

import LocationIcon from '../../assets/locationIcon.svg'
import InformationIcon from '../../assets/informationIcon.svg'

import Carousel from 'react-native-snap-carousel';

import { showLocation } from 'react-native-map-link'



const DATA = [{
                title: 'Embarque',
                description: '\u25CF Medição de temperatura dos participantes\n\u25CF Acampantes devem fazer PCR (LAMP OU RT) ou antígeno enos enviar o resultado\n\u25CF Staff vacinado e sempre com máscaras'
            }, {
                title: 'Acampamento',
                description: '\u25CF Higienização de cabanas\n\u25CF 3 medições de temperatura diárias\n\u25CF Uso de máscara obrigatório\n\u25CF Álcool em gel em todo o acampamento\n'
            }, {
                title: 'Refeições',
                description: '\u25CF Distanciamento entre os acampantes\n\u25CF Talheres higienizados e embalados individualmente\n\u25CF Sistema de Buffet servido pelo monitor \n \u25CF Portas e janelas abertas'
            }
];

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);



export function Homepage() {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [totalInterval, setTotalInterval] = useState(Math.floor((new Date(2022, 1, 16, 9).getTime() - new Date().getTime())/1000))
    const [activeSlide, setActiveSlide] = useState(1)

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



    useEffect(() => {
        const intervalId = setInterval(() => {
            setTotalInterval(totalInterval - 1);
          }, 1000);

          return () => clearInterval(intervalId);
    }, [totalInterval])

    useEffect(() => {
        const daysToUpdate = Math.floor(totalInterval/(60*60*24))
        const remainingdays =(totalInterval%(60*60*24))
        setDays(daysToUpdate)

        const hoursToUpdate = Math.floor(remainingdays/(60*60))
        const remaininghours =(remainingdays%(60*60))
        setHours(hoursToUpdate)

        const minutesToUpdate = Math.floor(remaininghours/(60))
        const secondsToUpdate =(remaininghours%(60))
        setMinutes(minutesToUpdate)
        setSeconds(secondsToUpdate)
    }, [totalInterval])



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
                <CountdownWrapper>
                    <CountDownTitle>
                    A 58ª temporada começa em:
                    </CountDownTitle>
                    <CountDownTimeWrapper>
                        <TwoDigitWrapper>
                            <DigitWrapper>
                               {days}
                            </DigitWrapper>
                            <DigitTitle>
                                dias
                            </DigitTitle>
                        </TwoDigitWrapper>
                        <NumbersDivider>
                                :
                        </NumbersDivider>
                        <TwoDigitWrapper>
                            <DigitWrapper>
                                {hours}
                            </DigitWrapper>
                            <DigitTitle>
                                horas
                            </DigitTitle>
                        </TwoDigitWrapper>
                        <NumbersDivider>
                                :
                        </NumbersDivider>
                        <TwoDigitWrapper>
                            <DigitWrapper>
                                {minutes}
                            </DigitWrapper>
                            <DigitTitle>
                                minutos
                            </DigitTitle>
                        </TwoDigitWrapper>
                        <NumbersDivider>
                                :
                        </NumbersDivider>
                        <TwoDigitWrapper>
                            <DigitWrapper>
                                {seconds}
                            </DigitWrapper>
                            <DigitTitle>
                                segundos
                            </DigitTitle>
                        </TwoDigitWrapper>
                    </CountDownTimeWrapper>

                    <DateWrapper>
                    de 16 à 22 de janeiro
                    </DateWrapper>
                    <LocationButtonWrapper onPress={() => showLocation(options)}>
                        <LocationTitle>
                        Sítio bom pastor
                        </LocationTitle>
                        <LocationIconWrapper>
                            <LocationIcon />
                        </LocationIconWrapper>
                    </LocationButtonWrapper>
                    <MoreInformationButton>
                        <MoreInformationTitle>
                        Mais informações
                        </MoreInformationTitle>
                        <MoreInformationIcon>
                            <InformationIcon/>
                        </MoreInformationIcon>
                    </MoreInformationButton>
                </CountdownWrapper>
                <CarouselTitle>
                Cuidados com a COVID-19
                </CarouselTitle>
                <Carousel
                firstItem ={activeSlide}
                data={DATA}
                renderItem={({ item }) => {
                    return (
                    <CarouselItemContainer>
                        <CarouselItemHeader>
                            <CarouselItemHeaderText>
                            {item.title}
                            </CarouselItemHeaderText>
                        </CarouselItemHeader>
                        <CarouselItemBody>
                            <CarouselItemBodyText>
                        {item.description}
                            </CarouselItemBodyText>
                        </CarouselItemBody>
                    </CarouselItemContainer>
                    )}}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={200}
                containerCustomStyle={{
                    marginTop: 10,
                }}
                inactiveSlideShift={1}
                onSnapToItem={(index) => setActiveSlide(index)}
                useExperimentalSnap={true}
                disableIntervalMomentum={true}
                //   scrollInterpolator={scrollInterpolator}
                //   slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
                />
                <OurTimeWrapper>
                    <OurTeamTitle>
                    Nossa equipe
                    </OurTeamTitle>
                    <OurTeamDescription>
                    Monitores especializados no trato de crianças e adolescentes (um(a) monitor(a) para cada 07 acampantes em média)
                    </OurTeamDescription>
                    <OurTeamImage source={require('../../assets/teamPicture.png')}/>

                </OurTimeWrapper>
            </ContentWrapper>

           


    </Container>
  );
}
