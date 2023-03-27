import React, { useEffect } from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from "../../consts/colors";
import ticket from '../../consts/ticket';
import {PrimaryButton} from '../../consts/Button';
import {styles} from './styles'
const CartScreen = ({navigation, update}) => {
     

    // useEffect(()=>{
    //     console.log(ticket)
    // },[update])
  const CartCard = ({item}) => {
    return (
     <View style={styles.cartCard}>
       <View
         style={{
           height: 100,
           marginLeft: 190,
            paddingVertical: 20,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16, marginLeft:-180}}>{item.name}</Text>
          <Text style={{fontSize: 17, fontWeight: 'bold',marginLeft:-180}}>TND {item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };

  
  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold',marginLeft:120}}>Ticket</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={ticket?ticket:""}
        renderItem={({item}) => <CartCard item={item} />}
         ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
         ListFooterComponent={() => (
           <View>
             <View
               style={{
                 flexDirection: 'row',
                 justifyContent: 'space-between',
                 marginVertical: 15,
               }}>
               <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                 Total Price
               </Text>
               <Text style={{fontSize: 18, fontWeight: 'bold'}}> TND 50</Text>
             </View>
             <View style={{marginHorizontal: 30}}>
               <PrimaryButton title="CHECKOUT" />
             </View>
           </View>
         )}
      />
    </SafeAreaView>
  );
};

export default CartScreen;