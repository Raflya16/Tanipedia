// ===== DATA PRODUK =====
const locations = {
    kota: [
        {
            id: 'bogor',
            name: 'Bogor',
            desa: ['Sukamakmur', 'Harjasari', 'Mekarjaya']
        },
        {
            id: 'malang',
            name: 'Malang',
            desa: ['Purwodadi', 'Batu', 'Singosari']
        },
        {
            id: 'karawang',
            name: 'Karawang',
            desa: ['Batujaya', 'Cikampek', 'Telukjambe']
        },
        {
            id: 'bandung',
            name: 'Bandung',
            desa: ['Lembang', 'Cimahi', 'Soreang']
        },
        {
            id: 'yogyakarta',
            name: 'Yogyakarta',
            desa: ['Sleman', 'Bantul', 'Gunungkidul']
        },
        {
            id: 'surabaya',
            name: 'Surabaya',
            desa: ['Kenjeran', 'Tambaksari', 'Gubeng']
        },
        {
            id: 'semarang',
            name: 'Semarang',
            desa: ['Tugu', 'Gayamsari', 'Candisari']
        },
        {
            id: 'jakarta',
            name: 'Jakarta',
            desa: ['Kebayoran Baru', 'Menteng', 'Cilandak']
        },
        {
            id: 'bali',
            name: 'Bali',
            desa: ['Denpasar', 'Ubud', 'Kuta']
        },
        {
            id: 'medan',
            name: 'Medan',
            desa: ['Maimun', 'Tuntungan', 'Deli Serdang']
        },
        {
            id: 'bekasi',
            name: 'Bekasi',
            desa: ['Setu', 'Tambun', 'Medan Satria']
        }
    ]
};

const mainCategories = [
    {
        id: 'buah',
        name: 'Buah-buahan',
        icon: 'fa-apple-alt'
    },
    {
        id: 'sayuran',
        name: 'Sayuran',
        icon: 'fa-carrot'
    },
    {
        id: 'rempah',
        name: 'Rempah',
        icon: 'fa-mortar-pestle'
    },
    {
        id: 'biji',
        name: 'Biji-bijian',
        icon: 'fa-seedling'
    },
    {
        id: 'limbah',
        name: 'Limbah Pertanian',
        icon: 'fa-recycle'
    }
];

const subCategories = {
    buah: [
        {
            id: 'apel',
            name: 'Apel',
            image: 'https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg'
        },
        {
            id: 'pisang',
            name: 'Pisang',
            image: 'https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg'
        },
        {
            id: 'jeruk',
            name: 'Jeruk',
            image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_960_720.jpg'
        }
    ],
    sayuran: [
        {
            id: 'tomat',
            name: 'Tomat',
            image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_960_720.jpg'
        },
        {
            id: 'wortel',
            name: 'Wortel',
            image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg"
        }
    ],
    rempah: [
        {
            id: 'jahe',
            name: 'Jahe',
            image: "https://images.pexels.com/photos/7543128/pexels-photo-7543128.jpeg"
        }
    ],
    biji: [
        {
            id: 'beras',
            name: 'Beras',
            image: "https://images.pexels.com/photos/4110255/pexels-photo-4110255.jpeg"
        }
    ],
    limbah: [
        {
            id: 'buah_sayur_gagal',
            name: 'Buah/Sayur Gagal Panen',
            image: "https://images.pexels.com/photos/5479034/pexels-photo-5479034.jpeg",
            benefits: "Bisa jadi kompos, fermentasi bioenzim, atau pakan ternak"
        },
        {
            id: 'daun_batang',
            name: 'Sisa Daun & Batang Tanaman',
            image: "https://images.pexels.com/photos/30124819/pexels-photo-30124819.jpeg",
            benefits: "Bahan utama kompos atau mulsa organik"
        },
        {
            id: 'jerami_sekam',
            name: 'Jerami & Sekam',
            image: "https://images.pexels.com/photos/32666265/pexels-photo-32666265.jpeg",
            benefits: "Pakan ternak, bahan dasar kompos, bahan bakar bioenergi"
        },
        {
            id: 'ampas_olahan',
            name: 'Ampas & Limbah Olahan',
            image: "https://images.pexels.com/photos/9575021/pexels-photo-9575021.jpeg",
            benefits: "Pakan atau media tanam"
        },
        {
            id: 'limbah_nonorganik',
            name: 'Plastik & Kemasan',
            image: "https://images.pexels.com/photos/5719816/pexels-photo-5719816.jpeg",
            benefits: "Dikumpulkan untuk daur ulang"
        }
    ]
};

const varieties = {
    apel: [
        {
            name: "Fuji",
            image: "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg",
            description: "Apel Fuji dengan rasa manis dan tekstur renyah"
        },
        {
            name: "Manalagi",
            image: "https://images.pexels.com/photos/12511888/pexels-photo-12511888.jpeg",
            description: "Apel Manalagi asli Malang dengan rasa segar"
        }
    ],
    pisang: [
        {
            name: "Cavendish",
            image: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
            description: "Pisang Cavendish dengan rasa manis dan tekstur lembut"
        }
    ],
    beras: [
        { 
            name: "Pandan",
            image: "https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg",
            description: "Beras Pandan Wangi premium dengan aroma khas dan pulen"
        }
    ],
    tomat: [
        {
            name: "Ceri",
            image: "https://images.pexels.com/photos/6045414/pexels-photo-6045414.jpeg",
            description: "Tomat ceri segar grade A, manis dan renyah"
        }
    ],
    jahe: [
        {
            name: "Emprit",
            image: "https://images.pexels.com/photos/1337585/pexels-photo-1337585.jpeg",
            description: "Jahe Emprit grade B dengan aroma kuat dan rasa pedas"
        }
    ]        
};

