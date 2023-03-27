import React, { useState } from "react";
import { Text, View } from "react-native";
import Header from "../../Components/Header";
import Categories from "../../Components/Categories";
import Commands from "../../Components/Commands";
import {styles} from './styles'
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
const Body = () => {

  const [update, setUpdate] = useState(false)
  return (
    <View style={styles.body}>
        <Header/>   
        <View style={styles.BodySection}>
            <Categories update={update} setUpdate={setUpdate}/>
            <Commands update={update}/>
        </View>
    </View>
  );
};


export default Body;
