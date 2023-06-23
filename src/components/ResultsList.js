import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultsDetail from './ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const  ResultsList = ({title, results, navigation})=> {
    

  if(!results.length){
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => {
          return <TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', {id:item.id})}>
          <ResultsDetail result={item}/>
          </TouchableOpacity>
          ;
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    title:{
          fontSize:18,
          fontWeight:'bold',
          marginLeft:15
    },
    container:{
marginBotton:10
    }
});

export default withNavigation(ResultsList);