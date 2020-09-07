<template>
  <div>
    <table class="table table-bordered table-hover">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Position</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="member in perPageMembers">
        <td>{{ member.id }}</td>
        <td>{{ member.name }}</td>
        <td>{{ member.position }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "JsonTable",
  props: ['perPageMembers']
}
</script>