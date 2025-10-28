import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function CreateGameModal() {
  const [wakeTime, setWakeTime] = useState('06:30');
  const [stake, setStake] = useState('5');
  const [gameType, setGameType] = useState<'friends' | 'random'>('random');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>CREATE NEW GAME</Text>
          <Text style={styles.subtitle}>Set up your snooze stakes challenge</Text>
        </View>

        {/* Game Type Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>GAME TYPE</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity 
              style={[
                styles.typeButton,
                gameType === 'random' && styles.typeButtonActive
              ]}
              onPress={() => setGameType('random')}
            >
              <Text style={[
                styles.typeButtonText,
                gameType === 'random' && styles.typeButtonTextActive
              ]}>
                🎲 RANDOM
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[
                styles.typeButton,
                gameType === 'friends' && styles.typeButtonActive
              ]}
              onPress={() => setGameType('friends')}
            >
              <Text style={[
                styles.typeButtonText,
                gameType === 'friends' && styles.typeButtonTextActive
              ]}>
                👥 FRIENDS
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Wake Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WAKE TIME ⏰</Text>
          <View style={styles.inputCard}>
            <TextInput
              style={styles.timeInput}
              value={wakeTime}
              onChangeText={setWakeTime}
              placeholder="06:30"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.helpText}>All players must wake at this time</Text>
        </View>

        {/* Stake Amount */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STAKE AMOUNT 💰</Text>
          <View style={styles.stakeCard}>
            <Text style={styles.dollarSign}>$</Text>
            <TextInput
              style={styles.stakeInput}
              value={stake}
              onChangeText={setStake}
              placeholder="5.00"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.helpText}>Amount each player contributes</Text>
        </View>

        {/* Mission Type */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>WAKE-UP MISSION</Text>
          <TouchableOpacity style={styles.missionOption}>
            <Text style={styles.missionTitle}>🧮 Math Puzzle</Text>
            <Text style={styles.missionDesc}>Solve 3 math problems</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.missionOption}>
            <Text style={styles.missionTitle}>📸 Photo Challenge</Text>
            <Text style={styles.missionDesc}>Take a specific photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.missionOption}>
            <Text style={styles.missionTitle}>📱 Shake Phone</Text>
            <Text style={styles.missionDesc}>Shake your phone 100 times</Text>
          </TouchableOpacity>
        </View>

        {/* Prize Pool Preview */}
        <View style={styles.prizeCard}>
          <Text style={styles.sectionTitle}>💎 PRIZE POOL</Text>
          <View style={styles.prizeRow}>
            <View>
              <Text style={styles.prizeLabel}>Total Pool</Text>
              <Text style={styles.prizeTotal}>${(parseFloat(stake || '0') * 4).toFixed(2)}</Text>
            </View>
            <View style={styles.prizeRight}>
              <Text style={styles.prizeLabel}>Winner Share</Text>
              <Text style={styles.prizeShare}>${(parseFloat(stake || '0') * 4 / 3).toFixed(2)}</Text>
            </View>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity 
          style={styles.createButton}
          onPress={() => router.back()}
        >
          <Text style={styles.createButtonText}>CREATE GAME</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => router.back()}
        >
          <Text style={styles.cancelButtonText}>CANCEL</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  typeButton: {
    flex: 1,
    marginRight: 8,
    padding: 16,
    borderWidth: 4,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  typeButtonActive: {
    backgroundColor: '#000',
  },
  typeButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
  typeButtonTextActive: {
    color: '#FFF',
  },
  inputCard: {
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    backgroundColor: '#FEF3C7',
  },
  timeInput: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stakeCard: {
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    backgroundColor: '#D1FAE5',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  stakeInput: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  helpText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  missionOption: {
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  missionTitle: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  missionDesc: {
    fontSize: 12,
    color: '#666',
  },
  prizeCard: {
    padding: 24,
    borderWidth: 4,
    borderColor: '#000',
    backgroundColor: '#F3E8FF',
    marginBottom: 24,
  },
  prizeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  prizeLabel: {
    fontSize: 12,
    color: '#666',
  },
  prizeTotal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#16A34A',
  },
  prizeRight: {
    alignItems: 'flex-end',
  },
  prizeShare: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#000',
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    marginBottom: 12,
  },
  createButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: '#FFF',
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    marginBottom: 24,
  },
  cancelButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

