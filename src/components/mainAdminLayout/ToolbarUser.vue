<script setup lang="ts">

</script>
<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn class="mx-2" icon v-bind="props">
        <v-badge content="2" color="success" dot bordered>
          <v-avatar size="40">
            <v-img
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></v-img>
          </v-avatar>
        </v-badge></v-btn>
    </template>
  </v-menu>
</template>


