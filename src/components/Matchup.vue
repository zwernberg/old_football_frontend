<template>
  <div class="container matchup">

    <div class="container mt-5" >
            <div class="row" >
                <div class="col-sm-6" v-for='(team,index) in matchup.teams' :key='index'>
                    <h2 class="text-center">{{ team.team.teamLocation }} {{ team.team.teamNickname }} </h2>
                    <table class="table">
                        <tbody>
                            <tr><td><p class="text-left font-weight-bold">TOTAL</p></td>
                            <td><p class="text-left"></p></td>
                            <td><p class="text-right font-weight-bold">{{team.score}}<icon name="check" v-if="winner(team)"></icon></p></td>
                        </tr>
                    </tbody></table>
                </div>
              </div>
        </div>
  </div>
</template>
<script>
export default {
  name: 'Matchup',
  data () {
    return {
      msg: 'Matchup',
    }
  },
  props: ['matchup'],
  methods: {
    winner: function(team) {
      var location = team.home ? 'home' : 'away';
      return this.matchup.winner === location
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .matchup {
    background-color: #e9ecef;
  }
</style>
