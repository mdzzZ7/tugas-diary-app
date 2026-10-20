import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable, SafeAreaView } from 'react-native';
import { COLORS } from '../styles/tokens'; // Cukup ambil COLORS saja

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;

  return (
    <Modal 
      visible={visible} 
      animationType="slide"
      onRequestClose={onClose} // Wajib ada agar tombol back Android berfungsi
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          {/* Menggunakan fixed height 220 menggantikan aspectRatio biar aman di semua HP */}
          <Image source={entry.moodImage} style={styles.hero} resizeMode="cover" />
          
          <View style={styles.content}>
            <Text style={styles.title}>{entry.title}</Text>
            <Text style={styles.date}>{entry.date}</Text>
            <Text style={styles.body}>{entry.body}</Text>
            
            <Pressable onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  container: { 
    flex: 1, 
    backgroundColor: COLORS.surface 
  },
  hero: {
    width: '100%',
    height: 220, 
    backgroundColor: '#eef2ff',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  content: { 
    padding: 24, 
  },
  title: { 
    fontWeight: 'bold', 
    fontSize: 22, 
    color: '#1e293b',
    marginBottom: 6,
  },
  date: { 
    fontWeight: '600',
    fontSize: 12, 
    color: '#64748b', 
    marginBottom: 20 
  },
  body: { 
    fontSize: 15, 
    color: '#1e293b', 
    lineHeight: 24,
    marginBottom: 40, // Pengganti gap
  },
  button: {
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: COLORS.accent, 
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: { 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    fontSize: 16 
  },
});