<template>
  <div class="part">
    <div class="form-title">
      <h1 class="sub-title">付款資訊</h1>
    </div>
    <div class="form-row">
      <div class="card-host">
        <label for="card-host">持卡人姓名</label>
        <input type="text" id="card-host" placeholder="John Doe" />
      </div>
    </div>
    <div class="form-row">
      <div class="card-number">
        <label for="card-number">卡號</label>
        <input type="text" id="card-number" placeholder="1111 2222 3333 4444" />
      </div>
    </div>
    <div class="form-row security-wrapper">
      <div class="card-date">
        <label for="card-date">有效期限</label>
        <input type="text" id="card-date" placeholder="MM/YY" />
      </div>
      <div class="security-code">
        <label for="security-code">CVC / CCV</label>
        <input type="text" id="security-code" placeholder="123" />
      </div>
    </div>
  </div>
</template>