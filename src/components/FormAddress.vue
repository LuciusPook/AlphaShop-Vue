<template>
  <div class="part part-information">
    <div class="form-title">
      <h1 class="sub-title">寄送地址</h1>
    </div>
    <div class="form-row gender-wrapper">
      <div class="gender">
        <label for="gender">稱謂</label>
        <div class="select-wrapper">
          <select name="gender" id="gender" required>
            <option value="" disabled selected>請選擇稱謂</option>
            <option value="mister">先生</option>
            <option value="miss">小姐</option>
          </select>
        </div>
      </div>
      <div class="name">
        <label for="name">姓名</label>
        <input type="text" id="name" placeholder="請輸入姓名" />
      </div>
    </div>
    <div class="form-row phone-wrapper">
      <div class="phone">
        <label for="phone">電話</label>
        <input type="text" id="phone" placeholder="請輸入電話號碼" />
      </div>
      <div class="email">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="請輸入電子信箱" />
      </div>
    </div>
    <div class="form-row region-wrapper">
      <div class="region">
        <label for="region">縣市</label>
        <div class="select-wrapper">
          <select name="region" id="region" required>
            <option value="" disabled selected>請選擇縣市</option>
            <option value="keelung-city">基隆市</option>
            <option value="taipei-city">台北市</option>
            <option value="new-taipei-city">新北市</option>
            <option value="taoyuan-city">桃園市</option>
            <option value="kaohsiung-city">新竹市</option>
            <option value="hsinchu-county">新竹縣</option>
            <option value="miaoli-county">苗栗縣</option>
            <option value="taichung-city">台中市</option>
            <option value="changhua-county">彰化縣</option>
            <option value="nantou-county">南投縣</option>
            <option value="yunlin-county">雲林縣</option>
            <option value="chiayi-city">嘉義市</option>
            <option value="chiayi-county">嘉義縣</option>
            <option value="tainan-city">台南市</option>
            <option value="hsinchu-city">高雄市</option>
            <option value="pingtung-county">屏東縣</option>
            <option value="taitung-county">台東縣</option>
            <option value="hualien-county">花蓮縣</option>
            <option value="yilan-county">宜蘭縣</option>
            <option value="penghu-county">澎湖縣</option>
            <option value="kinmen-county">金門縣</option>
            <option value="lienchiang-county">連江縣</option>
          </select>
        </div>
      </div>
      <div class="address">
        <label for="address">地址</label>
        <input type="text" id="address" placeholder="請輸入地址" />
      </div>
    </div>
  </div>
</template>