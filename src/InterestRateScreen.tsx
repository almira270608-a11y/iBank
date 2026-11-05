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

export default function InterestRateScreen({ navigation }: { navigation: any }) {
  const interestData = [
    { id: '1', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '2', kind: 'Corporate customers', deposit: '2m', rate: '5.50%' },
    { id: '3', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '4', kind: 'Corporate customers', deposit: '6m', rate: '2.50%' },
    { id: '5', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '6', kind: 'Corporate customers', deposit: '8m', rate: '6.50%' },
    { id: '7', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '8', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '9', kind: 'Corporate customers', deposit: '7m', rate: '6.80%' },
    { id: '10', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
    { id: '11', kind: 'Individual customers', deposit: '12m', rate: '5.90%' },
    { id: '12', kind: 'Individual customers', deposit: '1m', rate: '4.50%' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Хедер */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1D1668" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Interest rate</Text>
      </View>

      {/* Шапка таблицы */}
      <View style={styles.tableHeader}>
        <Text style={[styles.columnHeader, { flex: 2 }]}>Interest kind</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'center' }]}>Deposit</Text>
        <Text style={[styles.columnHeader, { flex: 1, textAlign: 'right' }]}>Rate</Text>
      </View>

      {/* Список строк */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {interestData.map((item, index) => (
          <View key={item.id}>
            <View style={styles.row}>
              <Text style={[styles.rowTextKind, { flex: 2 }]}>{item.kind}</Text>
              <Text style={[styles.rowTextDeposit, { flex: 1, textAlign: 'center' }]}>{item.deposit}</Text>
              <Text style={[styles.rowTextRate, { flex: 1, textAlign: 'right' }]}>{item.rate}</Text>
            </View>
            {index < interestData.length - 1 && <View style={styles.separator} />}
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
    paddingVertical: 16,
  },
  rowTextKind: {
    fontSize: 15,
    color: '#2B2B2B',
    fontWeight: '500',
  },
  rowTextDeposit: {
    fontSize: 15,
    color: '#666666',
  },
  rowTextRate: {
    fontSize: 16,
    color: '#3629B7',
    fontWeight: '700',
  },
  separator: {
    height: 1,
    backgroundColor: '#F5F5F5',
  },
});