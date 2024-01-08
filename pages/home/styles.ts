// styles.js
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  header: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nombreEmpresa:{
    color: '#fff',
    fontSize: 24,
  },
  subtitle:{
    color: '#fff',
    fontSize: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    color: '#fff',
    marginBottom: 16,
  },
  routeItemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  routeItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  noRoutesText: {
    color: '#fff',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    width: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  guardarButton: {
    backgroundColor: '#051650',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  guardarButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cerrarModalButton: {
    marginTop: 8,
    backgroundColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  cerrarModalButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subirFotosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  subirFotosButton: {
    flex: 1, // Para que ocupen el mismo espacio y estén uno al lado del otro
    backgroundColor: '#051650',
    borderRadius: 8,
    padding: 12,
    marginRight: 8, // Espacio entre los botones
    alignItems: 'center',
    marginBottom: 8,
  },
  subirFotosButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  datePicker: {
    width: '100%',
    marginBottom: 16,
  },
  
  datePickerInput: {
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
    height: 40,
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  image: {
    width: 100,
    aspectRatio: 1,
    margin: '1.5%',
  },
  buttonDelete: {
    marginLeft: -24,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
