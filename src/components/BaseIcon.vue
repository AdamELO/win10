<template>
  <div class="icons d-flex justify-center align-center">
    <img src=../assets/mail_icon.png :alt="name" />
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>
