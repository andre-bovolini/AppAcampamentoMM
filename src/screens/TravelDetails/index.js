import React from 'react';

import {
Container,
HeaderContainer,
HeaderWrapper,
IconWrapper,
MailIconWrapper,

ContentWrapper,
CampStayWrapper,
CampStayTitle,
CampStayCarouselWrapper,
CampSatyCarouselItem,
CampStayCarouselDetails,
CampStayCarouseImage,

MenuWrapper,
MenuTitle,
MenuTabWrapper,
MenuTabIconTitle,
MenuTabTitle,
MenuTabIcon,

PaymentWrapper,
PaymentTitle,
PaymentConditionsWrapper,
PaymentDateWrapper,
PaymentDateTitle,
PaymentParcels,

BankDetails,
PromotionWrapper,
PromotionTitle,
PromotionDescription,
} from './styles';

import MmLogo from '../../assets/mainLogo.svg'
import MailIcon from '../../assets/mailIcon.svg'
import { FlatList, View } from 'react-native';
import ChevronDown from '../../assets/chevronDown.svg'

import BreakfastIcon from '../../assets/menuIcons/breakfast.svg';
import LunchIcon from '../../assets/menuIcons/lunch.svg';
import AfternoonSnackIcon from '../../assets/menuIcons/afternoonSnack.svg';
import DinnerIcon from '../../assets/menuIcons/dinner.svg';
import MidnightSnackIcon from '../../assets/menuIcons/midnightSnack.svg';
import { MenuTabs } from '../../components/TravelDetails/MenuTabs';


export function TravelDetails() {

    const menuArray = [
        {
            title: 'Café da manhã',
            description: 'Sucrilhos, chocolate, pão, queijo, presunto, manteiga, requeijão, geléia, bolo, bolachas e frutas. '
        },
        {
            title: "Almoço",
            description: 'Macarronada, arroz, feijão, churrasco, frango ao forno, farofa, saladas, sucos e sobremesa. '
        },
        {
            title: 'Lanche da tarde',
            description: 'Pão de queijo, lanchinho, bolo, biscoito e suco. '
        },
        {
            title: 'Jantar',
            description: 'Strogonoff, arroz, feijão, bife, batata frita, farofa, saladas, sucos e sobremesas. '
        },
        {
            title: 'Lanche da noite',
            description: 'Bolachas, biscoitos  com suco, chocolate e chá.  '
        },
    ]
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
            <CampStayWrapper>
                <CampStayTitle>
                    A Estadia
                </CampStayTitle>
                <CampStayCarouselWrapper>
                    <CampSatyCarouselItem>
                        <CampStayCarouselDetails>
                        O Acampamento M.M. dispõe de chalés com ar condicionado e banheiros privativos, além de vestiários extras. O local é cercado e as crianças não saem do acampamento.
                        </CampStayCarouselDetails>
                        <CampStayCarouseImage source={require('../../assets/stayTestImage.png')}/>
                    </CampSatyCarouselItem>
                </CampStayCarouselWrapper>
            </CampStayWrapper>
        
            <MenuWrapper>
                <MenuTitle>
                Cardápio
                </MenuTitle>

                {
                    menuArray.map((item, index) => (
                        <MenuTabs title={item.title} description={item.description} key={index}/>
                        )
                    )
                }
              



            </MenuWrapper>
            
            <PaymentTitle>
            O pacote:
            </PaymentTitle>
            <PaymentWrapper>
                <PaymentConditionsWrapper>
                    <PaymentDateWrapper>
                        <PaymentDateTitle>
                        Até 31/10/2021
                        </PaymentDateTitle>
                        <PaymentParcels>
                        {"\u25CF"} R$ 1800,00 à vista{"\n"}{"\u25CF"} 4 parcelas de R$ 475,00 (ato, 15/11, 15/12 e 15/01/2022)
                        </PaymentParcels>
                    </PaymentDateWrapper>
                    <PaymentDateWrapper>
                        <PaymentDateTitle>
                        Após 31/10/2021
                        </PaymentDateTitle>
                        <PaymentParcels>
                        {"\u25CF"} R$ 1900,00 à vista{"\n"}{"\u25CF"} 4 parcelas de R$ 500,00 (ato, 15/11, 15/12 e 15/01/2022)
                        </PaymentParcels>
                    </PaymentDateWrapper>
                </PaymentConditionsWrapper>
                <BankDetails>
                Dados Bancários - Santander{"\n"}
                Ag. 1725 Cc 01000108-1{"\n"}
                Marcio Marçola PIX CPF 094.291.958-08{"\n"}
                </BankDetails>
                <PromotionWrapper>
                    <PromotionTitle>
                    Promoção:
                    </PromotionTitle>
                    <PromotionDescription>
                    Leve 1 amigo ou parente que nunca foi em nossas temporadas e ganhe R$ 50,00 de crédito acumulativo
                    </PromotionDescription>
                </PromotionWrapper>

            </PaymentWrapper>
        </ContentWrapper>

    </Container>
  );
}