import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Template } from '../screens/Template';
import { TravelDetails } from '../screens/TravelDetails';
import { CampDetails } from '../screens/CampDetails';
import { Homepage } from '../screens/Homepage';
import { PhotosPage } from '../screens/PhotosPage';
import { FormPage } from '../screens/FormPage';

import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';

import CampIcon from '../assets/campIcon.svg'
import TravelLugagge from '../assets/travelLuggage.svg'
import PhotoIcon from '../assets/photoIcon.svg'
import FormIcon from '../assets/formIcon.svg'
import HomeIcon from '../assets/homeIcon.svg'

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {   
                elevation: 0,
                backgroundColor: '#185D62',
                marginTop: -15,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderWidth: 0,
                height: 90,
                ...styles.shadow
            }
        }}
    >
      <Tab.Screen name="CampDetails" component={CampDetails} options={{
          tabBarIcon: ({focused}) => (
              <View style={focused ? styles.foccusedView : styles.unfoccusedView}>
                  <CampIcon     
                    fill={focused ? '#FFFFFF' : '#1F2A5A'}
                  />
              </View>
          )
      }}/>
      <Tab.Screen name="TravelDetails" component={TravelDetails}  options={{
          tabBarIcon: ({focused}) => (
              <View style={focused ? styles.foccusedView : styles.unfoccusedView}>
                  <TravelLugagge     
                    fill={focused ? '#FFFFFF' : '#1F2A5A'}
                  />
              </View>
          )
      }}/>
      <Tab.Screen name="Homepage" component={Homepage}   options={{
        tabBarIcon: ({focused}) => (
            <ImageBackground source={ focused ?  require('../assets/darkChameleon.png') : require('../assets/chameleonLogo.png')} style={styles.centralLogo}>
                <HomeIcon 
                fill={focused ? '#FFFFFF' :  '#1F2A5A'}
                />
            </ImageBackground>
        )
    }}/>
      <Tab.Screen name="PhotosPage" component={PhotosPage} 
       options={{
        tabBarIcon: ({focused}) => (
            <View style={focused ? styles.foccusedView : styles.unfoccusedView}>
                <PhotoIcon     
                  fill={focused ? '#FFFFFF' : '#1F2A5A'}
                />
            </View>
        )
    }}/>
      <Tab.Screen name="FormPage" component={FormPage} 
       options={{
        keyboardHidesTabBar: true,
        tabBarIcon: ({focused}) => (
            <View style={focused ? styles.foccusedView : styles.unfoccusedView}>
                <FormIcon     
                  fill={focused ? '#FFFFFF' : '#1F2A5A'}
                  style={{marginLeft: 7}}
                />
            </View>
        )
    }}/>
    </Tab.Navigator>
  );

 
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000000',
        textShadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 15
    },
    foccusedView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1F2A5A',
        borderRadius: 25,
        borderColor: '#FFFFFF',
        borderWidth: 0.5,
    },
    unfoccusedView: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.32)',
        borderRadius: 25,
        borderColor: '#FFFFFF',
        borderWidth: 1,
    },
    centralLogo: {
        width: 90,
        height: 90,
        marginTop: -50,

        alignItems: 'center',
        paddingTop: 8,
    }
})