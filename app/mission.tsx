import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function MissionScreen() {
  const [problem, setProblem] = useState({ a: 15, b: 27, answer: 42 });
  const [userAnswer, setUserAnswer] = useState('');
  const [questionsLeft, setQuestionsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const generateNewProblem = () => {
    const a = Math.floor(Math.random() * 50) + 10;
    const b = Math.floor(Math.random() * 50) + 10;
    setProblem({ a, b, answer: a + b });
  };

  const checkAnswer = () => {
    if (parseInt(userAnswer) === problem.answer) {
      if (questionsLeft === 1) {
        router.back();
      } else {
        setQuestionsLeft(questionsLeft - 1);
        setUserAnswer('');
        generateNewProblem();
      }
    } else {
      setUserAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Alarm Animation */}
        <View style={styles.alarmSection}>
          <Text style={styles.alarmEmoji}>⏰</Text>
          <Text style={styles.alarmText}>WAKE UP!</Text>
        </View>

        {/* Timer */}
        <View style={styles.timerCard}>
          <Text style={styles.timerLabel}>TIME LEFT</Text>
          <Text style={[
            styles.timerValue,
            timeLeft < 20 && styles.timerDanger
          ]}>
            {timeLeft}s
          </Text>
        </View>

        {/* Math Problem */}
        <View style={styles.problemCard}>
          <Text style={styles.questionNumber}>
            QUESTION {4 - questionsLeft} OF 3
          </Text>
          <Text style={styles.problemText}>
            {problem.a} + {problem.b} = ?
          </Text>
          <TextInput
            style={styles.answerInput}
            value={userAnswer}
            onChangeText={setUserAnswer}
            keyboardType="numeric"
            placeholder="?"
            autoFocus
            placeholderTextColor="#999"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity 
          style={styles.submitButton}
          onPress={checkAnswer}
        >
          <Text style={styles.submitButtonText}>SUBMIT ANSWER</Text>
        </TouchableOpacity>

        {/* Warning */}
        <View style={styles.warningCard}>
          <Text style={styles.warningText}>
            ⚠️ ANSWER 3 QUESTIONS TO DISMISS ALARM
          </Text>
          <Text style={styles.warningSubtext}>Wrong answer = Start over!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF4444',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  alarmSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  alarmEmoji: {
    fontSize: 96,
    marginBottom: 16,
  },
  alarmText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFF',
  },
  timerCard: {
    backgroundColor: '#FFF',
    borderWidth: 4,
    borderColor: '#000',
    padding: 24,
    marginBottom: 24,
  },
  timerLabel: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  timerValue: {
    textAlign: 'center',
    fontSize: 72,
    fontWeight: 'bold',
  },
  timerDanger: {
    color: '#DC2626',
  },
  problemCard: {
    backgroundColor: '#FFF',
    borderWidth: 4,
    borderColor: '#000',
    padding: 24,
    marginBottom: 24,
  },
  questionNumber: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
  },
  problemText: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  answerInput: {
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FEF3C7',
  },
  submitButton: {
    backgroundColor: '#000',
    borderWidth: 4,
    borderColor: '#000',
    padding: 24,
    marginBottom: 16,
  },
  submitButtonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  warningCard: {
    backgroundColor: '#FDE047',
    borderWidth: 4,
    borderColor: '#000',
    padding: 16,
  },
  warningText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  warningSubtext: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 8,
  },
});

