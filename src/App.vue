<template>
  <div>
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <router-link to="/">
            <img src="./images/logo.svg" alt="Beach Resort" />
          </router-link>
          <button class="nav-btn" @click="handleToggle">=</button>
        </div>
        <ul :class="[isOpen ? 'show-nav' : '', 'nav-links']">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/rooms">rooms</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import "./App.css";
export default {
  name: "App",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleToggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
