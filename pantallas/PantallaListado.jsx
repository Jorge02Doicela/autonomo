import { View, Text, FlatList } from 'react-native';  //especializado para listas grandes
import TarjetaElemento from '../componentes/TarjetaElemento';  //componente de tarjeta 
import estilos from '../estilos/listado.styles';

//arreglo de objetos 
const elementos = [
  { id: '1', nombre: 'Instituciones de la Religión Cristiana' }, //id requerido por FlatList
  { id: '2', nombre: 'El alma iluminada' },
  { id: '3', nombre: '1984' },
  { id: '4', nombre: 'Romanos' },
  { id: '5', nombre: 'Historia de las Doctrinas Cristianas' },
];

//componente funcional recibe recibe 
const PantallaListado = () => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}> Listado de Libros</Text>
      <FlatList
        data={elementos} //le pasamos el arreglo elementos como fuente de datos
        keyExtractor={(item) => item.id} //función que le dice a FlatList cómo identificar cada ítem (usa item.id).
        renderItem={({ item }) => <TarjetaElemento nombre={item.nombre} />}  //cómo se muestra cada elemento. Aquí se usa nuestro componente TarjetaElemento, pasándole el nombre del libro.
        contentContainerStyle={estilos.lista} //aplica un estilo adicional al contenedor de la lista
      />
    </View>
  );
};

export default PantallaListado;
