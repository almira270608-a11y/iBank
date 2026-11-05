import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExchangeScreen({ navigation }: { navigation: any }) {
  // Состояния для полей ввода
  const [fromAmount, setFromAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  
  const [toAmount, setToAmount] = useState('');
  const [toCurrency, setToCurrency] = useState('KRM');

  // Состояние для модального окна выбора валюты
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTarget, setActiveTarget] = useState<'from' | 'to'>('from');

  const currencies = [
    { code: 'VND', name: 'Viet Nam Dong' },
    { code: 'HKS', name: 'Hong Kong Dollar' },
    { code: 'USD', name: 'Dollar' },
    { code: 'NTS', name: 'Taiwan Dollar' },
    { code: 'JS', name: 'Jamaica Dollar' },
    { code: 'KRM', name: 'Korean Won' },
  ];

  // Расчет суммы обмена (условный курс)
  const handleFromChange = (text: string) => {
    setFromAmount(text);
    const num = parseFloat(text);
    if (!isNaN(num)) {
      setToAmount((num * 1122).toFixed(2));
    } else {
      setToAmount('');
    }
  };

  const openCurrencyModal = (target: 'from' | 'to') => {
    setActiveTarget(target);
    setModalVisible(true);
  };

  const selectCurrency = (code: string) => {
    if (activeTarget === 'from') {
      setFromCurrency(code);
    } else {
      setToCurrency(code);
    }
    setModalVisible(false);
  };

  const isFilled = fromAmount.trim().length > 0;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Хедер */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1D1668" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exchange</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Иллюстрация */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../assets/Illustration 5.png')} 
            style={styles.illustration}
            resizeMode="contain"
          />
        </View>

        {/* Карточка ввода "From" */}
        <View style={styles.inputCard}>
          <Text style={styles.label}>From</Text>
          <View style={styles.rowInputSelect}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#A0A0A0"
              keyboardType="numeric"
              value={fromAmount}
              onChangeText={handleFromChange}
            />
            <TouchableOpacity 
              style={styles.selectButton}
              onPress={() => openCurrencyModal('from')}
            >
              <Text style={styles.selectButtonText}>{fromCurrency}</Text>
              <Ionicons name="chevron-down" size={16} color="#666" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Кнопка смены местами (стрелочки вверх-вниз) */}
        <View style={styles.swapContainer}>
          <TouchableOpacity 
            style={styles.swapButton}
            onPress={() => {
              const tempCur = fromCurrency;
              setFromCurrency(toCurrency);
              setToCurrency(tempCur);

              const tempAmt = fromAmount;
              setFromAmount(toAmount);
              setToAmount(tempAmt);
            }}
          >
            <MaterialCommunityIcons name="swap-vertical" size={20} color="#3023AE" />
          </TouchableOpacity>
        </View>

        {/* Карточка ввода "To" */}
        <View style={styles.inputCard}>
          <Text style={styles.label}>To</Text>
          <View style={styles.rowInputSelect}>
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#A0A0A0"
              keyboardType="numeric"
              value={toAmount}
              editable={false}
            />
            <TouchableOpacity 
              style={styles.selectButton}
              onPress={() => openCurrencyModal('to')}
            >
              <Text style={styles.selectButtonText}>{toCurrency}</Text>
              <Ionicons name="chevron-down" size={16} color="#666" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>

          {/* Инфо о курсе */}
          <View style={styles.rateInfoRow}>
            <Text style={styles.currencyRateLabel}>Currency rate</Text>
            <Text style={styles.currencyRateValue}>1 USD = 1122 KRW</Text>
          </View>
        </View>

        {/* Кнопка обмена */}
        <TouchableOpacity 
          style={[styles.exchangeButton, isFilled ? styles.exchangeButtonActive : styles.exchangeButtonInactive]}
          disabled={!isFilled}
          activeOpacity={0.8}
        >
          <Text style={[styles.exchangeButtonText, isFilled ? styles.textActive : styles.textInactive]}>
            Exchange
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Модальное окно выбора валюты */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalTitle}>Select the currency</Text>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={20} color="#666" />
                  </TouchableOpacity>
                </View>

                {currencies.map((item) => {
                  const currentSelected = 
                    (activeTarget === 'from' && fromCurrency === item.code) ||
                    (activeTarget === 'to' && toCurrency === item.code);

                  return (
                    <TouchableOpacity
                      key={item.code}
                      style={styles.modalItem}
                      onPress={() => selectCurrency(item.code)}
                    >
                      <Text style={[styles.modalItemText, currentSelected && styles.modalItemTextSelected]}>
                        {item.code} ( {item.name} )
                      </Text>
                      {currentSelected && (
                        <Ionicons name="checkmark" size={18} color="#3023AE" />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  illustration: {
    width: '100%',
    height: 180,
  },
  inputCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EFEFEF',
    padding: 16,
    shadowColor: '#3023AE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: '#9E9E9E',
    marginBottom: 6,
    fontWeight: '500',
  },
  rowInputSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: '#1D1668',
  },
  selectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E8E8EC',
  },
  selectButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1D1668',
  },
  swapContainer: {
    alignItems: 'center',
    marginVertical: -8,
    zIndex: 10,
  },
  swapButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rateInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#F5F5F5',
  },
  currencyRateLabel: {
    fontSize: 13,
    color: '#3023AE',
    fontWeight: '600',
  },
  currencyRateValue: {
    fontSize: 13,
    color: '#666666',
    fontWeight: '500',
  },
  exchangeButton: {
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  exchangeButtonActive: {
    backgroundColor: '#3023AE',
    shadowColor: '#3023AE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  exchangeButtonInactive: {
    backgroundColor: '#F2F2F7',
  },
  exchangeButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  textActive: {
    color: '#FFFFFF',
  },
  textInactive: {
    color: '#C7C7CC',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1D1668',
  },
  modalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F8F8F8',
  },
  modalItemText: {
    fontSize: 15,
    color: '#333333',
    fontWeight: '500',
  },
  modalItemTextSelected: {
    fontWeight: '700',
    color: '#3023AE',
  },
});