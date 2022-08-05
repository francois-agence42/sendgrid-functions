<template>
  <section>
    <form @submit.prevent="sendMail()">
      <div class="grid">
        <label for="firstname">
          First name
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First name"
            v-model="firstname"
            required
          />
        </label>

        <label for="lastname">
          Last name
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last name"
            v-model="lastname"
            required
          />
        </label>
      </div>

      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email address"
        v-model="email"
        required
      />
      <label for="message">your message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message"
        v-model="message"
        rows="5"
        required
      />
      <!-- <small>Hey</small> -->

      <!-- Button -->
      <button type="submit">Submit</button>
    </form>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      formName: "Contact",
      message: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    sendMail() {
      fetch("https://sendgridfunctions.netlify.app/.netlify/functions/hello", {
        method: "POST",
        body: JSON.stringify({
          formName: this.formName,
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          message: this.message,
        }),
      })
        .then((res) => {
          res = res.json();
          if (res.status === 200) {
            this.$router.push("/thank-you");
          }
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
