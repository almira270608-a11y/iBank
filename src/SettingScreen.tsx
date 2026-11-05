import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SettingScreen({ navigation }: { navigation: any }) {
  const menuItems = [
    { id: '1', title: 'Password' },
    { id: '2', title: 'Touch ID' },
    { id: '3', title: 'Languages' },
    { id: '4', title: 'App information' },
    { id: '5', title: 'Customer care', value: '19008989' },
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Верхний синий фон */}
      <View style={styles.topBlueHeader}>
        <SafeAreaView edges={['top']}>
          <View style={styles.headerBar}>
            <TouchableOpacity 
              onPress={() => navigation.goBack()} 
              style={styles.backButton}
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Setting</Text>
          </View>
        </SafeAreaView>
      </View>

      {/* Белый скругленный контейнер */}
      <View style={styles.whiteCard}>
        {/* Аватар профиля с выступом вверх */}
        <View style={styles.avatarWrapper}>
          <Image 
            source={require('../assets/шрек.png')} 
            style={styles.avatarImage} 
          />
          <Text style={styles.userName}>Push Puttichai</Text>
        </View>

        {/* Список пунктов настроек */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        >
          {menuItems.map((item) => (
            <TouchableOpacity 
              key={item.id}
              style={styles.menuRow} 
              activeOpacity={0.7}
              onPress={() => {
                if (item.title === 'Languages') {
                  navigation.navigate('Language');
                }
              }}
            >
              <Text style={styles.menuTitle}>{item.title}</Text>
              
              <View style={styles.menuRightGroup}>
                {item.value ? (
                  <Text style={styles.menuValue}>{item.value}</Text>
                ) : null}
                <Ionicons name="chevron-forward" size={18} color="#D1D1D6" />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Нижняя навигация */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="home-outline" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => navigation.navigate('Search')}
        >
          <Ionicons name="search-outline" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={24} color="#A0A0A0" />
        </TouchableOpacity>

        {/* Активная вкладка Setting */}
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="settings" size={18} color="#FFFFFF" />
          <Text style={styles.activeNavText}>Setting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBlueHeader: {
    backgroundColor: '#3023AE',
    height: 180,
    paddingHorizontal: 20,
  },
  headerBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  whiteCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: -40,
    paddingHorizontal: 24,
  },
  avatarWrapper: {
    alignItems: 'center',
    marginTop: -50,
    marginBottom: 25,
  },
  avatarImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    backgroundColor: '#EAEAEA',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#3023AE',
    marginTop: 12,
  },
  listContainer: {
    paddingBottom: 20,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F3',
  },
  menuTitle: {
    fontSize: 16,
    color: '#2C2C2E',
    fontWeight: '600',
  },
  menuRightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuValue: {
    fontSize: 14,
    color: '#8E8E93',
    marginRight: 6,
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F2F2F7',
    paddingBottom: 10,
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  activeNav: {
    flexDirection: 'row',
    backgroundColor: '#3023AE',
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