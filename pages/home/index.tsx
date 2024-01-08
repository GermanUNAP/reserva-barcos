import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Modal,
  Button,
  Image,
} from 'react-native';
import styles from './styles'; // Asegúrate de importar tus estilos personalizados
import Icon from 'react-native-vector-icons/FontAwesome';
import { FIRESTORE_DB } from '../../services/FirebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import DeleteButton from '../../componnents/delete-button';
import { getStorage, ref, getDownloadURL, uploadBytes } from 'firebase/storage'; // Importa Firebase Storage
import Toast from 'react-native-root-toast';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import RouteDetail from '../../componnents/route-detail';



const auth = getAuth();

const Home = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showEmpresaModal, setShowEmpresaModal] = useState(false);
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [lugares, setLugares] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const checkAuthentication = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const docRef = doc(FIRESTORE_DB, 'usuarios', uid);

        try {
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            // Almacena la información del usuario en el estado
            setUserData(docSnap.data());
            setIsLoading(false);

            // Si el usuario es de tipo 'Empresa', obtenemos sus rutas
            if (docSnap.data().accountType === 'Empresa') {
              const userRoutesQuery = query(
                collection(FIRESTORE_DB, 'routes'),
                where('user', '==', auth.currentUser.uid)
              );

              const unsubscribe = onSnapshot(userRoutesQuery, (snapshot) => {
                const userRoutesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setRoutes(userRoutesData);
                console.log(userRoutesData);
              });

              return () => unsubscribe();
            }
          } else {
            console.log('No se encontraron datos de usuario');
          }
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        } finally {
          setLogged(true);
        }
      } else {
        setLogged(false);
        setIsLoading(false);
      }
    };

    const stateAuth = onAuthStateChanged(auth, checkAuthentication);

    return () => stateAuth(); // Limpia el listener cuando el componente se desmonta
  }, []);



  const renderRouteItem = ({ item }) => (
    <TouchableOpacity
      style={styles.routeItemContainer}
      onPress={() => navigation.navigate('DetalleRuta', { routeId: item.id })}
    >
      <Text style={styles.routeItemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );



  const handleSeleccionarDeGaleria = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.65,
    });

    if (!result.canceled) {
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    }
  };
  
  const deleteImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  async function uploadImageAsync(uri) {
    const blob = await fetch(uri).then((response) => response.blob());
    const storage = getStorage();
    const storageRef = ref(storage, `routes/${auth.currentUser.uid + Date.now()}`);

    await uploadBytes(storageRef, blob);

    return await getDownloadURL(storageRef);
  }
  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [3, 4],
      quality: 0.65,
    });

    if (!result.canceled) {
      setSelectedImages([...selectedImages, result.assets[0].uri]);
    }
  };
  const publishAsync = async () => {
    setShowEmpresaModal(false);
    const id = auth.currentUser.uid + Timestamp.now();
    const dateNow = Timestamp.now();
    

    const data = {
      user: auth.currentUser.uid,
      description: descripcion,
      empresa: userData.name,
      profilePhoto: userData.photoURL,
      date: dateNow,
      views: 0,
      precio: precio,
      lugares: lugares,
      photoContent: [],
    };

    try {
      FIRESTORE_DB.collection("routes").doc(id).set(data);
      for (const image of selectedImages) {
        const url = await uploadImageAsync(image);
        data.photoContent = [...data.photoContent || [], url];
      }
      if( data.photoContent.length === selectedImages.length ) {
        const docRef = doc(FIRESTORE_DB, 'routes', id);
        await updateDoc(docRef, data); 
      } 
      setDescripcion('');
      setSelectedImages([]);
      setPrecio('');
      setLugares(''); 
      Toast.show(`Se publicó correctamente`, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
      })
      navigation.navigate('Home');
      
    } catch (error) {
      console.error('Error al publicar:', error);

    }
  };

  const fetchResevations = () => {

  }

  return (
    <>
      <StatusBar />
      <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#051650' }}>
        <SafeAreaView style={styles.container}>
          {isLoading ? (
            <ActivityIndicator size="large" color={'#ffffff'} />
          ) : (
            <>
              {userData?.accountType === 'Empresa' ? (
                <>
                  <Text style={styles.nombreEmpresa}>Bienvenido {userData.name}</Text>
                  <Button
                    title="Ingresar Ruta"
                    onPress={() => setShowEmpresaModal(true)}
                    color="#000000"
                  />
                  <Text style={styles.subtitle}>Proximas reservas:</Text>
                  {routes.map((route) => (
                    <RouteDetail
                      key={route.id}
                      routeData={route}
                      onEditPress={() => {
                        // Lógica para editar la ruta
                      }}
                      onDeletePress={() => {
                        // Lógica para eliminar la ruta
                      }}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View style={styles.headerContainer}>
                    <Text style={styles.header}>Explora las Rutas</Text>
                    <TextInput
                      style={styles.searchInput}
                      placeholder="Buscar..."
                      placeholderTextColor="#fff"
                      onChangeText={(text) => setSearchTerm(text)}
                      value={searchTerm}
                    />
                  </View>
                </>
              )}
            </>
          )}
        </SafeAreaView>
      </ScrollView>
      <Modal animationType="slide" transparent={true} visible={showEmpresaModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Ingresar Ruta</Text>

            <TextInput
              style={styles.input}
              placeholder="Descripción"
              value={descripcion}
              onChangeText={(text) => setDescripcion(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Precio (S/.)"
              value={precio}
              onChangeText={(text) => setPrecio(text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Lugares"
              value={lugares}
              onChangeText={(text) => setLugares(text)}
            />

            <View style={styles.subirFotosContainer}>
              <TouchableOpacity style={styles.subirFotosButton} onPress={handleSeleccionarDeGaleria}>
                <Icon name="image" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.subirFotosButton} onPress={takePhoto}>
                <Icon name="camera" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
              {selectedImages.map((image, index) => (
                <View key={index} style={styles.imageRow}>
                  <Image
                    resizeMode="cover"
                    resizeMethod="scale"
                    style={styles.image}
                    source={{ uri: image }}
                  />
                  <View style={styles.buttonDelete}>
                    <DeleteButton onPress={() => deleteImage(index)} />
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.guardarButton} onPress={()=> publishAsync()}>
              <Text style={styles.guardarButtonText}>Guardar Ruta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cerrarModalButton}
              onPress={() => setShowEmpresaModal(false)}
            >
              <Text style={styles.cerrarModalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Home;
