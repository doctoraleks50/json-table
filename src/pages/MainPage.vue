<template>
  <div class="container">
    <json-table :per-page-members="perPageMembers"/>
    <div class="action-group">
      <div class="sort-by">
        <span class="label">
          Sort by:
        </span>
        <div>
          <select
              class="custom-select custom-select-sm"
              size="1"
              v-model="columnName"
              @change="sortBy"
          >
            <option value="id">id</option>
            <option value="name">name</option>
            <option value="position">position</option>
          </select>
        </div>
      </div>
      <pagination
        :page-numbers="pageNumbers"
        :current-page="currentPage"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import Pagination from "@/components/Pagination";
import JsonTable from "@/components/JsonTable";

export default {
  name: "MainPage",
  components: {
    Pagination,
    JsonTable
  },
  data() {
    return {
      columnName: 'id'
    }
  },
  methods: {
    ...mapActions([
        'fetchMembers'
    ]),
    sortBy() {
      this.$store.commit('sortByColumn', this.columnName);
    }
  },
  computed: {
    ...mapState([
        'members'
    ]),
    ...mapGetters([
        'getPerPageMembers'
    ]),
    perPageMembers() {
      return this.getPerPageMembers(this.currentPage, 3)
    },
    pageNumbers() {
      return Math.ceil(this.members.length / 3)
    },
    currentPage() {
      return +this.$route.query.page || 1
    },
  },
  mounted() {
    this.fetchMembers();
  }
}
</script>

<style lang="scss">
@import '@/styles'
</style>
