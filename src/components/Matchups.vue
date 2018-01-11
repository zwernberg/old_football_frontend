<template>
  <div class="container">

    <b-jumbotron header="weekly results recap" :lead="note.author" v-for="note in notes" :key="note + note.week">
      {{note.text}}
    </b-jumbotron>
    <h1>{{ msg }}</h1>
    <div v-for="(league, index) in leagues" :key="index">
      <h2> {{  league.metadata.division  }} </h2>
      <h3> Week {{  league.scoreboard.matchupPeriodId  }} </h3>
      <div v-for="(matchup, _matchup) in league.scoreboard.matchups" :key="_matchup">
        <Matchup v-bind:matchup="matchup"></Matchup>
      </div>
      <br />

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
      notes: []
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
      var url = 'http://schumacher.football/api/week/' + this.week;
        this.axios.get(url)
        .then((response) => {
          this.leagues = response.data.leagues
          this.notes = response.data.notes
        });
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
