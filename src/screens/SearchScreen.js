import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();



const filterResultByPrice  =(price)=>{
return results.filter(result=>{
  return result.price === price
})


}

  return (
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
<ScrollView>
      <ResultsList navigation={navigation} results={filterResultByPrice('$')} title="Cost Effective"/>
      <ResultsList navigation={navigation} results={filterResultByPrice('$$')} title="Bit Pricer"/>
      <ResultsList navigation={navigation} results={filterResultByPrice('$$$')} title="Big Spender"/>
     
   
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
