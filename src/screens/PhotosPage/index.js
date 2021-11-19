import React from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,

PageTitleWrapper,
PageTitle,
PageTitleIcon,

ContentWrapper,
FirstCarouselWrapper,
FirstCarouselItem,
ItemImageView,
BottomView,
ImageTitle,
ImageSubTitle,
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import LocationPlusIconSVG from '../../assets/locationPlusIcon.svg'

const data = [
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    },
    {
        teste: 1
    }
]

export function PhotosPage() {
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
            <PageTitleWrapper>
                <PageTitle>
                Últimas temporadas:
                </PageTitle>
                <PageTitleIcon>
                    <LocationPlusIconSVG />
                </PageTitleIcon>
            </PageTitleWrapper>

                
            <FirstCarouselWrapper>
            <Carousel
                firstItem ={0}
                data={data}
                layout={'tinder'} layoutCardOffset={9}
                renderItem={({ item }) => {
                    return (
                        // <FirstCarouselItem>
                        <ItemImageView source={{uri: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t39.30808-6/222504034_1889026484590844_2006494354918641765_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFAsB7JohjY0g4lR2w-yCE9tN_IOtylGXK038g63KUZcsWk8dqHIIqLiw9FZ5kFV4jdCVKTkwI_fsl1k1_JdNoo&_nc_ohc=-Tx8WPdl6GAAX9zHYfc&_nc_ht=scontent.fcgh7-1.fna&oh=6aeec4b75ad24a7d1025895ba591dfb3&oe=617E22DA'}}>
                            <BottomView>
                                <ImageTitle>
                                    Momentos de integração
                                </ImageTitle>
                                <ImageSubTitle>
                                    Por do sol
                                </ImageSubTitle>
                            </BottomView>
                        </ItemImageView>
                    // </FirstCarouselItem>
                    )}}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={240}
                containerCustomStyle={{
                    marginTop: 10,
                }}
                inactiveSlideShift={1}
                //onSnapToItem={(index) => setActiveSlide(index)}
                useExperimentalSnap={true}
                disableIntervalMomentum={true}
                //   scrollInterpolator={scrollInterpolator}
                //   slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
                />
                
            </FirstCarouselWrapper>
            <FirstCarouselWrapper>
            <Carousel
                firstItem ={0}
                data={data}
                layout={'tinder'} layoutCardOffset={9}
                renderItem={({ item }) => {
                    return (
                        // <FirstCarouselItem>
                        <ItemImageView source={{uri: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t39.30808-6/222504034_1889026484590844_2006494354918641765_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFAsB7JohjY0g4lR2w-yCE9tN_IOtylGXK038g63KUZcsWk8dqHIIqLiw9FZ5kFV4jdCVKTkwI_fsl1k1_JdNoo&_nc_ohc=-Tx8WPdl6GAAX9zHYfc&_nc_ht=scontent.fcgh7-1.fna&oh=6aeec4b75ad24a7d1025895ba591dfb3&oe=617E22DA'}}>
                            <BottomView>
                                <ImageTitle>
                                    Momentos de integração
                                </ImageTitle>
                                <ImageSubTitle>
                                    Por do sol
                                </ImageSubTitle>
                            </BottomView>
                        </ItemImageView>
                    // </FirstCarouselItem>
                    )}}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={240}
                containerCustomStyle={{
                    marginTop: 10,
                }}
                inactiveSlideShift={1}
                //onSnapToItem={(index) => setActiveSlide(index)}
                useExperimentalSnap={true}
                disableIntervalMomentum={true}
                //   scrollInterpolator={scrollInterpolator}
                //   slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
                />
                
            </FirstCarouselWrapper>
            <FirstCarouselWrapper>
            <Carousel
                firstItem ={0}
                data={data}
                layout={'tinder'} layoutCardOffset={9}
                renderItem={({ item }) => {
                    return (
                        // <FirstCarouselItem>
                        <ItemImageView source={{uri: 'https://scontent.fcgh7-1.fna.fbcdn.net/v/t39.30808-6/222504034_1889026484590844_2006494354918641765_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeFAsB7JohjY0g4lR2w-yCE9tN_IOtylGXK038g63KUZcsWk8dqHIIqLiw9FZ5kFV4jdCVKTkwI_fsl1k1_JdNoo&_nc_ohc=-Tx8WPdl6GAAX9zHYfc&_nc_ht=scontent.fcgh7-1.fna&oh=6aeec4b75ad24a7d1025895ba591dfb3&oe=617E22DA'}}>
                            <BottomView>
                                <ImageTitle>
                                    Momentos de integração
                                </ImageTitle>
                                <ImageSubTitle>
                                    Por do sol
                                </ImageSubTitle>
                            </BottomView>
                        </ItemImageView>
                    // </FirstCarouselItem>
                    )}}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={240}
                containerCustomStyle={{
                    marginTop: 10,
                }}
                inactiveSlideShift={1}
                //onSnapToItem={(index) => setActiveSlide(index)}
                useExperimentalSnap={true}
                disableIntervalMomentum={true}
                //   scrollInterpolator={scrollInterpolator}
                //   slideInterpolatedStyle={animatedStyles}
                useScrollView={true}          
                />
                
            </FirstCarouselWrapper>


        </ContentWrapper>

    </Container>
  );
}