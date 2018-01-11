<template>
  <div id="app">
    <b-navbar sticky toggleable type="light" variant="light">
        <b-navbar-toggle target="nav_text_collapse"></b-navbar-toggle>
        <b-navbar-brand>Schumacher Fantasy Football</b-navbar-brand>
        <b-collapse is-nav id="nav_text_collapse">
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'Home'}">Home</b-nav-item>
              <b-nav-item-dropdown text="Matchups" right>
                <div v-for="(weekNumber, index) in weeks" :key="index">
                  <b-dropdown-item :to="{ name: 'Matchups', params: { week: weekNumber }}">Week {{weekNumber}}</b-dropdown-item>
                </div>
              </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      weeks: [1,2,3,4,5,6,7,8,9,10,11,12,13],
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
