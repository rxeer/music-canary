<template>
  <loader-container :loading="loading">
    <div class="visitors" v-if="getFormattedList.length">
      <div class="table-block">
        <table class="visitors-table" cellspacing="0" cellpadding="0">
          <thead>
            <tr>
              <th v-for="column in columns" :key="column.label">
                {{ column.label }}
              </th>
            </tr>
          </thead>
          <template v-if="getFormattedList.length">
            <tbody>
              <tr v-for="(visitor, index) in getFormattedList" :key="index">
                <td
                  v-for="(column, columnIndex) in columns"
                  :key="visitor.id + columnIndex"
                >
                  <template v-if="column.field === 'avatar'">
                    <div class="avatar">
                      <img :src="visitor[column.field]" />
                    </div>
                  </template>
                  <template v-else>
                    {{ visitor[column.field] }}
                  </template>
                </td>
              </tr>
            </tbody>
          </template>
          <template v-else>
            <tbody>
              <tr v-for="(visitor, index) in getFormattedList" :key="index">
                <td colspan="5" style="padding: 22px">
                  No data
                </td>
              </tr>
            </tbody>
          </template>
        </table>
      </div>
    </div>
    <empty-block v-else />
  </loader-container>
</template>

<script>
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Component from 'vue-class-component';

import dayjs from 'dayjs';

import EmptyBlock from '@/components/empty-block';
import LoaderContainer from '@/components/loader-container';

@Component({
  components: {
    EmptyBlock,
    LoaderContainer,
  },
  computed: {
    getFormattedList() {
      return this.visitors.map((item) => ({
        ...item,
        createdAt: dayjs(item.createdAt).format('MM.DD.YYYY'),
      }));
    },
    ...mapGetters(['visitorsGetter']),
  },
  methods: {
    ...mapActions(['getVisitors']),
  },
})
class Visitors extends Vue {
  columns = [
    { field: 'id', label: 'ID' },
    { field: 'fullName', label: 'Fullname' },
    { field: 'createdAt', label: 'Date' },
    { field: 'count', label: 'Count' },
    { field: 'location', label: 'Location' },
  ];
  visitors = [];
  loading = false;
  placeholderImage = 'https://smk.org.uk/wp-content/uploads/avatar.jpg';

  async mounted() {
    this.loading = true;
    this.visitors = [
      {
        id: 34,
        firstName: 'Andrew',
        lastName: 'Canary',
        count: '4',
        location: 'Ukraine',
      },
      {
        id: 34,
        firstName: 'Andrew',
        lastName: 'Canary',
        count: '4',
        location: 'Ukraine',
      },
      {
        id: 34,
        firstName: 'Andrew',
        lastName: 'Canary',
        count: '4',
        location: 'Ukraine',
      },
      {
        id: 34,
        firstName: 'Andrew',
        lastName: 'Canary',
        count: '4',
        location: 'Ukraine',
      },
      {
        id: 34,
        firstName: 'Andrew',
        lastName: 'Canary',
        count: '4',
        location: 'Ukraine',
      },
    ];
    this.loading = false;
  }
}

export default Visitors;
</script>

<style lang="scss">
@import '@/assets/sass/visitors.scss';
</style>
