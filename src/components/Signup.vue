<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <h2 class="title">Sign Up</h2>
        <form>
          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input class="input" type="text" placeholder="Username">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input class="input" type="email" placeholder="Email">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="Password">
            </div>
            <!-- <p class="help is-success">This username is available</p> -->
            <!-- <p class="help is-danger">This email is invalid</p> -->
          </div>
          <div class="field is-grouped">
            <div class="control">
              <button class="button is-primary">Submit</button>
            </div>
            <div class="control">
              <button class="button is-link">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'signup'
}
</script>