const products = [
    {
        id: 1,
        name: "Apel Fuji",
        category: "buah",
        subCategory: "apel",
        variety: "Fuji",
        grade: "A",
        price: 35000,
        unit: "kg",
        farmer: "Pak Joko",
        location: "Sukamakmur, Bogor",
        image: "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg",
        description: "Apel Fuji grade A dengan rasa manis dan tekstur renyah",
        stock: "Banyak",
        farmerRating: 4.5,
        productRating: 4.8,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam di kebun apel Bogor dengan ketinggian 800 mdpl, kondisi tanah vulkanik yang subur.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Metode Penanaman</h4>
                    <p>Ditanam secara organik dengan sistem irigasi tetes, menggunakan pupuk kompos alami dan pestisida nabati. Pohon apel dipangkas secara rutin untuk memastikan sirkulasi udara dan penetrasi sinar matahari yang optimal.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Alasan Grade A</h4>
                    <ul class="list-disc pl-5">
                        <li>Ukuran seragam 75-80mm</li>
                        <li>Warna merah merata minimal 80% permukaan</li>
                        <li>Tidak ada cacat atau memar</li>
                        <li>Kadar gula 14-16 brix</li>
                        <li>Tekstur renyah dengan kandungan air optimal</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Masa Panen</h4>
                    <p>Dipanen pada usia 150-160 hari setelah bunga mekar, dipetik manual saat pagi hari untuk mempertahankan kesegaran. Proses sortir dilakukan dengan ketat untuk memastikan kualitas grade A.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Keunggulan</h4>
                    <p>Apel Fuji dari kebun ini memiliki rasa manis alami dengan sedikit asam, tekstur yang renyah namun juicy, serta aroma yang khas. Cocok untuk konsumsi langsung, salad buah, atau bahan pembuatan jus.</p>
                </div>
            </div>
        `
    },
    {
        id: 2,
        name: "Apel Fuji",
        category: "buah",
        subCategory: "apel",
        variety: "Fuji",
        grade: "B",
        price: 28000,
        unit: "kg",
        farmer: "Bu Sari",
        location: "Harjasari, Bogor",
        image: "https://cdn.pixabay.com/photo/2016/01/05/13/58/apple-1122537_960_720.jpg",
        description: "Apel Fuji grade B dengan sedikit cacat tapi rasa tetap enak",
        stock: "Banyak",
        farmerRating: 4.2,
        productRating: 4.0,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam di kebun apel Bogor dengan sistem semi-organik, menggunakan kombinasi pupuk organik dan anorganik.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Karakteristik Grade B</h4>
                    <ul class="list-disc pl-5">
                        <li>Ukuran bervariasi 65-75mm</li>
                        <li>Warna merah 50-80% permukaan</li>
                        <li>Mungkin ada sedikit cacat kulit</li>
                        <li>Kadar gula 12-14 brix</li>
                        <li>Mungkin ada sedikit memar akibat transportasi</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Proses Produksi</h4>
                    <p>Ditanam dengan sistem intensif, menggunakan mulsa plastik untuk menjaga kelembaban tanah. Pengendalian hama dilakukan dengan sistem PHT (Pengendalian Hama Terpadu).</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kualitas Rasa</h4>
                    <p>Meskipun secara penampilan kurang sempurna, rasa apel Fuji grade B ini tetap manis dengan sedikit asam. Cocok untuk dibuat jus, saus apel, atau bahan kue karena harganya lebih ekonomis.</p>
                </div>
            </div>
        `
    },
    {
        id: 3,
        name: "Apel Manalagi",
        category: "buah",
        subCategory: "apel",
        variety: "Manalagi",
        grade: "A",
        price: 32000,
        unit: "kg",
        farmer: "Pak Budi",
        location: "Purwodadi, Malang",
        image: "https://images.pexels.com/photos/12511888/pexels-photo-12511888.jpeg",  
        description: "Apel Manalagi grade A asli Malang dengan rasa segar",
        stock: "Sedang",
        farmerRating: 4.7,
        productRating: 4.9,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Usul</h4>
                    <p>Apel Manalagi asli dari Kota Malang, ditanam di lereng Gunung Arjuno pada ketinggian 1000-1200 mdpl dengan suhu optimal 16-22°C.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Ciri Khas</h4>
                    <ul class="list-disc pl-5">
                        <li>Warna hijau kekuningan saat matang</li>
                        <li>Tekstur renyah dan padat</li>
                        <li>Rasa manis segar dengan sedikit asam</li>
                        <li>Aroma harum khas apel Malang</li>
                        <li>Kulit lebih tebal dibanding varietas lain</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Proses Budidaya</h4>
                    <p>Ditanam dengan sistem tumpang sari bersama tanaman sayuran. Menggunakan pupuk kandang ayam yang sudah difermentasi dan pengairan sistem springkle. Pemangkasan dilakukan untuk membentuk kanopi yang ideal.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Keunggulan Grade A</h4>
                    <p>Grade A menunjukkan buah dengan ukuran seragam (70-75mm), warna merata, bebas dari cacat fisik, dan tingkat kematangan yang sempurna. Apel dipanen saat pagi hari dan langsung disortir di kebun.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kegunaan</h4>
                    <p>Sangat cocok untuk konsumsi langsung karena rasanya yang segar. Juga bagus untuk salad buah karena teksturnya yang tidak mudah lembek. Kandungan antioksidannya lebih tinggi dibanding apel impor.</p>
                </div>
            </div>
        `
    },
    {
        id: 4,
        name: "Pisang Cavendish",
        category: "buah",
        subCategory: "pisang",
        variety: "Cavendish",
        grade: "A",
        price: 25000,
        unit: "sisir",
        farmer: "Pak Dedi",
        location: "Mekarjaya, Bogor",
        image: "https://cdn.pixabay.com/photo/2017/06/27/22/21/banana-2449019_960_720.jpg",
        description: "Pisang Cavendish grade A dengan rasa manis",
        stock: "Banyak",
        farmerRating: 4.3,
        productRating: 4.5,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Usul</h4>
                    <p>Ditanam di kebun pisang Bogor dengan sistem monokultur intensif. Varietas Cavendish merupakan pisang unggul yang dikembangkan dari kultur jaringan.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Karakteristik Grade A</h4>
                    <ul class="list-disc pl-5">
                        <li>Ukuran panjang 18-22 cm per buah</li>
                        <li>Warna kuning merata tanpa bercak hitam</li>
                        <li>Bentuk buah melengkung sempurna</li>
                        <li>Tidak ada bekas serangga atau penyakit</li>
                        <li>Tingkat kematangan optimal (80-90%)</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Proses Produksi</h4>
                    <p>Dibudidayakan dengan sistem intensif menggunakan mulsa plastik dan irigasi tetes. Setiap tandan dibungkus plastik khusus untuk melindungi dari hama dan cuaca. Pemupukan dilakukan secara teratur dengan NPK dan pupuk organik.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Panen dan Pasca Panen</h4>
                    <p>Dipanen saat usia 8-9 bulan setelah tanam. Proses pematangan dilakukan secara terkontrol dengan ethylene untuk memastikan keseragaman kematangan. Penyimpanan pada suhu 13-15°C untuk memperpanjang masa simpan.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kandungan Gizi</h4>
                    <p>Kaya akan kalium, vitamin B6, dan serat. Memiliki indeks glikemik sedang sehingga cocok untuk sumber energi. Kandungan gula alami sekitar 12-16% saat matang sempurna.</p>
                </div>
            </div>
        `
    },
    {
        id: 5,
        name: "Beras Pandan",
        category: "biji",
        subCategory: "beras",
        variety: "Pandan",
        grade: "A",
        price: 58000,
        unit: "5 kg",
        farmer: "Pak Sutrisno",
        location: "Batu, Karawang",
        image: "https://images.pexels.com/photos/4187621/pexels-photo-4187621.jpeg",
        description: "Beras Pandan Wangi premium dengan aroma khas dan pulen",
        stock: "Cukup",
        farmerRating: 4.7,
        productRating: 4.8,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Usul</h4>
                    <p>Ditanam di lahan subur pegunungan Batu, Karawang yang terkenal dengan kualitas air irigasinya. Varietas Pandan Wangi dikenal karena aroma wangi khas seperti daun pandan dan tekstur pulennya.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Karakteristik Grade Premium</h4>
                    <ul class="list-disc pl-5">
                        <li>Bentuk bulir ramping dan panjang</li>
                        <li>Warna putih bening tanpa bercak kuning</li>
                        <li>Aroma pandan alami saat dimasak</li>
                        <li>Tekstur pulen, tidak mudah hancur</li>
                        <li>Kadar air rendah (<14%) sehingga tahan lama disimpan</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Proses Produksi</h4>
                    <p>Dibudidayakan secara semi-organik dengan rotasi tanam. Menggunakan pupuk organik dan pestisida nabati. Pengeringan dilakukan dengan sinar matahari langsung selama 2–3 hari agar kadar air stabil.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Panen dan Pasca Panen</h4>
                    <p>Dipanen saat usia 110-120 hari setelah tanam. Gabah dikeringkan lalu digiling dengan mesin modern tanpa pemutih untuk menjaga kandungan nutrisi. Disimpan dalam karung food grade untuk menjaga kualitas.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kandungan Gizi</h4>
                    <p>Mengandung karbohidrat kompleks, vitamin B1, dan sedikit protein. Cocok sebagai sumber energi harian dan ramah untuk lambung karena pulen dan mudah dicerna.</p>
                </div>
            </div>
        `
    },
    {
        id: 6,
        name: "Buah Apel Busuk",
        category: "limbah",
        subCategory: "buah_sayur_gagal",
        price: 5000,
        unit: "kg",
        farmer: "Pak Joko",
        location: "Sukamakmur, Bogor",
        image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716",
        description: "Buah apel yang tidak lolos sortir karena busuk atau cacat",
        stock: "Banyak",
        farmerRating: 4.2,
        productRating: 4.0,
        benefits: "Cocok untuk kompos atau pakan ternak fermentasi",
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Hasil sortiran buah apel dari kebun Pak Joko di Bogor yang tidak memenuhi standar penjualan.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Potensi Pemanfaatan</h4>
                    <ul class="list-disc pl-5">
                        <li>Bahan kompos organik</li>
                        <li>Pakan ternak setelah difermentasi</li>
                        <li>Bahan dasar bioenzim</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Kondisi</h4>
                    <p>Buah dalam kondisi busuk atau cacat fisik, tetapi masih mengandung nutrisi yang baik untuk pengomposan atau pakan ternak.</p>
                </div>
            </div>
        `
    },
    {
        id: 7,
        name: "Jerami Padi",
        category: "limbah",
        subCategory: "jerami_sekam",
        price: 3000,
        unit: "ikat",
        farmer: "Bu Siti",
        location: "Purwodadi, Malang",
        image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51",
        description: "Jerami padi sisa panen, kering dan siap digunakan",
        stock: "Banyak",
        farmerRating: 4.5,
        productRating: 4.3,
        benefits: "Bahan dasar kompos atau pakan ternak",
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Sisa hasil panen padi dari sawah Bu Siti di Malang.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Potensi Pemanfaatan</h4>
                    <ul class="list-disc pl-5">
                        <li>Bahan dasar kompos</li>
                        <li>Pakan ternak ruminansia</li>
                        <li>Mulsa organik</li>
                        <li>Bahan bakar alternatif</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Kondisi</h4>
                    <p>Jerami dalam kondisi kering, sudah dipotong-potong, siap digunakan.</p>
                </div>
            </div>
        `
    },
    {
        id: 8,
        name: "Ampas Tahu",
        category: "limbah",
        subCategory: "ampas_olahan",
        price: 2000,
        unit: "kg",
        farmer: "Pak Budi",
        location: "Batu, Malang",
        image: "https://images.unsplash.com/photo-1566438480900-0609be27a4be",
        description: "Ampas tahu segar dari produksi harian",
        stock: "Sedang",
        farmerRating: 4.7,
        productRating: 4.5,
        benefits: "Pakan ternak berkualitas tinggi",
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Limbah produksi tahu dari usaha tahu Pak Budi di Malang.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Potensi Pemanfaatan</h4>
                    <ul class="list-disc pl-5">
                        <li>Pakan ternak (ayam, ikan, babi)</li>
                        <li>Media tanam jamur</li>
                        <li>Bahan dasar tempe gembus</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Kondisi</h4>
                    <p>Segar, dihasilkan setiap hari, mengandung protein tinggi.</p>
                </div>
            </div>
        `
    },
    {
        id: 9,
        name: "Tomat Ceri",
        category: "sayuran",
        subCategory: "tomat",
        variety: "Ceri",
        grade: "A",
        price: 28000,
        unit: "kg",
        farmer: "Pak Joko",
        location: "Sukamakmur, Bogor",
        image: "https://cdn.pixabay.com/photo/2016/03/05/19/02/tomatoes-1238253_960_720.jpg",
        description: "Tomat ceri segar grade A, manis dan renyah",
        stock: "Banyak",
        farmerRating: 4.5,
        productRating: 4.7,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam di dataran tinggi Sukamakmur, Bogor dengan iklim sejuk dan tanah yang subur, cocok untuk pertumbuhan tomat ceri.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Karakteristik Grade A</h4>
                    <ul class="list-disc pl-5">
                        <li>Ukuran kecil seragam 15–20mm</li>
                        <li>Warna merah cerah dan mengkilap</li>
                        <li>Tidak ada retak atau bercak</li>
                        <li>Kadar gula tinggi (brix 7–9)</li>
                        <li>Tekstur renyah dan rasa manis segar</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Proses Produksi</h4>
                    <p>Ditanam secara organik dengan sistem rumah plastik, irigasi tetes, dan pemupukan kompos fermentasi. Panen dilakukan secara manual saat pagi hari.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kualitas Rasa</h4>
                    <p>Tomat ceri ini sangat cocok untuk salad, garnish, camilan sehat, atau masakan berkuah karena rasa manisnya yang alami.</p>
                </div>
            </div>
        `
    },
    {
        id: 10,
        name: "Jahe Emprit",
        category: "rempah",
        subCategory: "jahe",
        variety: "Emprit",
        grade: "B",
        price: 27000,
        unit: "kg",
        farmer: "Bu Tini",
        location: "Tambun, Bekasi",
        image: "https://images.pexels.com/photos/7543128/pexels-photo-7543128.jpeg",
        description: "Jahe Emprit grade B dengan aroma kuat dan sedikit bercak kulit",
        stock: "Sedang",
        farmerRating: 4.3,
        productRating: 4.5,
        detailedDescription: `
            <div class="space-y-3">
                <div>
                    <h4 class="font-semibold">Asal Produk</h4>
                    <p>Ditanam di kebun keluarga Bu Tini di daerah Tambun, Bekasi dengan tanah liat berpasir yang kaya unsur hara.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Metode Penanaman</h4>
                    <p>Ditanam dengan metode organik sederhana, menggunakan pupuk kandang fermentasi dan penyiraman manual pagi-sore.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Karakteristik Grade B</h4>
                    <ul class="list-disc pl-5">
                        <li>Ukuran umbi kecil hingga sedang</li>
                        <li>Aroma tajam dan khas jahe emprit</li>
                        <li>Ada sedikit bercak atau retakan kulit</li>
                        <li>Kadar air sedikit lebih tinggi</li>
                        <li>Cocok untuk jamu dan olahan dapur rumahan</li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold">Panen</h4>
                    <p>Dipanen setelah 9 bulan masa tanam. Proses penggalian dilakukan manual dan dicuci menggunakan air sumur bersih.</p>
                </div>
                <div>
                    <h4 class="font-semibold">Kelebihan</h4>
                    <p>Jahe Emprit memiliki kandungan minyak atsiri tinggi, cocok sebagai bahan utama jamu, minuman herbal, dan penghangat badan alami.</p>
                </div>
            </div>
        `
    }
];

// ===== MODAL FUNGSIONALITAS =====
function showProductDetail(product) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 hidden';
    modal.id = 'product-detail-modal';
    
    // Determine if it's a waste product
    const isWaste = product.category === 'limbah';
    
    modal.innerHTML = `
        <div class="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div class="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                <h3 class="text-xl font-bold">Detail Produk</h3>
                <button class="text-gray-500 hover:text-gray-700 close-modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="p-6">
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="h-64 md:h-80 bg-gray-100 rounded-lg overflow-hidden">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold mb-2">${product.name} ${product.variety ? '(' + product.variety + ')' : ''}</h2>
                        ${isWaste ? `
                            <div class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-bold mb-4 inline-block">
                                Limbah Pertanian
                            </div>
                        ` : `
                            <div class="flex items-center mb-4">
                                <div class="mr-4">
                                    <span class="text-lg font-bold text-green-600">${formatPrice(product.price)}</span>
                                    <span class="text-gray-500">/${product.unit}</span>
                                </div>
                                <div class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-bold">
                                    Grade ${product.grade}
                                </div>
                            </div>
                        `}
                        <div class="mb-4">
                            ${getStockBadge(product.stock)}
                        </div>
                        <div class="mb-4">
                            <div class="flex items-center text-yellow-500 mb-1">
                                ${renderRating(product.productRating)}
                                <span class="ml-2 text-gray-600">${product.productRating.toFixed(1)}/5.0</span>
                            </div>
                            <div class="text-sm text-gray-600">
                                Petani: ${product.farmer} (${renderRating(product.farmerRating)} ${product.farmerRating.toFixed(1)})
                            </div>
                        </div>
                        ${isWaste && product.benefits ? `
                            <div class="mb-4 bg-green-50 p-3 rounded-lg">
                                <h4 class="font-semibold text-green-700 mb-1">Potensi Pemanfaatan</h4>
                                <p class="text-green-600">${product.benefits}</p>
                            </div>
                        ` : ''}
                        <div class="mb-4">
                            <p class="text-gray-700">${product.description}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex-1 flex items-center justify-center contact-farmer-btn" data-farmer="${product.farmer}">
                                <i class="fas fa-phone mr-2"></i>Hubungi Petani
                            </button>
                            <button class="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg add-to-cart-btn" data-product-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="border-t pt-6">
                    <h3 class="text-lg font-bold mb-4">Informasi Lengkap</h3>
                    ${product.detailedDescription}
                </div>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.appendChild(modal);
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Close modal handlers
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.add('hidden');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            setTimeout(() => modal.remove(), 300);
        }
    });
    
    // Contact farmer button in modal
    modal.querySelector('.contact-farmer-btn')?.addEventListener('click', () => {
        const farmerName = modal.querySelector('.contact-farmer-btn').dataset.farmer;
        showNotification(`Menghubungi ${farmerName}... Anda akan dialihkan ke WhatsApp.`);
        
        setTimeout(() => {
            window.open('https://wa.me/6282112345678?text=Halo, saya tertarik dengan produk dari ' + farmerName, '_blank');
        }, 1000);
    });
    
    // Add to cart button in modal
    modal.querySelector('.add-to-cart-btn')?.addEventListener('click', () => {
        const productId = modal.querySelector('.add-to-cart-btn').dataset.productId;
        const product = products.find(p => p.id == productId);
        
        if (product) {
            showNotification(`${product.name} ditambahkan ke daftar minat!`);
        }
    });
}

