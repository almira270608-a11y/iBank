
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SignUpScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [textInput, setTextInput] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = () => {
    if (!name.trim() || !textInput.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    if (!agreeTerms) {
      alert('Please agree to Terms and Conditions');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={30} color="#FFF" />
          <Text style={styles.headerTitle}>Sign up</Text>
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
          <Text style={styles.welcomeTitle}>Welcome to us,</Text>
          <Text style={styles.subtitle}>Hello there, create New account</Text>

          <View style={styles.illustrationWrapper}>
            <Image
              source={require('../assets/My-image.png')}
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor="#A9A9C1"
              value={name}
              onChangeText={setName}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Text input"
              placeholderTextColor="#A9A9C1"
              keyboardType="email-address"
              autoCapitalize="none"
              value={textInput}
              onChangeText={setTextInput}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#A9A9C1"
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

          <View style={styles.termsContainer}>
            <TouchableOpacity
              style={[
                styles.checkbox,
                agreeTerms && styles.checkboxChecked,
              ]}
              onPress={() => setAgreeTerms(!agreeTerms)}
            >
              {agreeTerms && (
                <Ionicons name="checkmark" size={16} color="#FFFFFF" />
              )}
            </TouchableOpacity>

            <Text style={styles.termsText}>
              By creating an account you agree to our{' '}
              <Text style={styles.termsLink}>
                Terms and Conditions
              </Text>
            </Text>
          </View>

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>
              Forgot your password ?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.signInButton,
              name && textInput && password && agreeTerms
                ? styles.activeButton
                : styles.disabledButton,
            ]}
            onPress={handleSignUp}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.signInButtonText,
                name && textInput && password && agreeTerms
                  ? styles.activeButtonText
                  : styles.disabledButtonText,
              ]}
            >
              Sign Up
            </Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text>Have an account? </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.linkText}>Sign In</Text>
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
    marginTop: 10,
    gap: 10,
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
    lineHeight: 28,
    color: '#3629B7',
  },
  subtitle: {
    fontSize: 14,
    color: '#000000',
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
  illustration: {
    width: 220,
    height: 180,
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 4,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#4C35DE',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#4C35DE',
    borderColor: '#4C35DE',
  },
  termsText: {
    flex: 1,
    fontSize: 12,
    color: '#666666',
    lineHeight: 19,
  },
  termsLink: {
    color: '#4C35DE',
    fontWeight: '600',
    textDecorationLine: 'underline',
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
  footer: {
    flexDirection: 'row',
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: '#3D37C4',
    fontWeight: 'bold',
  },
});
