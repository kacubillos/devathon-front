<template>
  <!-- NavBar - This is not show in the login view -->
  <nav
    v-if="auth.token !== null"
    class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarNav" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <button class="btn-black" @click="logout">Cerrar sesión</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page content -->
  <div class="container mx-auto">
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import useAuthStore from "@/store/auth";

const router = useRouter();
const auth = useAuthStore();

/**
 * Function to close a session, this redirect to login view
 */
const logout = () => {
  auth.logout();

  router.push({ name: "login" });
};
</script>

<style scoped></style>
