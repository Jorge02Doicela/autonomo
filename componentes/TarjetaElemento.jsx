import { View, Text } from 'react-native';
import estilos from '../estilos/listado.styles';

const TarjetaElemento = ({ nombre }) => {
  return (
    <View style={estilos.tarjeta}>
      <Text style={estilos.textoTarjeta}>{nombre}</Text>
    </View>
  );
};

export default TarjetaElemento;