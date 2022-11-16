<template>
  <div class="heroshe-header">
    <header>
      <img src="../assets/logo.svg" alt="" />
      <span>Help</span>
    </header>

    <ul>
      <li>
        <a class="nav-links" href="">login</a>
        <a class="nav-links sign-up-link" href=""> create an account</a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style scoped>
header {
  display: flex;
  align-items: center;
}
header span {
  margin-left: 10px;
}
.heroshe-header {
  padding: 24px 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  height: 75px;
  z-index: 999;
}
.heroshe-header ul .nav-links {
  margin-right: 24px;
  font-size: 20px;
  color: #333333;
  text-transform: capitalize;
}
.heroshe-header ul .sign-up-link {
  background-color: #f1c34e;
  padding: 12px 25px;
  border-radius: 2px;
}
</style>
