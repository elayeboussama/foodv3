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
      
       


      <View style={styles.input}>
        <Text style={styles.text}>Logo</Text>
      </View>

      <View>
          <Text style={styles.text}>AppName</Text>
      </View>

      <View>
          <Text style={styles.text}>numtel</Text>
      </View>

      <SafeAreaView style={{ backgroundColor: COLORS.white}}>

            <View style={styles.inputContainer}>
              <Icon name="search" size={28} color="#ffa500" />
              <TextInput
              style={{marginLeft:10, width:100, fontSize: 18}}
              placeholder="Recherche..."/>
            </View>
 
        </SafeAreaView>

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
