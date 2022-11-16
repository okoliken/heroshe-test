<template>
  <div>
    <Nav />
    <div class="hero-banner">
      <!-- HERO BANNER -->
      <div
        class="container"
        :style="`background: url(${'https://d15nz5r4fxbboz.cloudfront.net/static/img/help-center-banner-header.png'})`"
      >
        <div class="container-content">
          <h3>Hi, How can we help?</h3>

          <form>
            <input placeholder="Find answers to questions about Heroshe" type="text" />
          </form>
        </div>
      </div>
      <!-- END -->
      <!-- MAIN CONTENT -->
      <main class="main-container">
        <div class="get-started-con">
          <div>
            <h2 class="highlight-item__title max-w-sm">
              New to Heroshe? <br />Let’s Get You Started
            </h2>
            <p>
              Some basics to get you started with shipping packages from the US to
              Nigeria. <br />
              Ready, set, go!
            </p>
            <a class="nav-links sign-up-link" href=""> Get Started</a>
          </div>
          <div>
            <img src="../assets/getStarted.svg" alt="" />
          </div>
        </div>

        <div class="service-container">
          <div class="service">
            <p>FAQ</p>
            <p>Get answers to questions people commonly ask about Heroshe.</p>
          </div>
          <div class="service">
            <p>FAQ</p>
            <p>Get answers to questions people commonly ask about Heroshe.</p>
          </div>
          <div class="service">
            <p>FAQ</p>
            <p>Get answers to questions people commonly ask about Heroshe.</p>
          </div>
          <div class="service">
            <p>FAQ</p>
            <p>Get answers to questions people commonly ask about Heroshe.</p>
          </div>
        </div>
      </main>
      <!-- END -->
    </div>
  </div>
</template>

<script setup>
import Nav from "../components/Nav.vue";
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

body {
  font-family: "Roboto", sans-serif;
}
.hero-banner {
  width: 100%;
}

.container {
  text-align: center;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.container .container-content {
  padding-top: 120px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 600px;
}

.container .container-content h3 {
  font-size: 36px;
  color: #fff;
  margin-bottom: 10px;
}

.container .container-content input {
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 16px;
  border-radius: 4px;
  background-color: #fff;
  color: #212b36;
  font-size: 1rem;
  transition: all 0.25s ease;
  border: 1px solid #979797;
  outline: none;
}

.main-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
}
.get-started-con {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
}
.get-started-con h2 {
  margin-bottom: 15px;
  font-size: 1.875rem;
}

.get-started-con p {
  font-size: 16px;
}

a.sign-up-link {
  background-color: #f1c34e;
  padding: 12px 25px;
  border-radius: 2px;
  display: inline-block;
  margin-top: 10px;
  color: #fff;
}

.service-container {
  margin-top: 120px;
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.service {
  background-color: #f5f5f5;
  padding: 20px;
}
</style>