// ===== FUNGSI UTILITAS =====
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

function getStockBadge(stock) {
    const badges = {
        'Banyak': '<span class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Banyak</span>',
        'Sedang': '<span class="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Sedang</span>',
        'Sedikit': '<span class="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Sedikit</span>',
        'Cukup': '<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Stok Cukup</span>'
    };
    return badges[stock] || badges['Banyak'];
}

function renderRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationText = document.getElementById('notification-text');
    
    if (!notification || !notificationText) return;
    
    notificationText.textContent = message;
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg transform transition-transform duration-300 z-50 ${type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`;
    
    notification.classList.remove('hidden');
    notification.style.transform = 'translateX(0)';
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
    }, 3000);
}

// ===== FUNGSI RENDER =====
function renderMainCategories() {
    const container = document.getElementById('main-categories');
    if (!container) return;
    
    container.innerHTML = mainCategories.map(category => `
        <div class="category-card" data-category="${category.id}">
            <i class="fas ${category.icon}"></i>
            <h3>${category.name}</h3>
        </div>
    `).join('');
}

function renderSubCategories(categoryId) {
    const container = document.getElementById('sub-categories');
    if (!container || !subCategories[categoryId]) return;
    
    container.innerHTML = subCategories[categoryId].map(sub => `
        <div class="subcategory-card" data-subcategory="${sub.id}">
            <img src="${sub.image}" alt="${sub.name}" class="subcategory-image">
            <div class="subcategory-name">${sub.name}</div>
            ${categoryId === 'limbah' && sub.benefits ? `
                <div class="absolute top-2 left-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    ${sub.benefits}
                </div>
            ` : ''}
        </div>
    `).join('');
    
    // Tampilkan subkategori dan sembunyikan kategori utama
    document.getElementById('main-categories').classList.add('hidden');
    container.classList.remove('hidden');
    document.getElementById('back-buttons').classList.remove('hidden');
    document.getElementById('back-to-categories').classList.remove('hidden');
}

function renderVarieties(subCategoryId) {
    const container = document.getElementById('variety-list');
    if (!container || !varieties[subCategoryId]) {
        // Jika tidak ada varietas, langsung render produk
        const currentCategory = document.querySelector('.category-card.active')?.dataset.category;
        renderProducts({
            category: currentCategory,
            subCategory: subCategoryId
        });
        return;
    }
    
    container.innerHTML = varieties[subCategoryId].map(variety => `
        <div class="variety-card" data-variety="${variety.name}">
            <div class="variety-image-container">
                <img src="${variety.image}" alt="${variety.name}" class="variety-image">
            </div>
            <div class="variety-info">
                <h3 class="variety-name">${variety.name}</h3>
                <p class="variety-desc">${variety.description}</p>
            </div>
        </div>
    `).join('');
    
    // Tampilkan varietas dan sembunyikan subkategori
    document.getElementById('sub-categories').classList.add('hidden');
    document.getElementById('variety-selection').classList.remove('hidden');
    document.getElementById('back-to-subcategories').classList.remove('hidden');
}

function renderProducts(filters = {}) {
    let filteredProducts = products;
    
    if (filters.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    
    if (filters.subCategory) {
        filteredProducts = filteredProducts.filter(p => p.subCategory === filters.subCategory);
    }
    
    if (filters.variety) {
        filteredProducts = filteredProducts.filter(p => p.variety === filters.variety);
    }
    
    if (filters.grade && filters.grade !== 'semua') {
        filteredProducts = filteredProducts.filter(p => p.grade === filters.grade);
    }
    
    if (filters.minRating) {
        const minRating = parseFloat(filters.minRating);
        filteredProducts = filteredProducts.filter(p => p.productRating >= minRating);
    }
    
    if (filters.city) {
        filteredProducts = filteredProducts.filter(p => {
            const locationParts = p.location.split(', ');
            return locationParts[1]?.toLowerCase() === filters.city.toLowerCase();
        });
    }
    
    if (filters.village) {
        filteredProducts = filteredProducts.filter(p => {
            const locationParts = p.location.split(', ');
            return locationParts[0]?.toLowerCase() === filters.village.toLowerCase();
        });
    }
    
    if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(query) || 
            (p.variety && p.variety.toLowerCase().includes(query)) ||
            p.description.toLowerCase().includes(query) ||
            (p.grade && p.grade.toLowerCase().includes(query))
        );
    }
    
    // Render produk ke DOM
    const container = document.getElementById('product-list');
    if (container) {
        container.innerHTML = filteredProducts.map(product => {
            const isWaste = product.category === 'limbah';
            
            return `
                <div class="product-card">
                    <div class="product-image-container">
                        <img src="${product.image}" alt="${product.name}" class="product-image">
                        <div class="price-badge">
                            ${formatPrice(product.price)}/${product.unit}
                        </div>
                        ${!isWaste ? `
                            <div class="grade-badge">
                                Grade ${product.grade}
                            </div>
                        ` : `
                            <div class="grade-badge bg-purple-600">
                                Limbah
                            </div>
                        `}
                        <div class="rating-badge">
                            <i class="fas fa-star"></i>
                            <span>${product.productRating.toFixed(1)}</span>
                        </div>
                    </div>
                    <div class="product-info">
                        <h3 class="text-lg font-bold mb-2">${product.name} ${product.variety ? '(' + product.variety + ')' : ''}</h3>
                        ${isWaste && product.benefits ? `
                            <div class="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 mb-2 inline-block">
                                ${product.benefits}
                            </div>
                        ` : ''}
                        <p class="text-gray-600 text-sm mb-3">${product.description}</p>
                        <div class="farmer-rating">
                            ${renderRating(product.farmerRating)}
                            <span>${product.farmerRating.toFixed(1)} (${product.farmer})</span>
                        </div>
                        <div class="flex justify-between text-xs text-gray-500 mb-2">
                            <span><i class="fas fa-map-marker-alt mr-1"></i>${product.location}</span>
                            <span>${getStockBadge(product.stock)}</span>
                        </div>
                        <div class="flex gap-2">
                            <button class="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm flex-1 flex items-center justify-center view-detail-btn" data-product-id="${product.id}">
                                <i class="fas fa-info-circle mr-2"></i>Detail
                            </button>
                            <button class="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-3 py-2 rounded-lg add-to-cart-btn" data-product-id="${product.id}">
                                <i class="fas fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('') || '<p class="col-span-full text-center py-8 text-gray-500">Tidak ada produk yang ditemukan</p>';
    }
}

