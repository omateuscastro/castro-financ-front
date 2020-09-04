<template>
  <v-list two-line="">
    <v-subheader></v-subheader>
    <RecordsListItem
      v-for="record in records"
      :key="record.id"
      :record="record"
    />
    <v-divider></v-divider>
  </v-list>
</template>

<script>

import RecordsListItem from './RecordsListItem'
import RecordsService from './../services/records-service'

export default {
  name: 'RecordsList',
  components: {
    RecordsListItem
  },
  data: () => ({
    records: []
  }),
  async created () {
    this.records = await RecordsService.records()
  }
}
</script>
