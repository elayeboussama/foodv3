import React, { useEffect } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Dimensions,TouchableOpacity} from "react-native";
import {styles} from './styles'
// import { Button } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';
//import { MaterialIcons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { FlatList, ScrollView,TextInput,TouchableHighlight } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
import Burgers from '../../consts/burgers';
import Sandwichs from '../../consts/sandwichs';
const {width} = Dimensions.get('screen');
const cardWidth = width/2 -20;


 const ListCategories = ({setData}) => {
   const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

   const HandleChange=(categoryName,index)=>{
    setSelectedCategoryIndex(index) 
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    console.log(categoryName)
    console.log("vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv")
    switch(categoryName){
      case "Pizza": setData(foods);break;
      case "Burger": setData(Burgers);break;
      case "Sandwich": setData(Sandwichs);break;
      default:
        setData(foods);break;
    }
   }

   return (
     <ScrollView 
     horizontal
     showsVerticalScrollIndicator={false}
     contentContainerStyle={styles.categoriesListContainer}>
       {categories.map((category,index) => (
         <TouchableOpacity key = {index} activeOpacity={0.8} onPress={() => HandleChange(category.name,index)}>
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

  const [data, setData]=React.useState(foods);
  // useEffect(()=>{
  //   console.log(data);
  // },[data])
  
  return (
    <View style={styles.Categories}> 
    
      <View style={styles.cat}>
        <ListCategories setData={setData} /> 
      </View>
      
      <View style={styles.souscat}>
        <FlatList
        contentContainerStyle = {
          {width:"80%", height:"auto", alignSelf:"center" } }
        style={styles.souscatList}
        showsVerticalScrollIndicator={false}
        numColumns={4}
        data={data?data:data}
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
