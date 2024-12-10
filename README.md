# **Görev Takip Sistemi**

## **Projenin Amacı**
Bu proje, kullanıcının görevlerini yönetebileceği bir sistem oluşturmayı amaçlar. Kullanıcı görev ekleyebilir, mevcut görevleri listeleyebilir, tamamlayabilir veya silebilir.

---

## **Anahtar Kelimeler**
- `let`, `const`
- `array`, `object`
- `push`, `find`, `filter`
- `console.log`
- `boolean`

---

## **Kullanılacak Değişkenler**
1. **gorevler**: Tüm görev nesnelerini tutan dizi.
2. **id**: Görevlerin benzersiz kimliği.
3. **isim**: Görevin adı.
4. **tamamlandi**: Görevin tamamlanma durumu (`true` veya `false`).

---

## **Proje Adımları**

### **1. Görev Veri Yapısı**
- Her görev bir nesne olarak tanımlanacak.
- Nesnenin sahip olacağı özellikler:
  - **id**: Görevin benzersiz kimliği.
  - **isim**: Görevin adı.
  - **tamamlandi**: Görevin tamamlanma durumu (varsayılan olarak `false`).

---

### **2. Görev Ekleme**
- **Amaç**: Kullanıcının yeni bir görev eklemesini sağlamak.
- **Adımlar**:
  1. Kullanıcıdan görev adı alın.
  2. Görevin `id` değeri, mevcut görev sayısına göre otomatik artırılarak belirlensin.
  3. Görevin tamamlanma durumu `false` olarak ayarlanacak.
  4. Yeni görev, görevler dizisine eklenecek.

---

### **3. Görev Listeleme**
- **Amaç**: Görevleri tamamlanma durumlarına göre gruplandırarak listelemek.
- **Adımlar**:
  1. **Tamamlanmayan görevler** ve **tamamlanan görevler** ayrı ayrı başlıklar altında listelensin.
  2. Görevlerin bilgileri, tablo formatında veya satır satır yazdırılsın.
  3. Boşsa, uygun bir mesaj gösterilsin (ör. "Tamamlanmamış görev yok").

---

### **4. Görev Tamamlama**
- **Amaç**: Belirli bir görevin tamamlandığını işaretlemek.
- **Adımlar**:
  1. Kullanıcıdan tamamlanacak görevin `id` değeri alın.
  2. Görevler dizisinde bu `id` ile eşleşen nesne bulun.
  3. Görevin `tamamlandi` değeri `true` olarak değiştirilsin.
  4. Sonuç ekrana yazdırılsın.

---

### **5. Görev Silme**
- **Amaç**: Belirli bir görevi `id`ye göre silmek.
- **Adımlar**:
  1. Kullanıcıdan silmek istediği görevin `id` değeri alın.
  2. Görevler dizisinden bu `id` ile eşleşen görev kaldırılacak.
  3. Sonuç ekrana yazdırılsın (ör. "Görev başarıyla silindi").
