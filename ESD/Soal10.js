function hitungKembalian(totalPembayaran, totalBelanja) {
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let kembalian = totalPembayaran - totalBelanja;
    const hasilKembalian = {};

    for (const pecahan of pecahanUang) {
        const jumlahPecahan = Math.floor(kembalian / pecahan);
        if (jumlahPecahan > 0) {
            hasilKembalian[`${pecahan}`] = jumlahPecahan;
            kembalian -= jumlahPecahan * pecahan;
        }
    }

    return hasilKembalian;
}

const hasil1 = hitungKembalian(10000, 7500);
console.log(hasil1);

const hasil2 = hitungKembalian(5000, 1100);
console.log(hasil2);

const hasil3 = hitungKembalian(178000, 90500);
console.log(hasil3);
