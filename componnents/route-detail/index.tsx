import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const RouteDetail = ({ routeData, onEditPress, onDeletePress }) => {
  const { photoContent, description, lugares, precio, views } = routeData;

  const renderImageItem = ({ item }) => (
    <Image style={styles.carouselImage} source={{ uri: item }} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={photoContent}
          renderItem={renderImageItem}
          sliderWidth={styles.carouselSliderWidth.width}
          itemWidth={styles.carouselItemWidth.width}
          loop
          autoplay
        />
      </View>

      <View style={styles.routeInfoContainer}>
        <Text style={styles.routeDescription}>{description}</Text>
        <Text style={styles.routeDetails}>{`Lugares: ${lugares}`}</Text>
        <Text style={styles.routeDetails}>{`Precio: ${precio}`}</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.viewsContainer}>
          <Text style={styles.viewsText}>{`Vistas: ${views}`}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editButton} onPress={onEditPress}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.deleteButton} onPress={onDeletePress}>
            <Text style={styles.buttonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#ffffff',
  },
  carouselContainer: {
    height: 200,
    marginTop: 12,
    marginBottom: 4,
  },
  carouselSliderWidth: StyleSheet.flatten({
    width: 300,
  }),
  carouselItemWidth: StyleSheet.flatten({
    width: 200,
  }),
  carouselImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  routeInfoContainer: {
    padding: 10,
    
},
  routeDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#ffffff',
  },
  routeDetails: {
    fontSize: 16,
    color: '#ffffff',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  viewsContainer: {
    flex: 1,
  },
  viewsText: {
    fontSize: 16,
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RouteDetail;
