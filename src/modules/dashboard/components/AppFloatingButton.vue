<template>
  <v-speed-dial
    v-model="fab"
    fixed
    bottom
    right
    direction="top"
    transition="slide-y-reverse-transition"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="primary"
        fab
      >
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-plus</v-icon>

      </v-btn>
    </template>
    <v-btn
      color="error"
      fab
      small
      title="Nova Despesa"
      @click="addRecord('debit')"
    >
      <v-icon>mdi-minus</v-icon>
    </v-btn>
    <v-btn
      color="primary"
      fab
      small
      title="Nova Receita"
      @click="addRecord('credit')"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  name: 'AppFloatingButton',
  data: () => ({
    fab: false
  }),
  methods: {
    addRecord (type) {
      this.$router.push({
        name: 'recordsAdd',
        query: { type }
      })
    }
  }
}
</script>
