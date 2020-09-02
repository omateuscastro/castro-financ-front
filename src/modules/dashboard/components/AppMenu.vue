<template>
  <v-navigation-drawer
    :value="value"
    @input="$emit('input', $event)"
    :mini-variant.sync="mini"
    absolute
    temporary
  >
    <v-list>
      <v-list-item
        v-if="mini"
        @click.stop="mini = !mini"
      >
        <v-btn icon>
          <v-icon>mdi-chevron-right</v-icon>

        </v-btn>
      </v-list-item>

      <v-list-item tag="div">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ user.name }} </v-list-item-title>
        </v-list-item-content>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>

    <v-list
      class="pt-0"
      dense
    >
      <v-divider light=""></v-divider>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.url"
        :exact="item.exact"
        @click.stop="$emit('input', false)"
      >
        <v-icon> {{ item.icon }}}</v-icon>

        <v-list-item-title> {{item.title }}</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>

import AuthService from '@/modules/auth/services/auth-service'

export default {
  name: 'AppMenu',
  props: {
    value: Boolean
  },
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-menu', url: '/dashboard', exact: true }
    ],
    mini: false,
    user: {}
  }),
  async created () {
    this.user = await AuthService.user()
  }
}
</script>
