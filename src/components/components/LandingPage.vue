<script setup>

</script>

<template>
    <v-container max-width="100%">
            <v-row>
                <v-carousel>
                    <v-carousel-item src="public/anastase-maragos-9dzWZQWZMdE-unsplash.jpg" cover></v-carousel-item>
                    <v-carousel-item src="public/sven-mieke-jO6vBWX9h9Y-unsplash.jpg" cover></v-carousel-item>
                    <v-carousel-item src="public/ambitious-studio-rick-barrett-1RNQ11ZODJM-unsplash.jpg" cover></v-carousel-item>
                </v-carousel>
            </v-row>
    </v-container>
    <!-- About Us -->
     <v-container style="background-color: beige" max-width="100%">
         <v-row>
            <v-col md="8"class="text-center">
                <div class="text-display-medium mb-12">Welcome to MacFit Gym, where fitness meets determination</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our facility is designed to help you achieve your fitness goals in a supportive and motivating environment. Whether you are just starting your fitness journey or pushing to reach new limits, this is the right place for you.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Our gym provides the equipment, space, and motivation you need to build strength, improve your health, and become the best version of yourself.</div>
                <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Your fitness journey starts here. Step into a space built for progress, energy, and transformation.We are committed to helping you reach your goals and push beyond your limits.</div>
                <v-btn color="#FFDDAA">LEARN MORE</v-btn>
            </v-col>
            <v-col md="4" class="d-flex align-center justify-center fill-height">
                <v-img src="danielle-cerullo-CQfNt66ttZM-unsplash.jpg"></v-img>
            </v-col>
         </v-row>
    </v-container>
    <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="danielle-cerullo-CQfNt66ttZM-unsplash.jpg" cover></v-img>
                    <v-card-title>Exercise is health</v-card-title>
                    <v-card-text>Exercise enable one to relax from a long days work.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="gentrit-sylejmani-JjUyjE-oEbM-unsplash.jpg" cover></v-img>
                    <v-card-title>Swimming</v-card-title>
                    <v-card-text>Swimming is a great way to push your body to new extremes. It allows you to clear your mind.It allow enables one to learn a variety of styles</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
             <v-col md="4">
                <v-card>
                    <v-img src="melanie-andersen-BzPldTqssWU-unsplash.jpg" cover></v-img>
                    <v-card-title>healthy eating</v-card-title>
                    <v-card-text>Eating nutritious food enables a person to get enough energy to be able to accomplish a day's goals.</v-card-text>
                    <v-btn color="#3A4B68">READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!--reviews-->
    <v-container>
        <v-row>
            <v-col md="3">
                 <v-card color="000000">
                    <v-card-text>sample review</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="3" active-color="primary"></v-rating>
                 </v-card>
            </v-col>
                <v-col md="3">
                 <v-card color="c0c0c0">
                    <v-card-text>MacFit has assisted me to get back in shape .</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="4" active-color="primary"></v-rating>
                 </v-card>
            </v-col>
                <v-col md="3">
                 <v-card color="c0c0c0">
                    <v-card-text>MacFit is easily accessible and at a secure location.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
                 </v-card>
            </v-col>
                <v-col md="3">
                 <v-card color="c0c0c0">
                    <v-card-text>Trainer at the MacFit gym are polite and motivational.</v-card-text>
                    <v-rating :length="5" :size="32" :model-value="4" active-color="primary"></v-rating>
                 </v-card>
            </v-col>
        </v-row>
    </v-container>

      <!--contact us-->
    <v-container style="background-color: " max-width="100%">
       <v-row class="text-center">
          <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Get in touch</div>
          <div class="text-title-large font-weight-light text-medium-emphasis mb-8">0745237512 | macfitfitness@gmail.com</div>
         <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Opening hours</div>
         <div class="text-title-large font-weight-light text-medium-emphasis mb-8">Mon-Fri: 5:00 am - 9:00pm | Sat:5.30 - 6.00pm | Sun: 7.00 am -2.00 pm</div>
         <div class="text-title-large font-weight-light text-medium-emphasis mb-8">MacFit Gym 3rd floor T-mall</div>

       </v-row> 
    </v-container>
</template>