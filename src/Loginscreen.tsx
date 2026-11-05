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

interface LoginscreenProps {
  navigation?: any;
}

export const Loginscreen: React.FC<LoginscreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSignIn = () => {
    console.log('Logging in:', email);
  };

  const handleBiometricAuth = () => {
    console.log('Biometric auth requested');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar barStyle='light-content' backgroundColor = "#3629B7" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
        >
          <Ionicons name="chevron-back" marginLeft= {4} size={30} color="#FFF" />
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
          bounces={false}
          overScrollMode="never"
        >
          <Text style={styles.welcomeTitle}>Welcome Back</Text>
          <Text style={styles.subtitle}>Hello there, sign in to continue</Text>

          <View style={styles.illustrationWrapper}>
            <View style={styles.circleBackground}>
              <View style={styles.lockIconBox}>
                <Ionicons name="lock-closed" size={30} color="#4C35DE" />
              </View>
            </View>
          <View style={styles.lockCard}>
            <View style={styles.lockIconWrapper}>
              <Ionicons name="lock-closed" size={28} color="#3629B7" />
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
                name={showPassword ? "chevron-up" : "chevron-down"} 
                size={20} 
                color="#C4C4C4" 
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.forgotPassword}
            onPress={() => navigation?.navigate('ForgotPassword')}
          >
            <Text style={styles.forgotText}>Forgot your password ?</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.signInButton, 
              (email && password) ? styles.activeButton : styles.disabledButton
            ]} 
            activeOpacity={0.8}
            onPress={handleSignIn}
          >
            <Text 
              style={[
                styles.signInButtonText,
                (email && password) ? styles.activeButtonText : styles.disabledButtonText
              ]}
            >
              Sign in
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.fingerprintButton}
            onPress={handleBiometricAuth}
          >
            <Ionicons name="finger-print" size={56} color="#4C35DE" />
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'center', alignContent: 'center' }}>
        <Text>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={{ color: '#3D37C4', fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
    paddingTop: Platform.OS === 'android' ? 25 : 0,  },
    header: {
    height: 53,
    marginTop: 42,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 10,
    gap: 10,
    
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 28,
    marginLeft: 5,
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
    alignItems: 'stretch',
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    color: '#3629B7',
    alignSelf: 'flex-start',
    marginTop: 1,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 16,
    color: '#000000',
    marginTop: 6,
    marginBottom: 16,
    textAlign: 'left',
  },
  illustrationWrapper: {
    width: 213,
    height: 165,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    position: 'relative',
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dot: {
    position: 'absolute',
    borderRadius: 50,
  },
  dotPink: { 
    width: 25,                 
    height: 25,                 
    borderRadius: 12.5,         
    backgroundColor: '#FF4267', 
    top: 5,                    
    right: 15,                  
    position: 'absolute', 
  },
  dotPurple: { 
    width: 10,                 
    height: 10,                 
    borderRadius: 10,            
    backgroundColor: '#3629B7', 
    top: 5,                    
    left: 45,                  
    position: 'absolute', 
  },
 dotGreen: {
    width: 10,                  
    height: 10,                 
    borderRadius: 5,            
    backgroundColor: '#52D5BA', 
    top: 60,                    
    left: 0,                   
    position: 'absolute',
  },
  dotYellow: {
    width: 20,                  
    height: 20,                 
    borderRadius: 10,           
    backgroundColor: '#FFAF2A', 
    bottom: 25,                 
    left: 35,                   
    position: 'absolute',
  },
  dotBlue: {
    width: 10,                  
    height: 10,                 
    borderRadius: 5,           
    backgroundColor: '#0890FE', 
    bottom: 33,                 
    right: 30,                  
    position: 'absolute',
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
  lockCard: {
    width: 50,
    height: 73,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    position: 'absolute',
  },
  lockIconWrapper: {
    width: 50,
    height: 46.09,
    justifyContent: 'center',
    alignItems: 'center',
  
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
    marginBottom: 1,
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
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 'auto',
    justifyContent: 'center',
  },
  footerText: {
    color: '#7F7F7F',
    fontSize: 14,
  },
  signUpText: {
    color: '#4C35DE',
    fontSize: 14,
    fontWeight: 'bold',
  },
});