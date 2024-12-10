// Görevler dizisi
let gorevler = [];

// 1. Görev Ekleme Fonksiyonu
function gorevEkle(isim) {
    const yeniGorev = {
        id: gorevler.length + 1, // Benzersiz ID
        isim: isim,
        tamamlandi: false, // Varsayılan olarak tamamlanmadı
    };
    gorevler.push(yeniGorev);
    console.log("Görev eklendi:", yeniGorev);
}

// 2. Görev Listeleme Fonksiyonu
function gorevListele() {
    console.log("Tamamlanmayan Görevler:");
    const tamamlanmayanlar = gorevler.filter(gorev => !gorev.tamamlandi);
    tamamlanmayanlar.length > 0
        ? tamamlanmayanlar.forEach(gorev => console.log(`ID: ${gorev.id}, İsim: ${gorev.isim}`))
        : console.log("Tamamlanmayan görev yok.");

    console.log("\nTamamlanan Görevler:");
    const tamamlananlar = gorevler.filter(gorev => gorev.tamamlandi);
    tamamlananlar.length > 0
        ? tamamlananlar.forEach(gorev => console.log(`ID: ${gorev.id}, İsim: ${gorev.isim}`))
        : console.log("Tamamlanan görev yok.");
}

// 3. Görev Tamamlama Fonksiyonu
function gorevTamamla(id) {
    const gorev = gorevler.find(gorev => gorev.id === id);
    if (gorev) {
        gorev.tamamlandi = true;
        console.log(`Görev tamamlandı: ID: ${gorev.id}, İsim: ${gorev.isim}`);
    } else {
        console.log(`ID ${id} ile eşleşen görev bulunamadı.`);
    }
}

// 4. Görev Silme Fonksiyonu
function gorevSil(id) {
    const index = gorevler.findIndex(gorev => gorev.id === id);
    if (index !== -1) {
        const silinenGorev = gorevler.splice(index, 1);
        console.log("Görev silindi:", silinenGorev[0]);
    } else {
        console.log(`ID ${id} ile eşleşen görev bulunamadı.`);
    }
}

// Örnek Kullanım
gorevEkle("JavaScript çalış");
gorevEkle("Kitap oku");
gorevEkle("Egzersiz yap");

gorevListele();

gorevTamamla(2);

gorevListele();

gorevSil(1);

gorevListele();
