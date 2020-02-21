<template>
  <div id="app">
    <Hero header="Fårex" />
    <div id="nav">
      <router-link to="/">Hem</router-link>-
      <!-- <router-link to="/about">About</router-link>- -->
      <router-link to="/sek">SEK</router-link>-
      <router-link to="/euro">Euro</router-link>
    </div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    Hero,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 5px;
  background-color: #343a40;
  border: 1px black solid;
}

#nav a {
  font-weight: bold;
  color: white;
  font-size: 1.5rem;
  padding: 30px;
}

#nav a.router-link-exact-active {
  color: #bcbebd;
}
#exchangeForm {
  margin-top: 20px;
}

#exchanged p {
  font-size: 50px;
}

.testimonial {
  width: 100vw;
  height: 50px;
  background-color: #343a40;
  text-align: center;
}

.testimonial h2 {
  font-weight: bold;
  color: white;
}
body {
  background-image: url("assets/forexcash.jpg");
}
</style>
