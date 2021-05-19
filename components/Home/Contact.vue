<template>
  <div class="contact" id="contact">
    <div class="heading">
      <h1>Need My Expertise?</h1>
    </div>
    <p>Drop a message and I'll contact you right back</p>
    <form @click.stop.prevent class="form">
      <InputText
        :metadata="dataset.name"
        :val.sync="dataset.name.val"
        @input:val="dataset.name.val = $event"
      />
      <InputTextArea
        :metadata="dataset.email"
        :val.sync="dataset.email.val"
        @input:val="dataset.email.val = $event"
      />
      <InputEmail
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
        <a href="https://wa.me/919148220111" target="_blank" rel="noreferrer">
          <div v-html="require(`/static/icons/whatsapp.svg?raw`)" />
        </a>
        <a
          href="https://instagram.com/dazed._.confused"
          target="_blank"
          rel="noreferrer"
        >
          <div v-html="require(`/static/icons/instagram.svg?raw`)" />
        </a>
        <a
          href="https://www.linkedin.com/in/chauhanvats3/"
          target="_blank"
          rel="noreferrer"
        >
          <div v-html="require(`/static/icons/linkedin.svg?raw`)" />
        </a>
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
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.contact {
  margin: 50px 0;
  @extend %display-flex;
  align-items: flex-start;

  .heading {
    h1 {
      font-weight: 100;
      font-size: 5rem;
      color: $blue-dark;
      padding: 10px;
      text-transform: uppercase;
    }
  }

  p {
    font-size: 2.8rem;
    padding: 20px;
    padding-bottom: 0;
    color: $black;
  }

  .form {
    align-self: center;
    width: min(90%, 80ch);
  }
  .btn {
    margin: 30px;
    align-self: center;
    font-size: 2.5rem;
    color: $blue-metal;
    will-change: background-position;
  }

  .btn.sending {
    cursor: wait;
    background: linear-gradient(45deg, $blue-dark, $green-light);
    background-size: 200%;
    background-position: left;
    animation: movingGradientBG 0.8s ease-in-out infinite alternate;
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
    background-position: left;
    animation: movingGradientBG 2.5s ease-in-out infinite alternate;

    color: white;
  }

  .btn.disable {
    color: black;
    cursor: not-allowed;
    background: gray;
  }
  .social {
    width: 100%;
    p {
      font-size: 3rem;
    }
    .brands {
      align-self: center;
      width: 100%;
      margin: 20px;
      @extend %display-flex;
      flex-flow: row nowrap;
      justify-content: space-around;

      div {
        cursor: pointer;
      }
    }
  }

  @keyframes movingGradientBG {
    0% {
      background-position: left;
    }

    100% {
      background-position: right;
    }
  }
}
</style>
