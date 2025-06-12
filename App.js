import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import PantallaListado from './pantallas/PantallaListado';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F0F4F8' }}>
      <StatusBar style="auto" />
      <PantallaListado />
    </SafeAreaView>
  );
}
