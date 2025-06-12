import { View, Text, FlatList } from 'react-native';
import TarjetaElemento from '../componentes/TarjetaElemento';
import estilos from '../estilos/listado.styles';

const elementos = [
  { id: '1', nombre: 'Instituciones de la Religión Cristiana' },
  { id: '2', nombre: 'El alma iluminada' },
  { id: '3', nombre: '1984' },
  { id: '4', nombre: 'Romanos' },
  { id: '5', nombre: 'Historia de las Doctrinas Cristianas' },
];

const PantallaListado = () => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.titulo}> Listado de Libros</Text>
      <FlatList
        data={elementos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TarjetaElemento nombre={item.nombre} />}
        contentContainerStyle={estilos.lista}
      />
    </View>
  );
};

export default PantallaListado;
