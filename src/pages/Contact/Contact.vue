<style src="./contact.scss" lang="scss" scoped></style>

<template>
  <div class="contact full-height flex-desktop">
    <div class="say-hello">
      <h2>Need help with a new project? Get in touch!</h2>
      <form
        name="new-contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleSubmit"
      >
        <input type="hidden" name="form-name" value="new-contact" />
        <input v-model="form.email" type="email" name="email" placeholder="your email" />
        <select v-model="form['project-type']" name="project-type">
          <option>I want to talk about</option>
          <option value="coaching">Coaching</option>
          <option value="Speaking">Speaking</option>
          <option value="Short-term project">Short-term project</option>
          <option value="Long-term project">Long-term project</option>
          <option value="Code review">Code review</option>
        </select>
        <textarea
          v-model="form['project-details']"
          name="project-details"
          placeholder="some more details"
        ></textarea>
        <button>
          <span v-if="!sent">
            send<svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="paper-plane"
              class="send-mail-svg"
              role="img"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
              />
            </svg>
          </span>
          <span v-else>
            sent
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      sent: false,
      form: {
        email: "",
        "project-type": "",
        "project-details": "",
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join("&");
    },
    handleSubmit() {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" },
      };
      axios
        .post(
          "/",
          this.encode({
            "form-name": "new-contact",
            ...this.form,
          }),
          axiosConfig
        )
        .then(() => {
          this.sent = true;
        })
        .catch(() => {
          this.sent = false;
        });
    },
  },
};
</script>
