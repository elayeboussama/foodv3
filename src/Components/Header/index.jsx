import React from "react";
import { Text, View,SafeAreaView } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import COLORS from "../../consts/colors";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity,TextInput } from "react-native-gesture-handler";
const Header = () => {
  return (
    <View style={styles.header}>
      
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View
          style={{
          marginTop: -30,
          flexDirection: 'row',
          paddingHorizontal: 100,
          marginRight:225,
          marginLeft: -75, }}>
            
          <View style={styles.inputContainer}>
            <Icon name="search" size={28} color="#ffa500" />
            <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Recherche..."/>
          </View>
          </View>
        </SafeAreaView>


      <View style={styles.input}>
        <Text style={styles.text}>Logo</Text>
        </View>

      <View>
          <Text style={styles.text}>AppName</Text>
      </View>

      <View>
          <Text style={styles.text}>numtel</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btn}>
        <Icon
                name="rotate-right"
                size={15}
                color="white"
              />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
      </TouchableOpacity>
    </View>
      <View>
          <Text style={styles.textBold}>Salut, Caissier</Text>
        </View>
      </View>
  );
};


export default Header;
