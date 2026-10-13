import React from 'react';
import { Modal, View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO, FONTS } from '../styles/tokens';

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;
  const { title, date, body, heroUri } = entry;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Image source={{ uri: heroUri || entry.moodUri }} style={styles.hero} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
          <Text style={styles.body}>{body}</Text>
          
          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Tutup</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.surface 
  },
  hero: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.accentLight,
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },
  content: { padding: SPACE.l, gap: SPACE.s },
  title: { 
    fontFamily: FONTS.bold,
    fontSize: 22, 
    color: COLORS.text 
  },
  date: { 
    fontFamily: FONTS.semiBold,
    fontSize: TYPO.caption, 
    color: COLORS.muted, 
    marginBottom: SPACE.s 
  },
  body: { 
    fontFamily: FONTS.regular,
    fontSize: TYPO.body, 
    color: COLORS.text, 
    lineHeight: 22 
  },
  button: {
    marginTop: SPACE.xl, 
    paddingVertical: SPACE.m,
    paddingHorizontal: SPACE.l,
    borderRadius: RADIUS.button,
    backgroundColor: COLORS.accent, 
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: { 
    fontFamily: FONTS.bold,
    color: '#FFFFFF', 
    fontSize: TYPO.body 
  },
});