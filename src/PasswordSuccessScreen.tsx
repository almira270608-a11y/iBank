import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PasswordSuccessScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#000"  />
        </TouchableOpacity>
      </View>

       <View style={styles.image}>
                 <Image
                 source={require('../assets/Illustration 1.png')}
                 style={styles.image}
                 resizeMode="contain"
        />

        <Text style={styles.title}>Change password successfully!</Text>
        <Text style={styles.subtitle}>
          You have successfully change password. Please use the new password when Sign in.
        </Text>

        
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Ok</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
    gap: 10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  iconContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 600,
    color: '#3629B7',
    textAlign: 'center',
    marginBottom: 18,
    width: 259,
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 14,
    color: '#343434',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#3629B7', // Күлгін түс
    width: 327,
    height: 44,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
   width: 327,
  height: 216,
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  marginVertical: 10,
  marginTop: 110,
  },
});