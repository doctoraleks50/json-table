<template>
  <div>
    <table class="table table-bordered table-responsive-md table-hover">
      <thead>
      <tr class="thead-light text-center ">
        <th>ID</th>
        <th>Name</th>
        <th>Position</th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-center" v-for="member in perPageMembers">
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