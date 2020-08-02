<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-1">
          <img src="~/assets/images/logo.svg" alt="SCIDOC" width="100" />
          {{ $t('home.title') }}
        </h1>
        <p class="subtitle is-3">
          {{ $t('home.subtitle') }}
        </p>
        <p class="has-padding-top-7">
          {{ $t('home.introduction') }}
        </p>
        <p class="has-padding-top-7">
          {{ $t('home.subintroduction') }}
          <a class="is-primary" href="mailto:interests@scidoc.dev">
            interests@scidoc.dev
            <font-awesome-layers class="fa-1x">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </font-awesome-layers>
          </a>
          .
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped></style>
