const produkData = {
    "TV": {"kategori": "elektronik", "harga": 1000},
    "headphone": {"kategori": "elektronik", "harga": 200},
    "baju": {"kategori": "fashion", "harga": 50},
    "gitar": {"kategori": "musik", "harga": 300},
    "sepatu": {"kategori": "olahraga", "harga": 80},
    "kamera": {"kategori": "elektronik", "harga": 600},
};

const pelangganData = {
    "Rina": {"minat": ["elektronik", "musik"], "beli": ["TV", "headphone"]},
    "Budi": {"minat": ["fashion", "musik"], "beli": ["baju", "gitar"]},
    "Hartono": {"minat": ["olahraga", "elektronik"], "beli": ["sepatu", "kamera"]},
};


function rekomendasiProduk(pelanggan) {
    const minatPelanggan = pelangganData[pelanggan]["minat"];
    const produkTerbaik = [];

    for (const [produk, info] of Object.entries(produkData)) {
        if (info["kategori"] && minatPelanggan.includes(info["kategori"]) || pelangganData[pelanggan]["beli"].includes(produk)) {
            produkTerbaik.push(produk);
        }
    }

    return produkTerbaik;
}


const hasilRekomendasiRina = rekomendasiProduk("Rina");
console.log(hasilRekomendasiRina);
