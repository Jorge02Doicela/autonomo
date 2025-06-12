import { StatusBar } from 'expo-status-bar'; // controlar cómo se ve la barra de estado del dispositivo
import { SafeAreaView } from 'react-native';
import PantallaListado from './pantallas/PantallaListado';

export default function App() {
  return (
    //protege los elementos visuales del solapamiento con bordes del sistema
    //para que ocupe toda la pantalla
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F4F8' }}>
      <StatusBar style="auto" />
      <PantallaListado />
    </SafeAreaView>
  );
}
