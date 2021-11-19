<template>
  <div>
    <!-- Main content -->
    <main>
      <h1 class="form-title">結帳</h1>
      <div class="form">
        <div class="form-panel">
          <!-- Stepper -->
          <div class="stepper-panel">
            <div
              class="step step-one"
              :class="[{ active: step === 0 }, { checked: step > 0 }]"
            >
              <div class="circle circle-one"></div>
              <div class="label-container">寄送地址</div>
              <div class="connect-line line-one"></div>
            </div>
            <div
              class="step step-two"
              :class="[{ active: step === 1 }, { checked: step > 1 }]"
            >
              <div class="circle circle-two"></div>
              <div class="label-container">運送方式</div>
              <span class="connect-line line-two"></span>
            </div>
            <div class="step step-three" :class="[{ active: step === 2 }]">
              <div class="circle circle-three"></div>
              <div class="label-container">付款資訊</div>
            </div>
          </div>

          <!-- Form -->
          <FormAddress v-show="step === 0" />

          <FormShipping
            :initialshippingCost="shippingCost"
            @after-select-shippingType="updateCost"
            v-show="step === 1"
          />

          <FormPayment v-show="step === 2" />

          <!-- Control Button -->
          <div class="control-panel" :class="[{ active: step === 0 }]">
            <button
              class="btn previous"
              v-show="step !== 0"
              @click="prevStep()"
            >
              上一步
            </button>
            <button
              class="btn next"
              :class="[{ active: step === 0 }]"
              @click="nextStep()"
            >
              {{ step === 2 ? "確認送出" : "下一步" }}
            </button>
          </div>
        </div>

        <!-- Cart Content -->
        <CartContent :initialshippingCost="shippingCost" />
      </div>
    </main>
  </div>
</template>

<script>
import CartContent from "./../components/CartContent";
import FormAddress from "./../components/FormAddress";
import FormShipping from "./../components/FormShipping";
import FormPayment from "./../components/FormPayment";

export default {
  data() {
    return {
      step: 0,
      shippingCost: 0,
    };
  },

  components: {
    CartContent,
    FormAddress,
    FormShipping,
    FormPayment,
  },

  methods: {
    nextStep() {
      if (this.step < 2) {
        this.step = this.step + 1;
      }
    },
    prevStep() {
      this.step = this.step - 1;
    },
    updateCost(fee) {
      this.shippingCost = fee;
    },
  },
};
</script>
