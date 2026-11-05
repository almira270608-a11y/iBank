import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TransferScreen({ navigation }: { navigation: any }) {
  // Состояния для формы
  const [selectedAccount, setSelectedAccount] = useState('VISA **** **** **** 1234');
  const [selectedTransaction, setSelectedTransaction] = useState('card'); // 'card' | 'same_bank' | 'other_bank'
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [content, setContent] = useState('');
  const [saveBeneficiary, setSaveBeneficiary] = useState(false);

  // Получатели средств
  const beneficiaries = [
    { id: '1', name: 'Emma', image: require('../assets/фиона.png') },
    { id: '2', name: 'Justin', image: require('../assets/осел.png') },
  ];

  const handleSelectBeneficiary = (b: { id: string; name: string }) => {
    setSelectedBeneficiary(b.id);
    setName(b.name);
    setCardNumber('0123456789109');
  };

  const isFormValid = name.trim() !== '' && cardNumber.trim() !== '' && amount.trim() !== '';

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      {/* Хедер */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#1D1668" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Выбор счета/карты */}
        <TouchableOpacity style={styles.dropdownSelect}>
          <Text style={styles.dropdownText}>{selectedAccount}</Text>
          <Ionicons name="chevron-down" size={18} color="#666" />
        </TouchableOpacity>
        <Text style={styles.balanceText}>Available balance : 10,000$</Text>

        {/* Секция: Choose transaction */}
        <Text style={styles.sectionTitle}>Choose transaction</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Card 1: Transfer via card number */}
          <TouchableOpacity
            style={[
              styles.transactionCard,
              selectedTransaction === 'card' && styles.transactionCardActive,
            ]}
            onPress={() => setSelectedTransaction('card')}
          >
            <Ionicons
              name="card-outline"
              size={24}
              color={selectedTransaction === 'card' ? '#FFF' : '#3023AE'}
            />
            <Text
              style={[
                styles.transactionText,
                selectedTransaction === 'card' && styles.transactionTextActive,
              ]}
            >
              Transfer via card number
            </Text>
          </TouchableOpacity>

          {/* Card 2: Transfer to the same bank */}
          <TouchableOpacity
            style={[
              styles.transactionCard,
              selectedTransaction === 'same_bank' && styles.transactionCardActive,
            ]}
            onPress={() => setSelectedTransaction('same_bank')}
          >
            <Ionicons
              name="person-outline"
              size={24}
              color={selectedTransaction === 'same_bank' ? '#FFF' : '#3023AE'}
            />
            <Text
              style={[
                styles.transactionText,
                selectedTransaction === 'same_bank' && styles.transactionTextActive,
              ]}
            >
              Transfer to the same bank
            </Text>
          </TouchableOpacity>

          {/* Card 3: Transfer to another bank */}
          <TouchableOpacity
            style={[
              styles.transactionCard,
              selectedTransaction === 'other_bank' && styles.transactionCardActive,
            ]}
            onPress={() => setSelectedTransaction('other_bank')}
          >
            <FontAwesome5
              name="university"
              size={20}
              color={selectedTransaction === 'other_bank' ? '#FFF' : '#3023AE'}
            />
            <Text
              style={[
                styles.transactionText,
                selectedTransaction === 'other_bank' && styles.transactionTextActive,
              ]}
            >
              Transfer to another bank
            </Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Секция: Choose beneficiary */}
        <View style={styles.beneficiaryHeader}>
          <Text style={styles.sectionTitle}>Choose beneficiary</Text>
          <TouchableOpacity>
            <Text style={styles.findBeneficiaryText}>Find beneficiary</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Кнопка добавления нового */}
          <TouchableOpacity style={styles.addBeneficiaryCard}>
            <View style={styles.addCircle}>
              <Ionicons name="add" size={24} color="#C4C4C4" />
            </View>
          </TouchableOpacity>

          {/* Список существующих */}
          {beneficiaries.map((b) => (
            <TouchableOpacity
              key={b.id}
              style={[
                styles.beneficiaryCard,
                selectedBeneficiary === b.id && styles.beneficiaryCardActive,
              ]}
              onPress={() => handleSelectBeneficiary(b)}
            >
              <Image source={b.image} style={styles.beneficiaryAvatar} />
              <Text style={styles.beneficiaryName}>{b.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Форма ввода */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="#A0A0A0"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Card number"
            placeholderTextColor="#A0A0A0"
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />

          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor="#A0A0A0"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TextInput
            style={styles.input}
            placeholder="Content"
            placeholderTextColor="#A0A0A0"
            value={content}
            onChangeText={setContent}
          />

          {amount !== '' && (
            <Text style={styles.amountInWords}>One thousand dollar</Text>
          )}

          {/* Чекбокс сохранения */}
          <TouchableOpacity
            style={styles.checkboxContainer}
            activeOpacity={0.8}
            onPress={() => setSaveBeneficiary(!saveBeneficiary)}
          >
            <View style={[styles.checkbox, saveBeneficiary && styles.checkboxChecked]}>
              {saveBeneficiary && <Ionicons name="checkmark" size={14} color="#FFF" />}
            </View>
            <Text style={styles.checkboxLabel}>Save to directory of beneficiary</Text>
          </TouchableOpacity>

          {/* Кнопка Confirm */}
          <TouchableOpacity
            style={[
              styles.confirmButton,
              isFormValid ? styles.confirmButtonActive : styles.confirmButtonInactive,
            ]}
            disabled={!isFormValid}
          >
            <Text style={[styles.confirmButtonText, isFormValid ? styles.textActive : styles.textInactive]}>
              Confirm
            </Text>
          </TouchableOpacity>
        </View>
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  dropdownSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 5,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1D1668',
  },
  balanceText: {
    fontSize: 13,
    color: '#3023AE',
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    color: '#888888',
    fontWeight: '500',
    marginBottom: 12,
  },
  horizontalScroll: {
    marginBottom: 20,
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  transactionCard: {
    width: 120,
    height: 100,
    backgroundColor: '#F5F5F7',
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    marginRight: 12,
  },
  transactionCardActive: {
    backgroundColor: '#3023AE',
  },
  transactionText: {
    fontSize: 12,
    color: '#888888',
    fontWeight: '500',
  },
  transactionTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  beneficiaryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  findBeneficiaryText: {
    fontSize: 13,
    color: '#3023AE',
    fontWeight: '600',
  },
  addBeneficiaryCard: {
    width: 80,
    height: 90,
    backgroundColor: '#FAFAFA',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  addCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF0FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  beneficiaryCard: {
    width: 80,
    height: 90,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    padding: 8,
  },
  beneficiaryCardActive: {
    borderColor: '#3023AE',
    borderWidth: 2,
  },
  beneficiaryAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginBottom: 6,
  },
  beneficiaryName: {
    fontSize: 12,
    color: '#2B2B2B',
    fontWeight: '600',
  },
  formContainer: {
    marginTop: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EFEFEF',
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 52,
    fontSize: 15,
    color: '#1D1668',
    marginBottom: 12,
  },
  amountInWords: {
    fontSize: 12,
    color: '#3023AE',
    fontWeight: '600',
    marginTop: -4,
    marginBottom: 12,
    marginLeft: 4,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: '#3023AE',
    borderColor: '#3023AE',
  },
  checkboxLabel: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '500',
  },
  confirmButton: {
    height: 54,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  confirmButtonActive: {
    backgroundColor: '#3023AE',
    shadowColor: '#3023AE',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  confirmButtonInactive: {
    backgroundColor: '#F2F2F7',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  textActive: {
    color: '#FFFFFF',
  },
  textInactive: {
    color: '#C7C7CC',
  },
});