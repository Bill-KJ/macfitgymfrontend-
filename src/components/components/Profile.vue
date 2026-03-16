<script setup> 
      const  userDetails = JSON.parse(localStorage.getItem('userDetails'))
</script>

<template>
    <v-container style="background-color: bisque" class="mt-12" width="50%">
        <v-row>
            <v-col>
                <v-img src=""class="h-50"cover></v-img>
                <v-card-text>{{ userDetails.name }}</v-card-text>
                <v-card-text>{{ userDetails.email}}</v-card-text>
                <v-card-text>{{ userDetails.phoneNumber}}</v-card-text>
                <v-card-text>{{ userDetails.gymLocation }}</v-card-text>
                <div v-if="userDetails.subscription">
                <v-card-text>Your current subscription is :{{ userDetails.subscription.name }}at{{ userDetails.subscription.price }}</v-card-text>
                </div>
                <div v-else>
                    <v-btn color="primary" variant="outlined" to="/bundles">Select a bundle</v-btn>
                </div>
            </v-col>
        </v-row>
    </v-container>
    
</template>