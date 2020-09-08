<template>
  <v-card :color="color">
    <v-card-title primary-text>
      <div class="text-center ma-auto white--text">
        <p class="subheading">Saldo Atual</p>
        <h1 class="display-2">{{totalInCurrency}}</h1>
      </div>
    </v-card-title>
  </v-card>
</template>

<script>

import formatCurrencyMixin from '@/mixins/format-currency'
import RecordsService from './../services/records-service'

export default {
  name: 'TotalBalance',
  mixins: [
    formatCurrencyMixin
  ],
  data: () => ({
    total: 0
  }),
  computed: {
    color () {
      return this.total < 0 ? 'error' : 'primary'
    },
    totalInCurrency () {
      return this.formatCurrency(this.total)
    }
  },
  async created () {
    this.total = await RecordsService.totalBalance()
  }
}
</script>
