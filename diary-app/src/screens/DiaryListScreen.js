import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, FlatList, useWindowDimensions } from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import { COLORS, SPACE, TYPO, BREAKPOINTS, FONTS } from '../styles/tokens';

const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Bangun lebih pagi dan menyeduh kopi. Rasanya sangat tenang sebelum rutinitas dimulai.',
    body: 'Catatan lengkap hari ini: Bangun lebih pagi dan menyeduh kopi. Rasanya sangat tenang sebelum rutinitas dimulai. Sempat membaca buku beberapa halaman.',
    moodUri: 'https://picsum.photos/seed/happy/200',
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul React Native. Lumayan menantang tapi akhirnya berhasil juga bikin modalnya.',
    body: 'Kemajuan proyek: Menyelesaikan modul React Native. Lumayan menantang tapi akhirnya berhasil juga bikin modalnya. Tinggal merapikan desain UI.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Jalan-jalan sore sebentar mencari angin. Cuacanya pas banget buat refleksi diri.',
    body: 'Refleksi singkat: Jalan-jalan sore sebentar mencari angin di taman dekat rumah. Cuacanya pas banget buat sekadar duduk santai dan me-refresh pikiran.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },

{
    id: 4,
    title: 'Nugas Coding Semalaman',
    date: '2025-10-07',
    preview: 'Akhirnya beres juga bikin project web dan benerin bug seharian penuh...',
    body: 'Akhirnya beres juga bikin project web dan benerin bug styling seharian penuh. Sekarang waktunya istirahat sambil nonton beberapa episode anime favorit buat refreshing otak sebelum lanjut nugas lagi besok.',
    moodUri: 'https://picsum.photos/seed/code/200',
    heroUri: 'https://picsum.photos/seed/codehero/800/450',
  },
  {
    id: 5,
    title: 'Ngopi Sore Cari Inspirasi',
    date: '2025-10-08',
    preview: 'Nemu kedai kopi yang asik banget buat ngerjain tugas. Vibe-nya tenang...',
    body: 'Nemu kedai kopi yang asik banget buat ngerjain tugas. Vibe-nya tenang, kopinya mantap, cocok banget buat nyari inspirasi pas lagi stuck nulis kode atau ngerancang database.',
    moodUri: 'https://picsum.photos/seed/coffee/200',
    heroUri: 'https://picsum.photos/seed/coffeehero/800/450',
  }


];


export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buku Harian</Text>
      
      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(it) => String(it.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada entri.</Text>
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
    backgroundColor: COLORS.background 
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: TYPO.h1,
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    paddingBottom: SPACE.s,
    color: COLORS.text,
  },
  itemWrap: { flex: 1 },
  itemWrap2: { flex: 1 / 2 },
  empty: { 
    fontFamily: FONTS.regular,
    textAlign: 'center', 
    color: COLORS.muted, 
    marginTop: 40,
    fontSize: TYPO.body 
  },
});