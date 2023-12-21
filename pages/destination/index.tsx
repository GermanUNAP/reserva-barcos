import React, { useState, useEffect } from 'react';
import { Image, Text, View, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SearchBar } from '@rneui/themed';
import styles from './styles';
import Button from '../../componnents/button'; 


const Destination = (props) => {

  const { navigation } = props;
  const [search, setSearch] = useState('');
  const [ isLoading, setIsLoading] = useState(true);
  const [filteredPlaces, setFilteredPlaces] = useState(null);
    const [ places, setPlaces ] = useState(null);

  const goToback = () => {
    navigation.goBack();
  };
  const goRegister = () =>{
    navigation.navigate('Register');
  };
  const goChangePassword = () =>{
    navigation.navigate('ChangePassword');
  };

  const updateSearch = (newSearch) => {
    setIsLoading(true);
    setSearch(newSearch);
  
    if (!newSearch) {
      setFilteredPlaces(places);
      setIsLoading(false);
      return;
    }
  
    const searchTerms = newSearch.trim().toLowerCase().split(/\s+/);
  
    const filtered = places.filter((publication) => {
      const publicationFields = [
        publication.data.name,
        publication.data.description,
        publication.data.type,
        publication.data.city
      ];
  
      // Calcular el número de coincidencias para cada término de búsqueda
      const matchCounts = searchTerms.map((term) =>
        publicationFields.reduce((count, field) => {
          if (field && field.toLowerCase().includes(term)) {
            return count + 1;
          }
          return count;
        }, 0)
      );
  
      // Sumar el número total de coincidencias para todas los términos de búsqueda
      const totalMatches = matchCounts.reduce((total, count) => total + count, 0);
  
      return totalMatches > 0;
    });
  
    filtered.sort((a, b) => {
      const matchesA = (a.matchCounts || []).reduce((total, count) => total + count, 0);
      const matchesB = (b.matchCounts || []).reduce((total, count) => total + count, 0);
      return matchesB - matchesA;
    });
  
    setFilteredPlaces(filtered);
    setIsLoading(false);
  };
  

  return (
    <>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Lugares que puedes visitar</Text>
      <SearchBar
          placeholder="Buscar..."
          onChangeText={updateSearch}
          value={search}
          inputContainerStyle={{ backgroundColor: 'white', height: 36 }}
          containerStyle={{ backgroundColor: '#000000', height: 50, paddingTop: 6 }}
        />
        
    </ScrollView>
    </>
  );
};

export default Destination;