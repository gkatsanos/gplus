<style src="./contact.scss" lang="scss"></style>

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
        <input
          v-model="form.email"
          class="input"
          autofocus
          required
          type="email"
          name="email"
          placeholder="your email"
        />
        <select v-model="form['project-type']" class="input" name="project-type">
          <option value="coaching">Coaching</option>
          <option value="Speaking">Speaking</option>
          <option value="Short-term project">Short-term project</option>
          <option value="Long-term project">Long-term project</option>
          <option value="Code review">Code review</option>
        </select>
        <textarea
          v-model="form['project-details']"
          class="input"
          name="project-details"
          placeholder="some more details"
        ></textarea>
        <button :disabled="sent || error" :class="{ error, sent, input: true }">
          <transition name="icon" mode="out-in">
            <span v-if="!sent" key="before" class="button-content">
              send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-icon="paper-plane"
                class="button-svg"
                role="img"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                />
              </svg>
            </span>
            <span v-else-if="!error" key="after" class="button-content">
              <svg
                aria-hidden="true"
                focusable="false"
                data-icon="check"
                class="button-svg"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="green"
                  d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                ></path>
              </svg>
            </span>
            <span v-else>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="times"
                class="button-svg"
                role="img"
                viewBox="0 0 352 512"
              >
                <path
                  fill="red"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                />
              </svg>
            </span>
          </transition>
        </button>
        <div v-if="error" class="error-message">
          An error has occured while sending the message, please contact me at george@gplus.gr
          directly.
        </div>
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
      error: false,
      form: {
        email: "",
        "project-type": "Short-term project",
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
      this.sent = true;
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
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>
