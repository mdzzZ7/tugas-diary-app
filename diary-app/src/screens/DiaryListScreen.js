import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { COLORS, SPACE } from '../styles/tokens';
import { Ionicons } from '@expo/vector-icons'; // Tambahan ikon buat empty state
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import SearchBar from '../components/SearchBar';
import EntryForm from '../components/EntryForm';

const INITIAL_ENTRIES = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2026-10-18',
    preview: 'Jalan pagi 20 menit dan menikmati udara segar.',
    body: 'Hari ini aku bangun lebih pagi dan berjalan kaki selama 20 menit.',
    moodImage: require('../../assets/moods/happy.jpg'),
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2026-10-17',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim.',
    body: 'Hari ini cukup produktif karena beberapa target perkuliahan selesai.',
    moodImage: require('../../assets/moods/focus.jpg'),
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2026-10-16',
    preview: 'Membaca buku sambil menikmati suasana senja.',
    body: 'Sore ini saya menikmati waktu di taman sambil membaca buku.',
    moodImage: require('../../assets/moods/calm.jpg'),
  },
];

export default function DiaryListScreen() {
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [query, setQuery] = useState('');
  const [likedIds, setLikedIds] = useState(new Set());
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return entries;
    const q = query.toLowerCase();
    return entries.filter((entry) =>
      entry.title.toLowerCase().includes(q) ||
      entry.preview.toLowerCase().includes(q) ||
      entry.date.toLowerCase().includes(q)
    );
  }, [entries, query]);

  const toggleLike = (id) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const addEntry = (newEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
  };

  const renderItem = ({ item }) => (
    <DiaryCard
      title={item.title}
      date={item.date}
      preview={item.preview}
      moodImage={item.moodImage}
      liked={likedIds.has(item.id)}
      onToggleLike={() => toggleLike(item.id)}
      onPress={() => setSelected(item)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Buku Harian</Text>
        <Text style={styles.headerSubtitle}>Catat momen pentingmu hari ini</Text>
      </View>
      
      <SearchBar onChange={setQuery} />
      <EntryForm onSubmit={addEntry} />
      
      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="book-outline" size={56} color={'#cbd5e1'} />
            <Text style={styles.emptyText}>Belum ada entri diary nih.</Text>
            <Text style={styles.emptySubText}>Yuk, mulai nulis cerita pertamamu!</Text>
          </View>
        }
      />
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background, 
  },
  headerContainer: {
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    paddingBottom: SPACE.s,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.accent, // Aksen Biru Persib
  },
  headerSubtitle: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 2,
  },
  listContent: {
    padding: SPACE.l,
    gap: 16,
    paddingBottom: 40, // Biar pas di-scroll ke bawah nggak kepotong layarnya
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 16,
  },
  emptySubText: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 8,
  },
});