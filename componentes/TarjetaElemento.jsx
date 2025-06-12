import { View, Text } from 'react-native'; //agrupar elementos
import estilos from '../estilos/listado.styles';

//Componente funcional, recibe como propiedad (prop) el nombre de un libro
const TarjetaElemento = ({ nombre }) => {
  return (

    //Tarjeta visual con texto dentro 
    <View style={estilos.tarjeta}>
      <Text style={estilos.textoTarjeta}>{nombre}</Text>
    </View>
  );
};

//Para usar el componente en otras partes del proyecto
export default TarjetaElemento;