<script setup>

</script>

<template>
    <v-container style="background-color: bisque" class="mt-12">
        <v-row>
            <div class="text-display-medium mb15">packages</div>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-clock-outline"size="large" class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">Daily pass </v-card-title>
                    <v-card>500Ksh</v-card>
                </v-card>
            </v-col>
             <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">1 Month </v-card-title>
                    <v-card>8000Ksh</v-card>
                </v-card>
             </v-col>
             <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">3 Months </v-card-title>
                    <v-card>17000Ksh</v-card>
                </v-card>
             </v-col>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">3 Months </v-card-title>
                    <v-card>17000Ksh</v-card>
                </v-card>
             </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card class="text-center">
                <v-icon colour="#B6B6B6" icon="mdi-clock-outline"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">12 Months </v-card-title>
                    <v-card>60000Ksh</v-card>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!--What is included-->
    <v-container  style="background-color: bisque" class="mt-12">
        <v-row> 
            <v-col class="text-display-medium mb 12">Package Benefits</v-col>
        </v-row>
        <v-row>
             <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-access-point"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">free wifi </v-card-title>
                </v-card>
             </v-col>
              <v-col md="5">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-food-turkey"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">Diet recommendation</v-card-title>
                </v-card>
             </v-col>
              <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-clock-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">24/7 gym access </v-card-title>
                </v-card>
             </v-col>
        </v-row>
        <v-row>
             <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#B6B6B6" icon="mdi-dumbbell"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">equipment </v-card-title>
                </v-card>
             </v-col>
              <v-col md="3">
                <v-card class="text-center">
                    <v-icon  colour="#FFBBDD" icon="mdi-shower"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">shower </v-card-title>
                </v-card>
             </v-col>
        </v-row>
    </v-container>
    <!--How to join-->
    <v-container  style="background-color: bisque" class="mt-12">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-8">HOW TO JOIN</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item>1.Select prefered bundle</v-list-item>
                    <v-list-item>2.Fill in the appplication form</v-list-item>
                    <v-list-item>3.Make first period's payment.</v-list-item>
                    <v-list-item>4.Visit the gym to acquire a membership card.</v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>