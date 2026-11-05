import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SearchScreen({ navigation }: { navigation: any }) {
  const searchItems = [
    {
      id: '1',
      title: 'Branch',
      subtitle: 'Search for branch',
      image: require('../assets/Group 472.png'),
    },
    {
      id: '2',
      title: 'Interest rate',
      subtitle: 'Search for interest rate',
      image: require('../assets/Group 490.png'),
    },
    {
      id: '3',
      title: 'Exchange rate',
      subtitle: 'Search for exchange rate',
      image: require('../assets/Group 477.png'),
    },
    {
      id: '4',
      title: 'Exchange',
      subtitle: 'Exchange amount of money',
      image: require('../assets/Group 478.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Хедер с кнопкой «Назад» и заголовком */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={24} color="#1D1668" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search</Text>
      </View>

      {/* Список карточек */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {searchItems.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.card} 
            activeOpacity={0.8}
            onPress={() => {
              if (item.title === 'Branch') {
                navigation.navigate('BranchSearch');
              } else if (item.title === 'Interest rate') {
                navigation.navigate('InterestRate');
              } else if (item.title === 'Exchange rate') {
                navigation.navigate('ExchangeRate');
              } else if (item.title === 'Exchange') {
                // Если появится экран обмена валюты, добавьте его сюда
                // navigation.navigate('Exchange');
              }
            }}
          >
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
            </View>
            <Image
              source={item.image}
              style={styles.cardImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Нижняя навигационная панель */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color="#8C8C8C" />
        </TouchableOpacity>

        {/* Активная вкладка Search */}
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="search" size={18} color="#fff" />
          <Text style={styles.activeNavText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="#8C8C8C" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#8C8C8C" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    marginRight: 15,
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1668',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 110,
    shadowColor: '#3023AE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardTextContainer: {
    flex: 1,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2B2B2B',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#A0A0A0',
  },
  cardImage: {
    width: 95,
    height: 75,
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    paddingBottom: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  activeNav: {
    flexDirection: 'row',
    backgroundColor: '#3629B7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  activeNavText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 13,
  },
});