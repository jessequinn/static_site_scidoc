<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <div class="navbar-burger burger" data-target="navMenubd-example">
        <span />
        <span />
        <span />
      </div>
    </div>
    <div id="navMenubd-example" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            <font-awesome-layers class="fa-1x">
              <font-awesome-icon :icon="['fas', 'globe']" />
            </font-awesome-layers>
          </a>
          <div class="navbar-dropdown">
            <nuxt-link class="navbar-item" to="/">
              En
            </nuxt-link>
            <nuxt-link class="navbar-item" to="/pt/">
              Pt
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBar',
  components: {},
})
</script>

<style scoped></style>
