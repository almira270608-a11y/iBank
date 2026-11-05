import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ChangePasswordScreen({ navigation }: { navigation: any }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword1, setShowPassword1] = useState(false); // Әдепкі бойынша жабық тұру үшін false
  const [showPassword2, setShowPassword2] = useState(false);

  const handleChangePassword = () => {
    console.log("Батырма басылды!");
    
    // Парольдердің бос еместігін және сәйкестігін тексеру
    if (!newPassword || !confirmPassword) {
      alert('Барлық өрістерді толтырыңыз!');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Құпиясөздер сәйкес келмейді!');
      return;
    }
    
    console.log('Пароль сәтті өзгертілді!');
    // Келесі бетке өту
    navigation.navigate('PasswordSuccess');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.inner}
      >
        {/* Жоғарығы бөлік (Header) */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Change password</Text>
        </View>

        {/* Форма контейнері */}
        <View style={styles.card}>
          {/* 1-ші өріс: Жаңа пароль */}
          <Text style={styles.label}>Type your new password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword1} // Көзге бақанда ашылу үшін !showPassword1
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="************"
              placeholderTextColor="#343434"
            />
            <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)}>
              <Ionicons 
                name={showPassword1 ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>

          {/* 2-ші өріс: Парольді растау */}
          <Text style={styles.label}>Confirm password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword2} // Көзге басқанда ашылу үшін !showPassword2
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="************"
              placeholderTextColor="#343434"
            />
            <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)}>
              <Ionicons 
                name={showPassword2 ? "eye-outline" : "eye-off-outline"} 
                size={20} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>

          {/* Өзгерту батырмасы (Енді сыртта, дұрыс орнында тұр) */}
          <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Change password</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F5', 
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  inner: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    

  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginLeft: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    marginTop: 10,
  },
  label: {
    fontSize: 12,
    color: '#777',
    marginBottom: 6,
    marginTop: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e1e4e8',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#3023AE',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});