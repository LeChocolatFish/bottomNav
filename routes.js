import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, MaterialComuntyicons} from "@expo/vector-icons";

import Home from './Home.js';
import Playlist from './Playlist.js';
import Profile from './Profile.js';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                activeTintColor: '#ffffff'
            }}
            >
            <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='home' size={size}/>
                ),
            }}
            />
            <Tab.Screen
            name="Playlist"
            component={Playlist}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='antenna' size={size}/>
                ),
            }}
            />
            <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon:({coler,size}) =>(
                    <MaterialCommunityIcons name='account' size={size}/>
                ),
            }}
            />
        </Tab.Navigator>
    );
}