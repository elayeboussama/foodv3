import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as views from "./../views";
// stacks
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

import CustomDrawer from "../components/customDrawer/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import CompanyStack from "./CompanyStack";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/slicers/AuthSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import ProfileStack from "./ProfileStack";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

 

const Drawer = createDrawerNavigator();

const RootDrawerNavigator = () => {
  const storedToken = useSelector(selectCurrentToken);
 
  
 

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: "#aa18ea",
          drawerActiveTintColor: "#fff",
          drawerInactiveTintColor: "#333",
          drawerLabelStyle: {
            marginLeft: -25,

            fontSize: 15,
          },
        }}
      >
        
        <Drawer.Screen
          name="Ticket"
          component={TicketScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
        
         
        <Drawer.Screen
            name="Table"
            component={TableScreen}
            options={{
              drawerIcon: ({ color }) => (
                <MaterialCommunityIcons name="face-man-profile" size={22} color={color} />
              ),
            }}
          /> 
        
        <Drawer.Screen
          name="Cloture"
          component={ClotureScreen}
          options={{
            drawerIcon: ({ color }) => (
              <MaterialIcons name="event" size={22} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Revenus"
          component={RevenusScreen}
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="globe-outline" size={22} color={color} />
            ),
          }}
        />
       
      </Drawer.Navigator>
    </NavigationContainer>
  );
};




export { RootDrawerNavigator };
