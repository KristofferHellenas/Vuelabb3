<template>
  <div class="container" id="exchangeForm">
    <div class="row">
      <div class="col-sm-4">
        <p>Svenska Kronor</p>
        <input
          type="text"
          id="amount"
          placeholder="Amount"
          class="form-control"
          v-model="swedishcurrency"
        />
      </div>
      <div class="col-sm-4">
        <p>Välj Valuta</p>
        <select name="Currency" id="currency" class="custom-select" v-model="selectedcurrency">
          <option v-for="rates in rateList" :key="rates[0]" :value="rates">{{ rates[0] }}</option>
        </select>
      </div>
      <div class="col-sm-4">
        <p>Uppdaterat:</p>
        <p v-if="currencies">{{ currencies.date }}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card-body card-body-cascade text-center">
          <div id="exchanged">
            <p
              v-if="swedishcurrency && currencies"
            >{{ (Number(swedishcurrency)).toLocaleString('sv-SE') }} {{ '' + currencies.base }}</p>
            <p v-if="swedishcurrency && selectedcurrency && currencies">=</p>
            <p
              v-if="swedishcurrency && selectedcurrency && currencies"
            >{{ (selectedcurrency[1] * swedishcurrency).toLocaleString('sv-SE') }}{{ ' ' + exchangedCurrency }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SekExchange",
  props: {
    // currencies: Object,
    // rateList: Array,
    // selectedcurrency: String,
    // swedishcurrency: String
  },
  data: function() {
    return {
      rateList: null,
      currencies: null,
      selectedcurrency: null,
      swedishcurrency: null
    };
  },
  methods: {
    fetchRates() {
      fetch("https://api.exchangeratesapi.io/latest?base=SEK")
        .then(response => response.json())
        .then(result => {
          this.currencies = result;
          this.rateList = Object.entries(result.rates);
        });
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

