import { Tabs } from 'expo-router';

export default function AdminLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: 'Admin Home' }} />
    </Tabs>
  );
}
