<script setup>
import{ref} from "vue"
import { useRouter} from "vue-router";

const router = useRouter();

const showBundleDialog = ref(false)
const isLoggedIn = localStorage.getItem("isLoggedIn")
const selectedBundle = ref(null)
const selectedPrice = ref(null)

function showBundle(name,price){
    if(isLoggedIn){
        selectedBundle.value = name
        selectedPrice.value =price 
        showBundleDialog.value = true //open popup   
    }else{
        router.push('/login')
    }
}
function subscribe(){
    const userDetails = JSON.parse(localStorage.getItem('userDetails'))
    userDetails.subscription={
        name: selectedBundle.value,
        price: selectedPrice.value

    }
    localStorage.setItem('userDetails', JSON.stringify(userDetails))
    showBundleDialog.value = false 
}
</script>

<template>
    <v-container style="background-color: bisque" class="mt-12">
        <v-row>
            <div class="text-display-medium mb15">packages and pricing</div>
        </v-row>
        <v-row>
            <div class="text-label-medium font-italic">Click on a bundle to subscribe</div>
        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center" @click="showBundle('Daily pass',500)">
                    <v-icon  colour="#B6B6B6" icon="mdi-clock-outline"size="large" class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">Daily pass </v-card-title>
                    <v-card>500Ksh</v-card>
                </v-card>
            </v-col>
             <v-col md="3">
                <v-card class="text-center"@click="showBundle('1 month',5500)">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">1 Month </v-card-title>
                    <v-card>5500Ksh</v-card>
                </v-card>
             </v-col>
             <v-col md="3">
                <v-card class="text-center"@click="showBundle('3 months',15000)">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">3 Months </v-card-title>
                    <v-card>15000Ksh</v-card>
                </v-card>
             </v-col>
            <v-col md="3">
                <v-card class="text-center"@click="showBundle('6 months',28000)">
                    <v-icon  colour="#B6B6B6" icon="mdi-calendar-check"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">6 Months </v-card-title>
                    <v-card>15000Ksh</v-card>
                </v-card>
             </v-col>
        </v-row>
        <v-row>
            <v-col md="12">
                <v-card class="text-center"@click="showBundle('12months',45000)">
                <v-icon colour="#B6B6B6" icon="mdi-clock-outline"size="large"  class="mt-8"></v-icon>
                    <v-card-title color="#FFFFFF">12 Months </v-card-title>
                    <v-card>45000Ksh</v-card>
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

    //dialog
    <v-dialog v-model="showBundleDialog" max-width="600" >

      <v-card prepend-icon="mdi-account" title="Subscribe to Bundle" >
        <v-card-text>
          You are about to subscribe to {{ selectedBundle }} at {{ selectedPrice }}. Click on the button below to complete payment
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
         <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="showBundleDialog = false" ></v-btn>
          <v-btn color="primary" variant="tonal" @click="subscribe()" >Subscribe</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>