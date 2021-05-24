<template>
  <div class="contact" id="contact">
    <Heading heading="Need My Expertise?" />
    <p>Drop a message and I'll contact you right back</p>

    <form @click.stop.prevent class="form">
      <InputText
        :metadata="dataset.name"
        :val.sync="dataset.name.val"
        @input:val="dataset.name.val = $event"
      />

      <InputEmail
        :metadata="dataset.email"
        :val.sync="dataset.email.val"
        @input:val="dataset.email.val = $event"
      />

      <InputTextArea
        :metadata="dataset.message"
        :val.sync="dataset.message.val"
        @input:val="dataset.message.val = $event"
      />
    </form>

    <div class="btn" @click="submitForm($event)" ref="btn">
      Send
    </div>

    <div class="social">
      <p>Or Connect With Me On</p>
      <div class="brands">
        <div v-for="social in socials" :key="social.key">
          <a :href="social.link" target="_blank" rel="noreferrer">
            <div
              v-html="require(`/static/icons/${social.key}.svg?raw`)"
              class="drop-shadow"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm(e) {
      if (e.target.classList.contains("disable")) return;

      let valFill = this.validateFill();

      if (!valFill.res) {
        this.$refs.btn.innerText = `${valFill.error}`;
        this.$refs.btn.classList.add("error");
        return;
      }

      e.target.innerText = "Sending...";
      e.target.classList.add("sending");
      e.target.classList.remove("error");
      this.api_send_c_form({
        name: this.dataset.name.val,
        email: this.dataset.email.val,
        message: this.dataset.message.val,
        event: e
      });
    },
    async api_send_c_form({ name, email, message }) {
      let mailStatus;
      try {
        const mailURL = `/api/sendMail?name=${name}&email=${email}&message=${message}`;
        const mailResponse = await fetch(mailURL);
        const mailData = await mailResponse;

        if (mailData.status === 200) {
          mailStatus = "Mail Sent Successfully";
          this.$refs.btn.innerText = "Delivered";
          this.$refs.btn.classList.add("disable");
          this.$refs.btn.classList.remove("sending");
        } else {
          mailStatus = "Error Sending Mail";
          this.$refs.btn.innerText = "Error!";
          this.$refs.btn.classList.add("error");
          this.$refs.btn.classList.remove("sending");
        }
      } catch (err) {
        console.error(err);
        mailStatus = "Error Sending Mail";

        this.$refs.btn.innerText = "Error!";
        this.$refs.btn.classList.add("error");
      }
    },
    validateFill() {
      if (!this.dataset.name.val) return { res: false, error: "Name Required" };

      if (!this.dataset.email.val)
        return { res: false, error: "Email Required" };
      else if (!this.validateEmail(this.dataset.email.val))
        return { res: false, error: "Invalid Email" };

      if (!this.dataset.message.val)
        return { res: false, error: "Message Required" };

      return { res: true };
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  },
  data() {
    return {
      dataset: {
        name: {
          inputname: "Name",
          placeholder: "Jonathan Doe",
          id: "name",
          hint: "Or any alias you prefer.",
          val: ""
        },
        email: {
          inputname: "Email",
          placeholder: "john@doe.com",
          id: "email",
          hint: "I ain't gonna judge you on this, I promise.",
          val: ""
        },
        message: {
          inputname: "Message",
          placeholder: "So, I was out drinking with this dude...",
          id: "message",
          hint: "Let it all out!",
          val: ""
        }
      },
      socials: [
        {
          link: "https://wa.me/919148220111",
          icon: "/static/icons/whatsapp.svg?raw",
          key: "whatsapp"
        },
        {
          link: "https://instagram.com/dazed._.confused",
          icon: "/static/icons/instagram.svg?raw",
          key: "instagram"
        },
        {
          link: "https://www.linkedin.com/in/chauhanvats3/",
          icon: "/static/icons/linkedin.svg?raw",
          key: "linkedin"
        },

        {
          link: "https://github.com/chauhanvats3",
          icon: "/static/icons/github.svg?raw",
          key: "github"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.contact {
  @extend %display-flex;
  align-items: flex-start;

  p {
    font-size: 1.4rem;
    padding: 0 20px;
    padding-bottom: 0;
    color: $black;
    align-self: flex-start;

    @media (min-width: 1000px) {
      padding-left: 16%;
      margin: 0 15px;
    }
  }

  .form {
    align-self: center;
    width: min(90%, 60ch);
  }
  .btn {
    margin: 30px;
    align-self: center;
  }
  .btn.sending {
    cursor: wait;
    background: linear-gradient(
      103deg,
      $green-mid 0%,
      $green-mid 20%,
      $green-light 20%,
      $green-light 40%,
      $green-dark 40%,
      $green-dark 60%,
      $green-light 60%,
      $green-light 80%,
      $green-mid 80%,
      $green-mid 100%
    );
    background-size: 150%;
    background-position: left;
    animation: movingGradientBG 2.5s ease-in-out infinite alternate-reverse;
    color: white;
  }

  .btn.error {
    background: linear-gradient(
      103deg,
      #f44336 0%,
      #f44336 10%,
      #d32f2f 10%,
      #d32f2f 20%,
      #a81830 20%,
      #a81830 30%,
      #780018 30%,
      #780018 40%,
      #a81830 40%,
      #a81830 50%,
      #d32f2f 50%,
      #d32f2f 60%,
      #f44336 60%,
      #f44336 70%,
      #d32f2f 70%,
      #d32f2f 80%,
      #a81830 80%,
      #a81830 90%,
      #780018 90%,
      #780018 100%
    );

    background-size: 150%;
    background-position: center;

    color: white;
  }

  .btn.disable {
    color: white;
    cursor: not-allowed;
    background: linear-gradient(
      103deg,
      #191919 0%,
      #191919 20%,
      #363636 20%,
      #363636 40%,
      #3a3a3a 40%,
      #3a3a3a 60%,
      #202020 60%,
      #202020 80%,
      #101010 80%,
      #101010 100%
    );
    background-size: 150%;
    background-position: center;
  }
  .social {
    width: 100%;
    p {
      font-size: 1.5rem;
      @media (min-width: 1000px) {
        padding-left: 25%;
      }
    }
    .brands {
      align-self: center;
      width: 100%;
      margin: 20px;
      @extend %display-flex;
      flex-flow: row nowrap;
      justify-content: space-around;

      @media (min-width: 1000px) {
        padding: 0 25%;
      }

      div {
        cursor: pointer;
      }
    }
  }
}
</style>