function updateFilterDropdowns() {
    const categoryFilter = document.getElementById('category-filter');
    const subcategoryFilter = document.getElementById('subcategory-filter');
    const varietyFilter = document.getElementById('variety-filter');
    const cityFilter = document.getElementById('city-filter');
    const villageFilter = document.getElementById('village-filter');
    
    // Update subcategory dropdown based on selected category
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = this.value;
        
        subcategoryFilter.innerHTML = '<option value="">Semua Jenis</option>';
        varietyFilter.innerHTML = '<option value="">Semua Varietas</option>';
        varietyFilter.disabled = true;
        
        if (selectedCategory && subCategories[selectedCategory]) {
            subcategoryFilter.disabled = false;
            subCategories[selectedCategory].forEach(sub => {
                subcategoryFilter.innerHTML += `<option value="${sub.id}">${sub.name}</option>`;
            });
        } else {
            subcategoryFilter.disabled = true;
        }
    });
    
    // Update variety dropdown based on selected subcategory
    subcategoryFilter.addEventListener('change', function() {
        const selectedSubcategory = this.value;
        
        varietyFilter.innerHTML = '<option value="">Semua Varietas</option>';
        
        if (selectedSubcategory && varieties[selectedSubcategory]) {
            varietyFilter.disabled = false;
            varieties[selectedSubcategory].forEach(variety => {
                varietyFilter.innerHTML += `<option value="${variety.name}">${variety.name}</option>`;
            });
        } else {
            varietyFilter.disabled = true;
        }
    });
    
    // Update village dropdown based on selected city
    cityFilter.addEventListener('change', function() {
        const selectedCity = this.value;
        
        villageFilter.innerHTML = '<option value="">Semua Desa</option>';
        villageFilter.disabled = true;
        
        if (selectedCity) {
            const cityData = locations.kota.find(k => k.id === selectedCity);
            if (cityData) {
                villageFilter.disabled = false;
                cityData.desa.forEach(desa => {
                    villageFilter.innerHTML += `<option value="${desa.toLowerCase()}">${desa}</option>`;
                });
            }
        }
    });
}

