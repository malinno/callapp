import { store } from '@/store';
import { Provider } from 'react-redux';
import { Stack } from 'expo-router';
import '../global.css'
export default function Layout() {
  return (
    <Provider store={store}> 
      <Stack />
    </Provider>
  )
}
