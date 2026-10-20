import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS, SPACE, RADIUS } from '../styles/tokens';
import { Ionicons } from '@expo/vector-icons'; // Tambahan ikon

export default function SearchBar({
  placeholder = 'Cari entri...',
  onChange,
}) {
  const [queryText, setQueryText] = useState('');

  const handleChange = (text) => {
    setQueryText(text);
    onChange?.(text);
  };

  return (
    <View style={styles.wrap}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.muted} style={styles.icon} />
        <TextInput
          value={queryText}
          onChangeText={handleChange}
          placeholder={placeholder}
          style={styles.input}
          accessibilityLabel="Kolom pencarian"
          placeholderTextColor={COLORS.muted}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: SPACE.l,
    paddingVertical: SPACE.m,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    paddingHorizontal: SPACE.m,
    // Tambahan shadow tipis biar elegan
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    color: COLORS.text,
    fontSize: 15,
  },
});