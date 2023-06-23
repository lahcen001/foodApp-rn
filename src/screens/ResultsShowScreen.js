import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default function ResultsShowScreen({navigation}) {
  const [result, setResult]= useState([])
  const id =  navigation.getParam('id');

const getResult = async(id)=>{
  const response  = await yelp.get('/'+id);
  console.log("response :  ", response.data)
   setResult(response.data);
}

useEffect(()=>{
getResult(id);
},[])


  return (
    <View>
    <FlatList
    data={result.photos}
    keyExtractor={(photo)=>photo}
    renderItem={({item})=>{
      return <Image style={styles.image}  source={{uri:item}}/>
    }}
    /> 
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height:200,
    width:300
  }
})