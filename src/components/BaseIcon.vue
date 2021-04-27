<template>
  <div class="icons d-flex justify-center align-center">
    <img :alt="imgSource" :src="imgsource" />
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
  data() {
    return {
      imgsrc: "../assets/" + this.name + ".png",
    };
  },
  created() {
    this.imgsrc = "../assets/" + this.name + ".png";
  },
  computed: {
    imgSource() {
      return "../assets/" + this.name + ".png";
    },
  },
};
</script>
