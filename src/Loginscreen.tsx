
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      alert('Please enter email and password');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor="#3629B7" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={30} color="#FFF" />
          <Text style={styles.headerTitle}>Sign in</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.welcomeTitle}>Welcome Back</Text>
          <Text style={styles.subtitle}>Hello there, sign in to continue</Text>

          <View style={styles.illustrationWrapper}>
            <View style={styles.circleBackground}>
              <View style={styles.lockIconBox}>
                <Ionicons name="lock-closed" size={30} color="#4C35DE" />
              </View>
            </View>

            <View style={[styles.dot, styles.dotPurple]} />
            <View style={[styles.dot, styles.dotPink]} />
            <View style={[styles.dot, styles.dotGreen]} />
            <View style={[styles.dot, styles.dotYellow]} />
            <View style={[styles.dot, styles.dotBlue]} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Text input"
              placeholderTextColor="#C4C4C4"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#C4C4C4"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#C4C4C4"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>Forgot your password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.signInButton,
              email && password ? styles.activeButton : styles.disabledButton,
            ]}
            onPress={handleSignIn}
            activeOpacity={0.8}
          >
            <Text style={[
              styles.signInButtonText,
              email && password ? styles.activeButtonText : styles.disabledButtonText,
            ]}>
              Sign in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.fingerprintButton}>
            <Ionicons name="finger-print" size={56} color="#4C35DE" />
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    height: 53,
    marginTop: 42,
    paddingHorizontal: 14,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 24,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#3629B7',
  },
  subtitle: {
    fontSize: 14,
    color: '#000',
    marginTop: 6,
    marginBottom: 16,
  },
  illustrationWrapper: {
    width: 213,
    height: 165,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  circleBackground: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#E5E2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIconBox: {
    width: 54,
    height: 64,
    backgroundColor: '#FFF',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  dot: {
    position: 'absolute',
    borderRadius: 50,
  },
  dotPink: {
    width: 25,
    height: 25,
    backgroundColor: '#FF4267',
    top: 5,
    right: 15,
  },
  dotPurple: {
    width: 10,
    height: 10,
    backgroundColor: '#3629B7',
    top: 5,
    left: 45,
  },
  dotGreen: {
    width: 10,
    height: 10,
    backgroundColor: '#52D5BA',
    top: 60,
    left: 0,
  },
  dotYellow: {
    width: 20,
    height: 20,
    backgroundColor: '#FFAF2A',
    bottom: 25,
    left: 35,
  },
  dotBlue: {
    width: 10,
    height: 10,
    backgroundColor: '#0890FE',
    bottom: 33,
    right: 30,
  },
  inputContainer: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#E5E2FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginTop: 16,
    position: 'relative',
  },
  input: {
    fontSize: 15,
    color: '#333',
    width: '90%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 24,
  },
  forgotText: {
    color: '#C4C4C4',
    fontSize: 13,
  },
  signInButton: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  disabledButton: {
    backgroundColor: '#F2EFFD',
  },
  activeButton: {
    backgroundColor: '#4C35DE',
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#BDBDBD',
  },
  activeButtonText: {
    color: '#FFFFFF',
  },
  fingerprintButton: {
    width: 95,
    height: 95,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#3D37C4',
    fontWeight: 'bold',
  },
});