function setupSearch() {
    const searchInput = document.getElementById('product-search');
    const searchBtn = document.getElementById('search-btn');
    const suggestionsContainer = document.getElementById('search-suggestions');
    
    // Generate search suggestions
    function generateSuggestions(query) {
        if (!query) return [];
        
        const searchTerms = [
            ...products.map(p => `${p.name} ${p.variety ? p.variety : ''} ${p.category === 'limbah' ? 'Limbah' : 'Grade ' + p.grade}`),
            ...products.map(p => `${p.name} ${p.category === 'limbah' ? 'Limbah' : 'Grade ' + p.grade}`),
            ...products.map(p => p.name),
            ...products.map(p => p.variety),
            ...products.filter(p => p.category !== 'limbah').map(p => `Grade ${p.grade}`),
            ...products.filter(p => p.category === 'limbah').map(p => 'Limbah Pertanian')
        ];
        
        const uniqueTerms = [...new Set(searchTerms.filter(term => term))];
        
        return uniqueTerms.filter(term => 
            term.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    }
    
    // Show suggestions
    function showSuggestions(query) {
        const suggestions = generateSuggestions(query);
        suggestionsContainer.innerHTML = '';
        
        if (suggestions.length > 0 && query) {
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = suggestion;
                div.addEventListener('click', () => {
                    searchInput.value = suggestion;
                    suggestionsContainer.classList.add('hidden');
                    applyFilters({ searchQuery: suggestion });
                });
                suggestionsContainer.appendChild(div);
            });
            suggestionsContainer.classList.remove('hidden');
        } else {
            suggestionsContainer.classList.add('hidden');
        }
    }
    
    // Handle search input
    searchInput.addEventListener('input', (e) => {
        showSuggestions(e.target.value);
    });
    
    // Handle search button click
    searchBtn.addEventListener('click', () => {
        applyFilters({ searchQuery: searchInput.value });
        suggestionsContainer.classList.add('hidden');
    });
    
    // Handle Enter key
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyFilters({ searchQuery: searchInput.value });
            suggestionsContainer.classList.add('hidden');
        }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsContainer.contains(e.target)) {
            suggestionsContainer.classList.add('hidden');
        }
    });
}

