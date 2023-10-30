<script setup lang="ts">
import SalesCard from "@/components/dashboard/SalesCard.vue"

</script>

<template>
  <div class="pa-5">
    <!-- First Row -->
    <v-row class="flex-0" dense>
      <v-col cols="12" xl="4">
        <v-card height="420">
          <sales-card
            :value="1837.32"
            class="h-100"
            :percentage="3.2"
            style="min-height: 380px"
            :percentage-label="$t('dashboard.lastweek')"
            :action-label="$t('dashboard.viewReport')"
          ></sales-card>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" xl="4">
        <!-- Activity Card -->
        <v-card height="420">
          
        </v-card>
      </v-col>
      <v-col cols="12" md="6" xl="4">
        <v-card height="420">
          
        </v-card>
      </v-col>
    </v-row>

    <!-- Second Row  -->
    <v-row class="flex-grow-0" dense>
      <v-col cols="12" xl="4">
        <!-- Table Card  -->
        <v-card height="420">
          
        </v-card>
      </v-col>
      <v-col cols="12" xl="4">
        <!-- Task Card  -->
        <v-card height="420">
          
        </v-card>
      </v-col>
    </v-row>

    <!-- Third Row  -->
    <v-row class="flex-grow-0" dense>
      <!-- Target Card  -->
      <v-card height="420">
        
      </v-card>

    </v-row>
  </div>
</template>