<template>
  <section class="section">
    <div class="container">
      <transition appear appear-active-class="animated fadeIn">
        <div class="box">
          <h2 class="title">Sign Up</h2>
          <form @submit.prevent="signUp">
            <div class="field">
              <label class="label">Username</label>
              <div class="control">
                <input v-model="signUpForm.username" class="input" type="text" placeholder="Username">
              </div>
              <p v-if="error" class="help is-danger">{{ error }}</p>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="signUpForm.email" class="input" type="email" placeholder="Email">
              </div>
              <p v-if="error" class="help is-danger">{{ error }}</p>
            </div>
            <div class="field">
              <label class="label">Password</label>
              <div class="control">
                <input v-model="signUpForm.password" class="input" type="password" placeholder="Password">
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control">
                <button class="button is-dark">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
const url = 'https://moodpix.herokuapp.com'

export default {
  name: 'signup',
  data() {
    return {
      signUpForm: {
        username: '',
        email: '',
        password: '',
      },
      error: null
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
      .then(response => {
        if (response.error) {
          this.error = response.error
        } else {
          localStorage.setItem('token', response.token)
          location.href = '/'
        }
      })
    }
  }
}
</script>