function applyFilters(filters = {}) {
    const category = document.getElementById('category-filter').value;
    const subcategory = document.getElementById('subcategory-filter').value;
    const variety = document.getElementById('variety-filter').value;
    const grade = document.getElementById('grade-filter').value;
    const minRating = document.getElementById('rating-filter').value;
    const city = document.getElementById('city-filter').value;
    const village = document.getElementById('village-filter').value;
    
    const filterParams = {
        ...filters,
        category: category || undefined,
        subCategory: subcategory || undefined,
        variety: variety || undefined,
        grade: grade || undefined,
        minRating: minRating || undefined,
        city: city || undefined,
        village: village || undefined
    };
    
    renderProducts(filterParams);
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', function() {
    // State untuk filter saat ini
    const currentFilters = {
        category: null,
        subCategory: null,
        variety: null,
        grade: null,
        city: null,
        village: null
    };
    
    // Render kategori utama
    renderMainCategories();
    
    // Setup filter dropdowns
    updateFilterDropdowns();
    
    // Setup search functionality
    setupSearch();
    
    // Apply filters button
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    
    // Klik kategori utama
    document.addEventListener('click', (e) => {
        const categoryCard = e.target.closest('.category-card');
        if (categoryCard) {
            const categoryId = categoryCard.dataset.category;
            
            // Set active state
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
            });
            categoryCard.classList.add('active');
            
            // Update filter dropdown
            document.getElementById('category-filter').value = categoryId;
            document.getElementById('category-filter').dispatchEvent(new Event('change'));
            
            // Render subkategori
            renderSubCategories(categoryId);
            currentFilters.category = categoryId;
            currentFilters.subCategory = null;
            currentFilters.variety = null;
            currentFilters.grade = null;
            
            // Sembunyikan grade filter dan varietas
            document.getElementById('grade-filters').classList.add('hidden');
            document.getElementById('variety-selection').classList.add('hidden');
        }
    });
    
    // Klik subkategori
    document.addEventListener('click', (e) => {
        const subCategoryCard = e.target.closest('.subcategory-card');
        if (subCategoryCard) {
            const subCategoryId = subCategoryCard.dataset.subcategory;
            
            // Set active state
            document.querySelectorAll('.subcategory-card').forEach(card => {
                card.classList.remove('active');
            });
            subCategoryCard.classList.add('active');
            
            // Update filter dropdown
            document.getElementById('subcategory-filter').value = subCategoryId;
            document.getElementById('subcategory-filter').dispatchEvent(new Event('change'));
            
            // Render varietas
            renderVarieties(subCategoryId);
            currentFilters.subCategory = subCategoryId;
            currentFilters.variety = null;
            currentFilters.grade = null;
            
            // Sembunyikan grade filter
            document.getElementById('grade-filters').classList.add('hidden');
        }
    });
    
    // Klik varietas
    document.addEventListener('click', (e) => {
        const varietyCard = e.target.closest('.variety-card');
        if (varietyCard) {
            const variety = varietyCard.dataset.variety;
            
            // Set active state
            document.querySelectorAll('.variety-card').forEach(card => {
                card.classList.remove('active');
            });
            varietyCard.classList.add('active');
            
            // Update filter dropdown
            document.getElementById('variety-filter').value = variety;
            
            currentFilters.variety = variety;
            currentFilters.grade = null;
            
            // Tampilkan grade filter (kecuali untuk limbah)
            if (currentFilters.category !== 'limbah') {
                document.getElementById('grade-filters').classList.remove('hidden');
            }
            
            // Render produk
            renderProducts(currentFilters);
        }
    });
    
    // Klik grade filter
    document.addEventListener('click', (e) => {
        const gradeBtn = e.target.closest('.grade-filter-btn');
        if (gradeBtn) {
            const grade = gradeBtn.dataset.grade;
            
            // Set active state
            document.querySelectorAll('.grade-filter-btn').forEach(btn => {
                btn.classList.remove('bg-green-600', 'text-white');
                btn.classList.add('bg-gray-200', 'text-gray-700');
            });
            gradeBtn.classList.remove('bg-gray-200', 'text-gray-700');
            gradeBtn.classList.add('bg-green-600', 'text-white');
            
            // Update filter dropdown
            document.getElementById('grade-filter').value = grade === 'semua' ? '' : grade;
            
            currentFilters.grade = grade;
            renderProducts(currentFilters);
        }
    });
    
    // Tombol kembali ke kategori
    document.getElementById('back-to-categories').addEventListener('click', () => {
        document.getElementById('main-categories').classList.remove('hidden');
        document.getElementById('sub-categories').classList.add('hidden');
        document.getElementById('variety-selection').classList.add('hidden');
        document.getElementById('grade-filters').classList.add('hidden');
        document.getElementById('back-buttons').classList.add('hidden');
        
        // Reset filters
        currentFilters.category = null;
        currentFilters.subCategory = null;
        currentFilters.variety = null;
        currentFilters.grade = null;
        
        // Reset active states
        document.querySelectorAll('.category-card, .subcategory-card, .variety-card').forEach(el => {
            el.classList.remove('active');
        });
    });
    
    // Tombol kembali ke subkategori
    document.getElementById('back-to-subcategories').addEventListener('click', () => {
        document.getElementById('sub-categories').classList.remove('hidden');
        document.getElementById('variety-selection').classList.add('hidden');
        document.getElementById('grade-filters').classList.add('hidden');
        document.getElementById('back-to-subcategories').classList.add('hidden');
        
        // Reset filters
        currentFilters.variety = null;
        currentFilters.grade = null;
        
        // Reset active states
        document.querySelectorAll('.variety-card').forEach(el => {
            el.classList.remove('active');
        });
        
        // Render produk tanpa varietas dan grade
        renderProducts({
            category: currentFilters.category,
            subCategory: currentFilters.subCategory
        });
    });
    
    // View detail button
    document.addEventListener('click', (e) => {
        const detailBtn = e.target.closest('.view-detail-btn');
        if (detailBtn) {
            const productId = detailBtn.dataset.productId;
            const product = products.find(p => p.id == productId);
            
            if (product) {
                showProductDetail(product);
            }
        }
    });
    
    // Hubungi petani
    document.addEventListener('click', (e) => {
        const contactBtn = e.target.closest('.contact-farmer-btn');
        if (contactBtn) {
            const farmerName = contactBtn.dataset.farmer;
            showNotification(`Menghubungi ${farmerName}... Anda akan dialihkan ke WhatsApp.`);
            
            setTimeout(() => {
                window.open('https://wa.me/6282112345678?text=Halo, saya tertarik dengan produk dari ' + farmerName, '_blank');
            }, 1000);
        }
    });
    
    // Tambahkan ke keranjang
    document.addEventListener('click', (e) => {
        const cartBtn = e.target.closest('.add-to-cart-btn');
        if (cartBtn) {
            const productId = cartBtn.dataset.productId;
            const product = products.find(p => p.id == productId);
            
            if (product) {
                showNotification(`${product.name} ditambahkan ke daftar minat!`);
            }
        }
    });
});

window.products = products;