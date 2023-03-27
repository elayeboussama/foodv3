import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Dimensions,TouchableOpacity, Alert, Modal} from "react-native";
import {styles} from './styles'
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const TicketModal = ({stateModalTicket, setStateModalTicket}) =>{
    
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={stateModalTicket}
        onRequestClose={() => { setStateModalTicket(false)}}
         >
         <AntDesign
                  onPress={() => setStateModalTicket(false) }
                  name="closecircleo"
                  size={40}
                  color="#DF0F0F"
                  style={{margin:10 }}
              />
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World! TicketModal</Text>
                    
                  </View>
                </View>

      </Modal>
    )
}

export default TicketModal