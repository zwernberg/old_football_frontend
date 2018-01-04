<template>
  <div class="container">

    <h1>{{ msg }}</h1>
    <div v-for="(league, index) in leagues" :key="index">
      <h2> {{  league.metadata.division  }} </h2>
      <h3> Week {{  league.scoreboard.matchupPeriodId  }} </h3>
      <div v-for="(matchup, index) in league.scoreboard.matchups" :key="index">
        <Matchup v-bind:matchup="matchup"></Matchup>
      </div>

      <br />
    </div>

  </div>
</template>
<script>
import Matchup from './Matchup'
export default {
  name: 'Matchups',
  props: {
    week: {
      default: 1
    }
  },
  components: {
    Matchup,
  },
  data () {
    return {
      msg: 'Matchups',
      leagues: [],
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      var url = 'http://schumacher.football/api/scoreboard/?matchupPeriodId=' + this.week;
        this.axios.get(url)
        .then((response) => {
          this.leagues = response.data.leagues
        });
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
