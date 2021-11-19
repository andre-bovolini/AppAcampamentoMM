import React from 'react';

import {
Container,
MenuTabWrapper,
MenuTabIconTitle,
MenuTabTitle,
MenuTabIcon,

MenuExpasionTab,
ExpansionTabDesxription,
} from './styles';

import ChevronDown from '../../../assets/chevronDown.svg'
import ChevronUp from '../../../assets/chevronUp.svg'

import BreakfastIcon from '../../../assets/menuIcons/breakfast.svg';
import LunchIcon from '../../../assets/menuIcons/lunch.svg';
import { useState } from 'react/cjs/react.development';

export function MenuTabs(props) {
    const [showHiddenContent, setShowHiddenContent] = useState(false)

    function handleChangeHiddenStatus() {
        setShowHiddenContent(!showHiddenContent)
    }

return (
    <Container>
        <MenuTabWrapper onPress={handleChangeHiddenStatus}>
            <MenuTabIconTitle>
                {
                    (props.title === 'Almoço' || props.title === 'Jantar') ? (<LunchIcon />) : ( <BreakfastIcon />)
                }
               
                <MenuTabTitle>
                    {props.title}
                </MenuTabTitle>
            </MenuTabIconTitle>
            <MenuTabIcon>
            {
                showHiddenContent ? (
                    <ChevronUp />
                ) : (
                    <ChevronDown />
                )
            }
                </MenuTabIcon>
            </MenuTabWrapper>
              {
                  showHiddenContent && (
                    <MenuExpasionTab>
                    <ExpansionTabDesxription>
                     {props.description}
                    </ExpansionTabDesxription>
                    </MenuExpasionTab>
                  )
              }
    </Container>
  );
}