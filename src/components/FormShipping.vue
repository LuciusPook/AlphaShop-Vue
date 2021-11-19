<template>
  <div class="part">
    <div class="form-title">
      <h1 class="sub-title">運送方式</h1>
    </div>
    <div class="shipping-wrapper">
      <div class="shipping-way">
        <input
          @click="shippingCost(0)"
          type="radio"
          name="shipping-way"
          value="standard"
          id="standard"
          class="standard"
          checked
        />
        <label for="standard" class="standard">
          <p class="shipping-name">標準配送</p>
          <p class="shipping-time">約 3~7 個工作天</p>
        </label>
        <span class="shipping-fee">免費</span>
      </div>
      <div class="shipping-way">
        <input
          @click="shippingCost(500)"
          type="radio"
          name="shipping-way"
          value="express"
          id="express"
          class="express"
        />
        <label for="express" class="express">
          <p class="shipping-name">DHL 貨運</p>
          <p class="shipping-time">48 小時內送達</p>
        </label>
        <span class="shipping-fee">$500</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialshippingCost: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      shipCost: 0,
    };
  },

  methods: {
    shippingCost(fee) {
      this.shipCost = fee;
      this.$emit("after-select-shippingType", this.shipCost);
    },
    fecthShippingCost() {
      this.shipCost = this.initialshippingCost;
    },
  },

  created() {
    this.fecthShippingCost();
  },
};
</script>