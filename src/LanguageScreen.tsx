import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LanguageScreen({ navigation }: { navigation: any }) {
  // Список языков с флагами
  const [languages, setLanguages] = useState([
    { id: '1', name: 'Vietnamese', flag: '🇻🇳', selected: false },
    { id: '2', name: 'Frech', flag: '🇫🇷', selected: false },
    { id: '3', name: 'English', flag: '🇬🇧', selected: true }, // По умолчанию выбран English
    { id: '4', name: 'Japanese', flag: '🇯🇵', selected: false },
    { id: '5', name: 'Portuguese', flag: '🇵🇹', selected: false },
    { id: '6', name: 'China', flag: '🇨🇳', selected: false },
    { id: '7', name: 'Korea', flag: '🇰🇷', selected: false },
    { id: '8', name: 'Nicaragua', flag: '🇳🇮', selected: false },
    { id: '9', name: 'Russia', flag: '🇷🇺', selected: false },
    { id: '10', name: 'Portuguese', flag: '🇵🇹', selected: false },
    { id: '11', name: 'Frech', flag: '🇫🇷', selected: false },
  ]);

  // Функция для выбора языка
  const handleSelect = (id: string) => {
    setLanguages(
      languages.map((lang) => ({
        ...lang,
        selected: lang.id === id,
      }))
    );
  };

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
        <Text style={styles.headerTitle}>Language</Text>
      </View>

      {/* Список языков */}
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {languages.map((item, index) => (
          <View key={item.id}>
            <TouchableOpacity 
              style={styles.itemRow} 
              activeOpacity={0.7}
              onPress={() => handleSelect(item.id)}
            >
              <View style={styles.leftContent}>
                <Text style={styles.flag}>{item.flag}</Text>
                <Text style={[styles.languageName, item.selected && styles.selectedText]}>
                  {item.name}
                </Text>
              </View>

              {item.selected && (
                <Ionicons name="checkmark" size={20} color="#3629B7" />
              )}
            </TouchableOpacity>
            {index < languages.length - 1 && <View style={styles.separator} />}
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 5,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 22,
    marginRight: 15,
  },
  languageName: {
    fontSize: 16,
    color: '#2B2B2B',
    fontWeight: '500',
  },
  selectedText: {
    fontWeight: '700',
    color: '#1D1668',
  },
  separator: {
    height: 1,
    backgroundColor: '#F5F5F5',
  },
});