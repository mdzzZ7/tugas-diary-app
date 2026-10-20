# 📖 Diary App - React Native (Praktikum Modul 4) 🚀

Aplikasi catatan harian (Diary App) berbasis **React Native** dan **Expo CLI** yang dibangun untuk mendemonstrasikan implementasi aliran data menggunakan **Props** dan **State**. Aplikasi ini merupakan hasil pengembangan (refactoring) dari desain statis menjadi dinamis dan interaktif dengan tambahan custom UI yang lebih modern.

## 👨‍💻 Identitas Mahasiswa
- **Nama**  : AHMAD YUSUF ABDHILLAH
- **NIM**   : 2430511042
- **Matkul**: Mobile Multi Platform

---

## 🛠️ Fitur & Custom UI 
Selain fitur wajib dari modul, aplikasi ini telah dimodifikasi dengan beberapa sentuhan *UI/UX* tambahan:
- **Single Source of Truth**: Manajemen data terpusat di Container Component.
- **Search & Filter**: Pencarian entri diary secara *real-time* (Derived State).
- **Interactive UI**: Penambahan efek *Ripple* khas Android dan *Shadow Elevation 3D* pada Card.
- **Modern Icons**: Implementasi `@expo/vector-icons` untuk menggantikan teks emoji standar.
- **Custom Theme**: Menggunakan palet warna *Persib Blue* (`#1b439c`) sebagai aksen utama aplikasi.

---

## 🚀 Cara Menjalankan Project

Pastikan Anda sudah menginstal **Node.js** dan aplikasi **Expo Go** di *smartphone* Anda.

1. **Buka terminal** di dalam folder project ini.
2. **Install dependencies** (termasuk library ikon tambahan) dengan menjalankan:
   ```bash
   npm install