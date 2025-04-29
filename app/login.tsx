import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { login } from '@/services/authService'; // Đảm bảo có service login
import { router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { token, role } = await login({ email, password });
      if (role === 'admin') {
        router.replace('/(admin)/dashboard'); 
      } else if (role === 'manager') {
        router.replace('/(manager)/dashboard');
      } else if (role === 'agent') {
        router.replace('/(agent)/dashboard'); 
      }
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} autoCapitalize="none" />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
