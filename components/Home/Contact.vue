<template>
  <div class="contact">
    <div class="heading">
      <h1>Need My Expertise?</h1>
    </div>
    <p>Drop a message and I'll contact you right back</p>
    <form @click.stop.prevent="submitForm" class="form">
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
    <div class="btn" @click="submitForm">
      Send
    </div>

    <div class="social">
      <p>Or Connect With Me On</p>
      <div class="brands"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      console.log("Not Yet Implemented");
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
  }
  .social {
    p {
      font-size: 3rem;
    }
    .brands {
      align-self: center;
      width: 100%;
      @extend %display-flex;
    }
  }
}
</style>
