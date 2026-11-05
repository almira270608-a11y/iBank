import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExchangeRateScreen({ navigation }: { navigation: any }) {
  const exchangeData = [
    { id: '1', country: 'Vietnam', flag: '🇻🇳', buy: '1.403', sell: '1.746' },
    { id: '2', country: 'Nicaragua', flag: '🇳🇮', buy: '9.123', sell: '12.09' },
    { id: '3', country: 'Korea', flag: '🇰🇷', buy: '3.704', sell: '5.151' },
    { id: '4', country: 'Russia', flag: '🇷🇺', buy: '116.0', sell: '144.4' },
    { id: '5', country: 'China', flag: '🇨🇳', buy: '1.725', sell: '2.234' },
    { id: '6', country: 'Portuguese', flag: '🇵🇹', buy: '1.403', sell: '1.746' },
    { id: '7', country: 'Korea', flag: '🇰🇷', buy: '3.454', sell: '4.312' },
    { id: '8', country: 'French', flag: '🇫🇷', buy: '23.45', sell: '34.56' },
    { id: '9', country: 'Nicaragua', flag: '🇳🇮', buy: '263.1', sell: '300.3' },
    { id: '10', country: 'China', flag: '🇨🇳', buy: '1.725', sell: '2.234' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Хедер */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1D1668" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exchange rate</Text>
      </View>

      {/* Шапка таблицы */}
      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Country</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>Buy</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>Sell</Text>
      </View>

      {/* Список строк */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {exchangeData.map((item, index) => (
          <View key={item.id}>
            <View style={styles.row}>
              <View style={[styles.countryContainer, { flex: 2 }]}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={styles.rowTextCountry}>{item.country}</Text>
              </View>
              <Text style={[styles.rowTextValue, { flex: 1, textAlign: 'right' }]}>{item.buy}</Text>
              <Text style={[styles.rowTextValue, { flex: 1, textAlign: 'right' }]}>{item.sell}</Text>
            </View>
            {index < exchangeData.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
  tableHeader: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#FAFAFA',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  columnHeader: {
    fontSize: 13,
    color: '#9E9E9E',
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
    marginRight: 12,
  },
  rowTextCountry: {
    fontSize: 15,
    color: '#2B2B2B',
    fontWeight: '600',
  },
  rowTextValue: {
    fontSize: 15,
    color: '#444444',
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: '#F5F5F5',
  },
});