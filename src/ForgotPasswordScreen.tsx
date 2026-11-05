import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ForgotPasswordScreenProps {
  navigation?: any;
}

export const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({ navigation }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [code, setCode] = useState<string>('');

  const phoneInputRef = useRef<TextInput>(null);
  const codeInputRef = useRef<TextInput>(null);

  useEffect(() => {
    
    if (step === 1) {
      setTimeout(() => phoneInputRef.current?.focus(), 100);
    } else {
      setTimeout(() => codeInputRef.current?.focus(), 100);
    }
  }, [step]);

  const handleSendCode = () => {
    if (phoneNumber.trim()) {
      setStep(2);
    }
  };

  const handleResendCode = () => {
    console.log('Resending code...');
  };

  const handleChangePassword = () => {
    if (code.trim()) {
      navigation?.navigate('ChangePassword');
    }
  };

  const handleChangePhoneNumber = () => {
    setStep(1);
    setCode('');
  };

  const isStep1Active = phoneNumber.trim().length > 0;
  const isStep2Active = code.trim().length > 0;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            if (step === 2) {
              setStep(1);
            } else {
              navigation?.goBack();
            }
          }}
          activeOpacity={0.7}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
          <Text style={styles.headerTitle}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {step === 1 ? (
  
            <View style={styles.card}>
              <Text style={styles.label}>Type your phone number</Text>

              <View style={styles.inputContainer}>
                <TextInput
                  ref={phoneInputRef}
                  style={styles.input}
                  placeholder="(+84)"
                  placeholderTextColor="#C4C4C4"
                  value={phoneNumber}
                  onChangeText={setPhoneNumber}
                  keyboardType="number-pad"
                  autoFocus={true}
                />
              </View>

              <Text style={styles.descriptionText}>
                We texted you a code to verify your phone number
              </Text>

              <TouchableOpacity
                style={[
                  styles.mainButton,
                  isStep1Active ? styles.activeButton : styles.disabledButton,
                ]}
                activeOpacity={0.8}
                disabled={!isStep1Active}
                onPress={handleSendCode}
              >
                <Text
                  style={[
                    styles.mainButtonText,
                    isStep1Active ? styles.activeButtonText : styles.disabledButtonText,
                  ]}
                >
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          ) : (

            <>
              <View style={styles.card}>
                <Text style={styles.label}>Type a code</Text>

                <View style={styles.codeRow}>
                  <View style={[styles.inputContainer, styles.codeInputBox]}>
                    <TextInput
                      ref={codeInputRef}
                      style={styles.input}
                      placeholder="Code"
                      placeholderTextColor="#C4C4C4"
                      value={code}
                      onChangeText={setCode}
                      keyboardType="number-pad"
                      autoFocus={true}
                    />
                  </View>

                  <TouchableOpacity
                    style={styles.resendButton}
                    onPress={handleResendCode}
                    activeOpacity={0.8}
                  >
                    <Text style={styles.resendButtonText}>Resend</Text>
                  </TouchableOpacity>
                </View>

                <Text style={styles.descriptionText}>
                  We texted you a code to verify your phone number{' '}
                  <Text style={styles.phoneHighlight}>
                    {phoneNumber || '(+84) 0398829xxx'}
                  </Text>
                </Text>

                <Text style={styles.subDescriptionText}>
                  This code will expired 10 minutes after this message. If you don't get a message.
                </Text>

                <TouchableOpacity
                  style={[
                    styles.mainButton,
                    isStep2Active ? styles.activeButton : styles.disabledButton,
                  ]}
                  activeOpacity={0.8}
                  disabled={!isStep2Active}
                  onPress={handleChangePassword}
                >
                  <Text
                    style={[
                      styles.mainButtonText,
                      isStep2Active ? styles.activeButtonText : styles.disabledButtonText,
                    ]}
                  >
                    Change password
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.changePhoneButton}
                onPress={handleChangePhoneNumber}
                activeOpacity={0.7}
              >
                <Text style={styles.changePhoneText}>Change your phone number</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F5', 
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    height: 50,
    backgroundColor: '#F3F3F5',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 12,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    color: '#8E8E93',
    marginBottom: 12,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  codeInputBox: {
    flex: 1,
  },
  codeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    fontSize: 15,
    color: '#000000',
    width: '100%',
  },
  resendButton: {
    backgroundColor: '#3023AE', 
    height: 48,
    paddingHorizontal: 22,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  descriptionText: {
    fontSize: 14,
    color: '#3A3A3C',
    lineHeight: 20,
    marginTop: 16,
  },
  phoneHighlight: {
    color: '#3023AE',
    fontWeight: '700',
  },
  subDescriptionText: {
    fontSize: 13,
    color: '#8E8E93',
    lineHeight: 18,
    marginTop: 8,
    marginBottom: 20,
  },
  mainButton: {
    width: '100%',
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#F2F2F7',
  },
  activeButton: {
    backgroundColor: '#3023AE',
  },
  mainButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  disabledButtonText: {
    color: '#C7C7CC',
  },
  activeButtonText: {
    color: '#FFFFFF',
  },
  changePhoneButton: {
    marginTop: 24,
    alignSelf: 'center',
  },
  changePhoneText: {
    color: '#3023AE',
    fontSize: 14,
    fontWeight: '600',
  },
});