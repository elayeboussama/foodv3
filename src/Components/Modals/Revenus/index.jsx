import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Dimensions,TouchableOpacity, Alert, Modal} from "react-native";
import {styles} from './styles'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const RevenusModal = ({stateModalRevenus, setStateModalRevenus}) =>{

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={stateModalRevenus}
        onRequestClose={() => { setStateModalRevenus(false)}}
         >

           <AntDesign
                  onPress={() => setStateModalRevenus(false) }
                  name="closecircleo"
                  size={40}
                  color="#DF0F0F"
                  style={{margin:10 }}
              />
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World! RevenusModal</Text>
                    
                  </View>
                </View>


      </Modal>
    )
}

export default RevenusModal