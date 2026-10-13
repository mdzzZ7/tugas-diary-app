import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO, FONTS } from '../styles/tokens';

export default function DiaryCard({
  title, date, preview, moodUri, onPress, variant = 'list'
}) {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: '#e5e7eb' }}
      style={({ pressed }) => [{ opacity: pressed ? 0.85 : 1 }]}
      accessible
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
    >
      <View style={[styles.card, variant === 'grid' && styles.cardGrid]}>
        <Image source={{ uri: moodUri }} style={styles.mood} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {preview}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: SPACE.m,
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
  },
  cardGrid: {},
  mood: {
    width: 64, 
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.accentLight,
  },
  content: { flex: 1 },
  title: { 
    fontFamily: FONTS.bold,
    fontSize: TYPO.title, 
    color: COLORS.text,
    marginBottom: 2,
  },
  date: { 
    fontFamily: FONTS.semiBold,
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: 6
  },
  preview: { 
    fontFamily: FONTS.regular,
    fontSize: TYPO.body, 
    color: COLORS.muted,
    lineHeight: 20
  },
});