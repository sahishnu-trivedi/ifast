<template>
  <div class="mainContainer">
    <div class="flexbox">
        <a href="#" class="theme-btn light-btn" @click="toggleThemeLight"> Light Theme </a>
        <a href="#" class="theme-btn dark-btn" @click="toggleThemeDark"> Dark Theme </a>
    </div>

    <div class="wrapper">
      <Profile />
      <Client />
      <Password />
    </div>
  </div>
</template>

<script>
  import Profile from '../components/Profile';
  import Client from '../components/Client';
  import Password from '../components/Password';

  export default {
    components:{
      Profile,
      Client,
      Password
    },
    data() {
      return {
        theme: 'light' // default theme to use when the site is first loaded
      }
    },
    watch: {
      theme(theme) {
        document.documentElement.dataset.theme = theme // this is where the magic happens
      } // the `dataset.theme` is the data-theme attribute I set in my SCSS file (highlighted above)
    },
    methods: {
      toggleThemeDark() {
        this.theme = 'dark' // switch theme to dark
      },
      toggleThemeLight() {
        this.theme = 'light' // switch theme to light
      }
    }
  }
</script>

<style lang="scss">

</style>
