<template>
  <ul class="pagination pagination-sm">
    <li class="page-item">
      <router-link
          class="page-link"
          :to="previousPage"
      >
        <
      </router-link>
    </li>
    <li
        class="page-item"
        :class="currentPage === pageNumber ? 'active' : ''"
        v-for="pageNumber in pageNumbers"
    >
      <router-link
          :to="{
              query: {
                page: pageNumber
              }
            }"
          class="page-link"
      >
        {{ pageNumber }}
      </router-link>
    </li>
    <li class="page-item">
      <router-link
        class="page-link"
        :to="nextPage"
      >
        >
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: ['pageNumbers', 'currentPage'],
  computed: {
    nextPage() {
      return {
        query: {
          page: (this.currentPage < this.pageNumbers) ? this.currentPage + 1 : this.pageNumbers
        }
      }
    },
      previousPage() {
        return {
          query: {
            page: (this.currentPage > 1) ? this.currentPage - 1 : 1
          }
        }
      }
    }
}
</script>
