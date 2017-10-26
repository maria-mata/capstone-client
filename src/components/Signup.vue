<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title">Sign Up</h2>
        <form @submit.prevent="signUp">
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input v-model="signUpForm.username" class="input" type="text" placeholder="Username">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input v-model="signUpForm.email" class="input" type="email" placeholder="Email">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input v-model="signUpForm.password" class="input" type="password" placeholder="Password">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <!-- <div class="control">
              <button class="button is-link">Cancel</button>
            </div> -->
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
const url = 'https://moodpix.herokuapp.com'
// const url = 'http://localhost:5000'

export default {
  name: 'signup',
  data() {
    return {
      signUpForm: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signUp() {
      const settings = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.signUpForm.username,
          email: this.signUpForm.email,
          password: this.signUpForm.password
        })
      }
      fetch(`${url}/signup`, settings)
      .then(response => response.json())
      .then(response => console.log(response))
    }
  }
}
</script>
