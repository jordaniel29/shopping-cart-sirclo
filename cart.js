class Cart {
  constructor() {
    this.productList = {};
  }
  tambahProduk(kodeProduk, kuantitas) {
    if (kuantitas > 0) {
      if (!this.productList[kodeProduk]) {
        this.productList[kodeProduk] = kuantitas;
      } else {
        this.productList[kodeProduk] += kuantitas;
      }
    }
  }
  hapusProduk(kodeProduk) {
    delete this.productList[kodeProduk];
  }
  tampilkanCart() {
    for (const [key, value] of Object.entries(this.productList)) {
      console.log(`${key} (${value})`);
    }
  }
}

export { Cart };
