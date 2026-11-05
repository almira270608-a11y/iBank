import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  ScrollView, 
  Platform,
  Image,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.topHeader}>
        <View style={styles.userInfo}>
          <Image 
            source={{ uri:'../assets/шрек.png' }} 
            style={styles.avatarPlaceholder} 
          />
          <View>
            <Text style={styles.userName}>Hi, Push Puttichai</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications" size={26} color="#fff" />
          <View style={styles.badge} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        overScrollMode="never"
      >
        
        <View style={styles.cardContainer}>
          
          <View style={styles.purpleBackgroundCard} />
          <View style={styles.bankCarddd} />

          <View style={styles.card}>
            
            <View style={styles.bigCircle} />
            <View style={styles.smallCircle} />

            <Text style={styles.cardholderName}>John Smith</Text>

            <View>
              <Text style={styles.cardType}>Amazon Platinium</Text>
              <Text style={styles.cardNumber}>4756  ••••  ••••  9018</Text>
            </View>

            <View style={styles.cardBottom}>
              <Text style={styles.cardBalance}>$3.469.52</Text>
              <Text style={styles.visa}>VISA</Text>
            </View>
          </View>
        </View>
         
        <View style={styles.gridContainer}>
          
          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#EEF0FF' }]}>
              <Ionicons name="wallet-outline" size={24} color="#3023AE" />
            </View>
            <Text style={styles.gridText}>Account and Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFEEF0' }]}>
              <MaterialCommunityIcons name="swap-horizontal" size={24} color="#FF5252" />
            </View>
            <Text style={styles.gridText}>Transfer</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="card-outline" size={24} color="#00838F" />
            </View>
            <Text style={styles.gridText}>Withdraw</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="phone-portrait-outline" size={24} color="#FF9800" />
            </View>
            <Text style={styles.gridText}>Mobile prepaid</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E0F7FA' }]}>
              <Ionicons name="receipt-outline" size={24} color="#00BCD4" />
            </View>
            <Text style={styles.gridText}>Pay the bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#F3E5F5' }]}>
              <MaterialCommunityIcons name="piggy-bank-outline" size={24} color="#5C6BC0" />
            </View>
            <Text style={styles.gridText}>Save online</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFEBEE' }]}>
              <Ionicons name="card-outline" size={24} color="#E91E63" />
            </View>
            <Text style={styles.gridText}>Credit card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
              <Ionicons name="document-text-outline" size={24} color="#3F51B5" />
            </View>
            <Text style={styles.gridText}>Transaction report</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FFEBEE' }]}>
              <MaterialCommunityIcons name="card-account-details-outline" size={24} color="#E91E63" />
            </View>
            <Text style={styles.gridText}>Beneficiary</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

  
      <View style={styles.bottomNav}>
        <TouchableOpacity style={[styles.navItem, styles.activeNav]}>
          <Ionicons name="home" size={18} color="#fff" />
          <Text style={styles.activeNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="search-outline" size={22} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="mail-outline" size={22} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={22} color="#888" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3629B7',
    paddingTop: Platform.OS === 'android' ? 25 : 0, 
  },
  topHeader: {
    height: 53,
     marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 25,
    backgroundColor: '#fff',
    marginRight: 15,
    marginLeft: 15,
    marginTop: -50,
  },
  userName: {
    fontSize: 19,
    fontWeight: '500',
    color: '#fff',
    marginTop: -40,
    marginRight: 90,
  },
  notificationBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
    marginLeft: 17,
  },
  badge: {
    position: 'absolute',
    top: -2,
    right: 1,
    width: 12,
    height: 12,
    borderRadius: 70.5,
    backgroundColor: '#FF4267',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#fefefe',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 30,
  },

  cardContainer: {
    marginHorizontal: 24,
    marginBottom: 30,
    height: 204,
  },
  card: {
    flex: 1,
    backgroundColor: '#1D1668',   
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
    overflow: 'hidden',           
  },
  bigCircle: {                    
    position: 'absolute',
    left: '44%',
    top: -125,
    width: 370,
    height: 370,
    borderRadius: 185,
    backgroundColor: '#1A7BFF',
  },
  smallCircle: {                 
    position: 'absolute',
    right: -37,
    top: -45,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#3D9BFF',
  },
  cardholderName: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '300',
  },
  cardType: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 16,
    letterSpacing: 1,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardBalance: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  visa: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    fontStyle: 'italic',
  },
  bankCarddd: {                   
    position: 'absolute',
    bottom: -10,
    left: 18,
    right: 18,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#FF4267',
  },
  purpleBackgroundCard: {         
    position: 'absolute',
    bottom: -20,
    left: 34,
    right: 34,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#5A55CA',
  },
  
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  gridItem: {
    width: '31%',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  gridText: {
    fontSize: 11,
    color: '#444',
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 75,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  navItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  activeNav: {
    flexDirection: 'row',
    backgroundColor: '#1b03eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeNavText: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 6,
    fontSize: 12,
  },
});