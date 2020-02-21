<template>
  <div class="container" id="exchangeForm">
    <div class="row">
      <div class="col-sm-4">
        <p>Euro</p>
        <input type="text" id="amount" placeholder="Amount" class="form-control" v-model="euro" />
      </div>
      <div class="col-sm-4">
        <p>Välj Valuta</p>
        <select name="Currency" id="currency" class="custom-select" v-model="selectedcurrency">
          <option v-for="rates in rateListEuro" :key="rates[0]" :value="rates">{{ rates[0] }}</option>
        </select>
        <!-- <select
          v-else
          name="Currency"
          id="currency"
          class="custom-select"
          v-model="selectedcurrency"
        >
          <option v-for="rates in rateListEuro" :key="rates[0]" :value="rates">{{ rates[0] }}</option>
        </select>-->
      </div>
      <div class="col-sm-4">
        <p>Uppdaterat:</p>
        <p v-if="currenciesEuro">{{ currenciesEuro.date }}</p>
        <input type="button" value="Exchange" v-on:click="calculateExchange" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card-body card-body-cascade text-center">
          <div id="exchanged">
            <p
              v-if="exchangedResult"
            >{{ (Number(euro)).toLocaleString('sv-SE') }} {{ '' + currenciesEuro.base }}</p>
            <p v-if="exchangedResult">=</p>
            <p
              v-if="exchangedResult"
            >{{ (exchangedResult).toLocaleString('sv-SE') }}{{ ' ' + exchangedCurrency }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EuroExchange",
  props: {
    // currenciesEuro: Object,
    // rateListEuro: Array,
    // selectedcurrency: String,
    // euro: String
  },
  computed: {
    selectedcurrency: {
      get() {
        return this.$store.state.selectedcurrency;
      },
      set(selectedcurrency) {
        this.$store.commit("saveCurrency", selectedcurrency);
      }
    }
  },
  data: function() {
    return {
      rateListEuro: null,
      currenciesEuro: null,
      // selectedcurrency: null,
      euro: null,
      exchangedResult: null
    };
  },
  methods: {
    fetchRates() {
      fetch("https://api.exchangeratesapi.io/latest?base=EUR")
        .then(response => response.json())
        .then(result => {
          this.currenciesEuro = result;
          this.rateListEuro = Object.entries(result.rates);
        });
    },
    calculateExchange() {
      if (this.selectedcurrency && this.euro) {
        this.exchangedResult = this.selectedcurrency[1] * this.euro;
        // this.$store.commit("saveCurrency", this.selectedcurrency[0]);
      }
    }
  },
  created() {
    this.fetchRates();
  },
  watch: {
    selectedcurrency() {
      if (this.selectedcurrency) {
        this.exchangedCurrency = this.selectedcurrency[0];
        console.log(this.selectedcurrency);
      }
    }
  }
};
</script>

<style scoped>
p {
  font-size: 2rem;
  color: white;
}
#exchangeForm {
  height: 450px;
  border: 1px black solid;
  border-radius: 5px;
  background-color: rgba(52, 58, 64, 0.94);
}
</style>

