<script setup>
import { ref } from 'vue'

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)

  const confirmPassword=ref(null)
  const show1confirm=ref(false)

  //model
  const firstName=ref(null)
  const lastName =ref(null)
  const email=ref(null)
  const phoneNumber=ref(null)
  const gender=ref(null)
  const dob=ref(null)
  const gymLocation=ref(null)

  function signUp(){
    //create user object

    //store data
    const userDetails={
        name:firstName.value + lastName.value,
        email:email.value,
        phone:phoneNumber.value,
        dob:dob.value,
        gender:gender.value,
        gymLocation:gymLocation.value,
        password:password.value,
    }

    //store data
    try{
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
    }catch(err){
        console.error('Sign up process failed',err)
    }
  }
</script>

<template>
    <v-container width="50%" class="text-center mt-12">
        <v-row>
            <v-col md="12">
                <v-form>
                    <v-row>
                        <v-col md="12">
                            <v-icon color="#3A4B68" icon="mdi-weight-lifter" size="x-large"></v-icon>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div class="text-display-small font-weight-medium">Sign up to MacFit Gym</div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Firstname</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="firstName"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Lastname</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="lastName"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">email</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" v-model="email"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">phone number</div>
                        </v-col>
                        <v-col md="6">
                            <v-text-field variant="outlined" type ="number" v-model="phoneNumber"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Gender</div>
                        </v-col>
                        <v-col md="6">
                            <v-radio-group inline v-model="gender" >
                                <v-radio label="Male" value="male"></v-radio>
                                <v-radio label="Female" value="female"></v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Date of birth</div>
                        </v-col>
                        <v-col md="6">
                           <v-date-input variant="outlined" v-model="dob"></v-date-input>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Gym Location</div>
                        </v-col>
                        <v-col md="6">
                            <v-select
                                label="Select"
                                :items="['CBD', 'Madaraka', 'Westlands', 'Buruburu']"
                                variant="outlined"
                                v-model="gymLocation"
                            ></v-select>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Password</div>
                        </v-col>
                        <v-col md="6">
                             <v-text-field
                                    v-model="password"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    variant="outlined"
                                    @click:append="show1 = !show1"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                      <v-row>
                        <v-col md="6">
                            <div class="text-title-large font-weight-medium text-right">Confirm Password</div>
                        </v-col>
                        <v-col md="6">
                             <v-text-field
                                    v-model="confirmPassword"
                                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min]"
                                    :type="show1 ? 'text' : 'password'"
                                    variant="outlined"
                                    @click:append="show1confirm = !show1confirm "
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <v-btn color="#FFFFFF"variant="elevated" @click="signUp">Sign Up</v-btn>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="12">
                            <div>New to MacFit Gym? Create an account.</div>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>