<template>
  <v-toolbar color="primary">
    <v-layout align-center>
      <v-flex xs1>
        <div class="text-xs-left">
          <v-btn
            icon
            @click="decrement"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </div>
      </v-flex>
      <v-flex xs10>
        <v-toolbar-title class="text-center white--text">
          <span> {{ currentMonth }} </span>
        </v-toolbar-title>
      </v-flex>

      <v-flex xs1>
        <div class="text-xs-right">
          <v-btn
            icon
            @click="increment"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </v-flex>

    </v-layout>
  </v-toolbar>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ToolbarByMonth',
  props: {
    format: String
  },
  data: () => ({
    date: moment()
  }),
  computed: {
    currentMonth () {
      return this.date.format('MMMM YYYY')
    }
  },
  created () {
    this.emit()
  },
  methods: {
    emit () {
      this.$emit('month', this.date.format(this.format))
    },
    increment () {
      this.date = this.date.clone().add(1, 'month')
      this.emit()
    },
    decrement () {
      this.date = this.date.clone().subtract(1, 'month')
      this.emit()
    }
  }
}
</script>
