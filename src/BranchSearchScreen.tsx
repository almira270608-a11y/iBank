import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

export default function BranchSearchScreen({ navigation }: { navigation: any }) {
  const [searchText, setSearchText] = useState('Bank');

  // Список отделений банка
  const branches = [
    { id: '1', title: 'Bank 1656 Union Street', distance: '50 m', coordinate: { latitude: 40.7128, longitude: -74.0060 } },
    { id: '2', title: 'Bank Secaucus', distance: '1,2 km', coordinate: { latitude: 40.7891, longitude: -74.0565 } },
    { id: '3', title: 'Bank 1657 Riverside Drive', distance: '5,3 km', coordinate: { latitude: 40.7500, longitude: -74.0200 } },
    { id: '4', title: 'Bank Rutherford', distance: '70 m', coordinate: { latitude: 40.8250, longitude: -74.1000 } },
    { id: '5', title: 'Bank 1656 Union Street', distance: '30 m', coordinate: { latitude: 40.7135, longitude: -74.0070 } },
  ];

  return (
    <View style={styles.container}>
      {/* Карта на заднем плане */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.7580,
          longitude: -74.0500,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        {branches.map((branch) => (
          <Marker
            key={branch.id}
            coordinate={branch.coordinate}
          >
            <View style={styles.markerContainer}>
              <Ionicons name="location" size={28} color="#3023AE" />
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Верхний хедер с кнопкой назад и заголовком */}
      <SafeAreaView style={styles.headerSafeArea} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()} 
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#1D1668" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Branch</Text>
        </View>
      </SafeAreaView>

      {/* Выдвижная нижняя панель со списком */}
      <View style={styles.bottomSheet}>
        {/* Ручка для перетаскивания (indicator) */}
        <View style={styles.sheetIndicatorContainer}>
          <View style={styles.sheetIndicator} />
        </View>

        {/* Инпут поиска */}
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#555" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search..."
          />
          <TouchableOpacity onPress={() => setSearchText('')}>
            <Ionicons name="close" size={20} color="#888" />
          </TouchableOpacity>
        </View>

        {/* Список отделений */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        >
          {branches.map((item, index) => (
            <View key={item.id}>
              <TouchableOpacity style={styles.branchItem} activeOpacity={0.7}>
                <View style={styles.branchIconBox}>
                  <Ionicons name="location" size={20} color="#3023AE" />
                </View>
                <View style={styles.branchTextContainer}>
                  <Text style={styles.branchTitle}>{item.title}</Text>
                </View>
                <Text style={styles.branchDistance}>{item.distance}</Text>
              </TouchableOpacity>
              {index < branches.length - 1 && <View style={styles.separator} />}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: width,
    height: height,
    position: 'absolute',
  },
  headerSafeArea: {
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backButton: {
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1D1668',
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.55,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  sheetIndicatorContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  sheetIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D0D0D0',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EFEFEF',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  listContent: {
    paddingBottom: 30,
  },
  branchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  branchIconBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  branchTextContainer: {
    flex: 1,
  },
  branchTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2B2B2B',
  },
  branchDistance: {
    fontSize: 13,
    color: '#888',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F2',
  },
});