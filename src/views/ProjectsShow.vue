<template>
  <Explorer>
    <h1>Projo</h1>
  </Explorer>
</template>

<script>
import Explorer from "@/components/Explorer.vue";

export default {
  components: {
    Explorer,
  },
  props: {
    project: {
      type: Object,
      require: true,
    },
  },
};
</script>
