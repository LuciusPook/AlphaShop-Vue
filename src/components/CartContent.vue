<template>
  <div class="right-content">
    <h5 class="card-title">購物籃</h5>
    <div class="product-panel">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="product-img">
          <img :src="product.image" alt="" />
        </div>
        <div class="product-info">
          <div class="product-header">
            <p class="product-description">{{ product.name }}</p>
            <p class="product-price">{{ product.price }}</p>
          </div>
          <div class="product-qty">
            <span class="qty-minus" @click="minusCount(product.id)">-</span>
            <span class="qty-num">{{ product.count }}</span>
            <span class="qty-plus" @click="addCount(product.id)">+</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cost-panel">
      <div class="cost">
        <span class="cost-title">運費</span>
        <span class="cost-fee delivery-fee">{{
          initialshippingCost === 0 ? "免費" : initialshippingCost
        }}</span>
      </div>
      <div class="cost">
        <span class="cost-title">小計</span>
        <span class="cost-fee total-fee">{{ sum }}</span>
      </div>
    </div>
  </div>
</template>

<script>
const dummyProduct = [
  {
    id: 1,
    image: "https://i.ibb.co/1qMDKGp/Blockjeans01.jpg",
    name: "破壞補丁修身牛仔褲",
    count: 1,
    price: 3999,
  },
  {
    id: 2,
    image: "https://i.ibb.co/44XKNJ1/Blockjeans02.jpg",
    name: "刷色直筒牛仔褲",
    count: 1,
    price: 1299,
  },
];

export default {
  props: {
    initialshippingCost: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      products: [],
      sum: 0,
    };
  },

  methods: {
    fetchProducts() {
      this.products = [...dummyProduct].map((product) => {
        return { ...product, pricecached: product.price };
      });
    },

    fetchShipCost() {
      this.shipCost = this.initialshippingCost;
    },

    addCount(id) {
      this.products = this.products.map((product) => {
        if (product.id === id) {
          return { ...product, count: product.count + 1 };
        } else {
          return product;
        }
      });
      this.caculatePrice();
    },

    minusCount(id) {
      this.products = this.products.map((product) => {
        if (product.id === id && product.count !== 0) {
          return { ...product, count: product.count - 1 };
        } else {
          return product;
        }
      });
      this.deleteItem(id);
      this.caculatePrice();
    },

    deleteItem(id) {
      if (this.products.some((product) => product.count === 0)) {
        let index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);
      }
    },

    caculatePrice() {
      this.products = this.products.map((product) => {
        return { ...product, price: product.count * product.pricecached };
      });
      this.sum = 0;
      for (let i = 0; i < this.products.length; i = i + 1) {
        this.sum += this.products[i].price;
      }
      this.sum += this.initialshippingCost;
    },
  },

  created() {
    this.fetchProducts();
    this.caculatePrice();
  },

  watch: {
    initialshippingCost() {
      this.caculatePrice();
    },
  },
};
</script>