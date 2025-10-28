import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Modal, TouchableOpacity, Text, StyleSheet, View, Platform} from 'react-native';
// import { useWallet } from '../providers/WalletConnectProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';


// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export function HeaderRight() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleConnectCrypto = () => {
    setModalVisible(false); 
  };

  const handleConnectCash = () => {
    setModalVisible(false);
    alert("Cash deposit flow coming soon!");
  };

  return (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity
        style={styles.cryptoButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.cryptoButtonText}>
          Connect
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.profileBubble}
        onPress={() => console.log("Profile tapped")}
      >
        <Text style={styles.avatarText}>JD</Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeaderRow}>
            <Text style={styles.modalTitle}>CONNECT</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.modalTitle}>X</Text>
            </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.cryptoButtonBIG} onPress={handleConnectCrypto}>
              <Text style={styles.cryptoButtonTextBIG}>Crypto</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.cryptoButtonBIG} onPress={handleConnectCash}>
              <Text style={styles.cryptoButtonTextBIG}>Cash</Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </View>
  );
}



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#0b0930',
          borderTopWidth: 0,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          height: 70,
          borderTopColor: '#000000',
          overflow: 'hidden',
        },
        headerStyle: {
          backgroundColor: '#fdcff3',
        },
        headerTransparent: true,
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontSize: 26,
          overflow: 'hidden',
          fontFamily: 'Inter_800ExtraBold',
          color: '#000000',
          marginLeft: 15,
        },
        headerTintColor: '#000000',
        headerRight: () => <HeaderRight />,
        headerRightContainerStyle: {
          paddingRight: 20,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'HOME',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="bets"
        options={{
          title: 'BETS',
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={"white"} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={"white"} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  modalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.79)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 0,
    borderWidth: 4,
    borderColor: '#000000',
    backgroundColor: "#fdcff3",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "Inter_800ExtraBold",
    color: "#000",
    marginBottom: 10,
  },
  modalTitle2: {
    fontSize: 20,
    fontFamily: "Inter_800ExtraBold",
    color: "#000",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#000",
  },
  modalOption: {
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: "100%",
    alignItems: "center",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  modalOptionText: {
    fontFamily: "Inter_700Bold",
    fontSize: 16,
    color: "#000",
    letterSpacing: 0.5,
  },
  modalClose: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },  
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cryptoButtonBIG: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 0,
    width: 250,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 10,
  },
  cryptoButtonTextBIG: {
    color: '#000000',
    fontSize: 25,
    fontFamily: 'Inter_600SemiBold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  cryptoButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 0,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: 10,
  },
  cryptoButtonText: {
    color: '#000000',
    fontSize: 12,
    fontFamily: 'Inter_700Bold',
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  profileBubble: {
    width: 40,
    height: 40,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  avatarText: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Inter_800ExtraBold',
    letterSpacing: 0.5,
  },
});
