import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function EntryForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2026-10-19');
  const [preview, setPreview] = useState('');

  const canSubmit = title.trim().length > 0 && preview.trim().length > 0;

  const submit = () => {
    if (!canSubmit) return;
    onSubmit?.({
      id: Date.now(),
      title: title.trim(),
      date: date.trim(),
      preview: preview.trim(),
      body: preview.trim(),
      moodImage: require('../../assets/moods/default.jpg'),
    });
    setTitle('');
    setDate('2026-10-19');
    setPreview('');
  };

  return (
    <View style={styles.form}>
      <Text style={styles.heading}>Tambah Entri Baru</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Judul Diary"
        style={styles.input}
        placeholderTextColor={COLORS.muted}
      />
      <TextInput
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        style={styles.input}
        placeholderTextColor={COLORS.muted}
      />
      <TextInput
        value={preview}
        onChangeText={setPreview}
        placeholder="Ceritain hari ini..."
        style={[styles.input, styles.multiline]}
        multiline
        placeholderTextColor={COLORS.muted}
      />
      <View style={styles.buttonWrapper}>
        <Pressable
          onPress={submit}
          disabled={!canSubmit}
          android_ripple={{ color: '#ffffff50' }}
          style={({ pressed }) => [
            styles.button,
            !canSubmit && styles.buttonDisabled,
            { opacity: pressed && canSubmit ? 0.9 : 1 }
          ]}
        >
          <Text style={styles.buttonText}>Simpan Catatan</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { 
    paddingHorizontal: SPACE.l, 
    paddingBottom: SPACE.l, 
    gap: 12 
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    paddingVertical: 12,
    backgroundColor: '#fff',
    fontSize: 15,
    color: COLORS.text,
  },
  multiline: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  buttonWrapper: {
    marginTop: 8,
    borderRadius: RADIUS.card,
    overflow: 'hidden', // Biar efek ripple nggak keluar batas tombol
    elevation: 2,
  },
  button: {
    padding: SPACE.m,
    backgroundColor: COLORS.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: { 
    backgroundColor: '#94a3b8', 
    elevation: 0 
  },
  buttonText: { 
    color: '#fff', 
    fontWeight: '700',
    fontSize: 16 
  },
});