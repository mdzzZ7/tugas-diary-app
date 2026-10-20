import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';
import { Ionicons } from '@expo/vector-icons'; // Import icon modern

export default function DiaryCard({
  title,
  date,
  preview,
  moodImage,
  liked = false,
  onPress = () => {},
  onToggleLike = () => {},
}) {
  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#e2e8f0' }} // Efek riak air saat diklik
        style={({ pressed }) => [
          styles.card,
          { opacity: pressed ? 0.9 : 1 } // Fallback efek klik untuk iOS
        ]}
        accessible
        accessibilityLabel={`Entri ${title} tanggal ${date}`}
      >
        <Image source={moodImage} style={styles.mood} />
        
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
        </View>

        <Pressable
          onPress={onToggleLike}
          hitSlop={12} // Perluas area klik icon biar gampang dipencet
          accessibilityLabel={liked ? 'Batal suka' : 'Suka'}
          style={styles.likeButton}
        >
          {/* Menggunakan Vector Icon pengganti teks emoji */}
          <Ionicons 
            name={liked ? 'heart' : 'heart-outline'} 
            size={28} 
            color={liked ? '#e63946' : '#cbd5e1'} 
          />
        </Pressable>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    // Efek Shadow 3D melayang
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden', // Wajib ada agar ripple effect tidak bocor keluar sudut melengkung
  },
  card: {
    flexDirection: 'row',
    gap: SPACE.m,
    padding: SPACE.m,
    alignItems: 'center',
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: '#eef2ff',
  },
  content: { flex: 1 },
  title: { 
    fontSize: TYPO.title, 
    fontWeight: '700', 
    color: COLORS.text, 
    marginBottom: 2 
  },
  date: { 
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: 6 
  },
  preview: { 
    fontSize: TYPO.body, 
    color: COLORS.text 
  },
  likeButton: { 
    paddingHorizontal: 4,
    justifyContent: 'center'
  },
});