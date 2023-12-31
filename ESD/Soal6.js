const menu = [
    { nama: "Ayam Goreng Krispi", tipe: "Makanan", harga: 15000 },
    { nama: "Ayam Puk Puk", tipe: "Makanan", harga: 13000 },
    { nama: "Ayam Bakar", tipe: "Makanan", harga: 20000 },
    { nama: "Es Teh", tipe: "Minuman", harga: 5000 },
    { nama: "Es Jeruk", tipe: "Minuman", harga: 7000 },
  ];
  
  function hitungBiaya(pesanan) {
    let totalBiaya = 0;
  
    for (const pesananItem of pesanan) {
      const menuItem = menu.find(item => item.nama === pesananItem.nama);
  
      const biayaSatuan = menuItem.harga * (1 + (menuItem.tipe === "Makanan" ? 0.05 : 0.03));
      const biayaTotal = biayaSatuan * pesananItem.jumlah;
  
      totalBiaya += biayaTotal;
    }
  
    totalBiaya *= 1.15;
  
    return totalBiaya;
  }
  
  const pesananRehan = [
    { nama: "Ayam Bakar", jumlah: 2 },
    { nama: "Es Teh", jumlah: 1 },
  ];
  
  const pesananAmba = [
    { nama: "Ayam Puk Puk", jumlah: 1 },
    { nama: "Es Teh", jumlah: 3 },
  ];
  
  const pesananFaiz = [
    { nama: "Ayam Goreng Krispi", jumlah: 1 },
    { nama: "Ayam Puk Puk", jumlah: 1 },
    { nama: "Ayam Bakar", jumlah: 1 },
    { nama: "Es Teh", jumlah: 1 },
    { nama: "Es Jeruk", jumlah: 1 },
  ];
  
  const biayaRehan = hitungBiaya(pesananRehan);
  const biayaAmba = hitungBiaya(pesananAmba);
  const biayaFaiz = hitungBiaya(pesananFaiz);
  
  console.log("Biaya Rehan: Rp", biayaRehan);
  console.log("Biaya Amba: Rp", biayaAmba);
  console.log("Biaya Faiz: Rp", biayaFaiz);
  