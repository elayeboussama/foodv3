import React from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Dimensions} from "react-native";
import {styles} from './styles'
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
//import { MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView,TextInput,TouchableHighlight,TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width/2 -20;


 const ListCategories = () => {
   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
   return (
     <ScrollView 
     horizontal
     showsVerticalScrollIndicator={false}
     contentContainerStyle={styles.categoriesListContainer}>
       {categories.map((category,index) => (
         <TouchableOpacity key = {index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
           <View style={{
             backgroundColor:selectedCategoryIndex == index
             ? COLORS.primary 
             : COLORS.secondary,
             ...style.categoryBtn
           }}>
             <View style={styles.categoryBtnImgCon}>
               <Image source={category.image}
               style ={styles.ImgCat}
                />
             </View>
             <Text style= {{
                 fontSize :17,
                 fontWeight:'bold',
                 marginLeft: 10,
                 color : 
                 selectedCategoryIndex == index
                 ? COLORS.white
                 : COLORS.primary,
             }}>
                {category.name}
             </Text>
           </View>
         </TouchableOpacity>
       ))}
     </ScrollView>
   )
 };


 const Card = ({food}) => {
   return (
     <View style ={style.card}>
      <View>
        <Image source={food.image} style={{height:120, width:120, marginLeft:15,}}     />
      </View> 
      <View style={{marginHorizontal:5}}>
        <Text style={{fontSize:16, fontWeight: 'bold'}}> {food.name}</Text> 
      </View>
      <View style={{marginTop:10,marginHorizontal:20,flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontSize:14, fontWeight: 'bold',}}> {food.price} TND</Text>
        <View style={styles.addToCartBTn}>
          <Icon name="add" size={20} color={COLORS.white}/>
        </View>
      </View>
     </View>
   );
 };

const Categories = () => {
  
  return (
    <View style={styles.Categories}> 
    
      <View style={styles.cat}>
        <ListCategories/> 
      </View>
      
      <View style={styles.souscat}>
        <FlatList
        contentContainerStyle = {
          {width:"80%", height:"auto", alignSelf:"center" } }
        style={styles.souscatList}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        data={foods}
        renderItem={({item}) => <Card food ={item} /> }/> 
      </View>  

    </View>

    
  );
};
const style = StyleSheet.create({
categoryBtn: {
  height: 55,
  width: 200,
  marginRight: 7,
  borderRadius: 30,
  alignItems: 'center',
  paddingHorizontal: 5,
  flexDirection: 'row',
  
},
card: {
  height: 200,
  width: 150,
  marginHorizontal:15,
  marginVertical: 15, 
  borderRadius: 15,
  backgroundColor: COLORS.secondary,
  //marginLeft:10,

  
},
});
export default Categories;
