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
      <label for="message">Your message</label>
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
      <button type="submit" :aria-busy="isLoading">Submit</button>
    </form>
    <mark v-if="error" style="margin: 0 auto">
      Une erreur est survenue lors de l'envoi du message.
    </mark>
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
      isLoading: false,
      error: false,
    };
  },
  methods: {
    async sendMail() {
      this.isLoading = true;
      try {
        const response = await fetch(
          "https://sendgridfunctions.netlify.app/.netlify/functions/hello",
          {
            method: "POST",
            body: JSON.stringify({
              formName: this.formName,
              firstname: this.firstname,
              lastname: this.lastname,
              email: this.email,
              message: this.message,
            }),
          }
        );
        console.log("response.status: ", response.status); // 👉️ 200
        console.log(response);
      } catch (error) {
        this.error = true;
        this.isLoading = false;
        console.log(error);
      }
      //     .then((res) => {
      //       this.isLoading = false;
      //       res = res.json();
      //       console.log("res", res);
      //       if (res.status == 200) {
      //         this.$router.push("/thank-you");
      //       }
      //     })
      //     .then((data) => {
      //       console.log("data", data);
      //       // this.$router.push("/thank-you");
      //     })
      //     .catch((err) => {
      //       this.error = true;
      //       this.isLoading = false;
      //       console.log(err);
      //     });
      // },
    },
  },
};
</script>
