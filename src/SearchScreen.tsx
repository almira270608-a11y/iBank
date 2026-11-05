import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Platform,
} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function SearchScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 1. Жоғарғы бөлік: Назад (кері қайту) және тақырып */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()} // Алдыңғы бетке қайту
        >
          <Ionicons name="chevron-back" size={24} color="#1E1E1E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* 2. Ортаңғы бөлік: Карточки (Әрқайсысын басқанда жеке бетке өту үшін onPress қосуға болады) */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BranchScreen')} // Мысалы: Branch бетіне өту
        >
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Branch</Text>
            <Text style={styles.cardDescription}>Search for branch</Text>
          </View>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png' }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('InterestRateScreen')}
        >
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Interest rate</Text>
            <Text style={styles.cardDescription}>Search for interest rate</Text>
          </View>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png' }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ExchangeRateScreen')}
        >
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Exchange rate</Text>
            <Text style={styles.cardDescription}>Search for exchange rate</Text>
          </View>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2489/2489756.png' }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.card} 
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ExchangeScreen')}
        >
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Exchange</Text>
            <Text style={styles.cardDescription}>Exchange amount of money</Text>
          </View>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2953/2953361.png' }}
            style={styles.cardImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ScrollView>

      {/* 3. Төменгі навигация панелі (Bottom Nav Bar) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('HomeScreen')} // Басты бетке өту
        >
          <Feather name="home" size={22} color="#8E8E93" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="search" size={18} color="#FFFFFF" />
          <Text style={styles.activeNavText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('MessagesScreen')} // Хабарламаларға өту
        >
          <Feather name="mail" size={22} color="#8E8E93" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('SettingsScreen')} // Баптауларға өту
        >
          <Feather name="settings" size={22} color="#8E8E93" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    paddingRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1E1E1E',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    height: 105,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 13,
    color: '#8E8E93',
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  activeNav: {
    flexDirection: 'row',
    backgroundColor: '#3023AE',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 22,
  },
  activeNavText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 13,
  },
});