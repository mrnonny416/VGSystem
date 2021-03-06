import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Switch from '../screens/HomePage/switch';
import SetTimePage from '../screens/SetTimePage/setTimePage';
import Humidity from '../screens/HumidityPage/humidity';
import Video from '../screens/VideoPage/video';
import Profile from '../screens/ProfilePage/profile';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Switch"
      screenOptions={{
        tabBarActiveTintColor: '#08823F',
        tabBarStyle: { height: 90, paddingBottom: 30 },
        headerShown: false
      }}


    >
      <Tab.Screen
        name="Switch"
        component={Switch}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="toggle-switch-off" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="SetTimePage"
        component={SetTimePage}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="clock" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Humidity"
        component={Humidity}
        options={{
          tabBarLabel: 'Humidity',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="thermometer-lines" color={color} size={33} />

          ),
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video" color={color} size={33} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={33} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function NavigationMenu() {
  return (
   
      <MyTabs />
   
  );
}
