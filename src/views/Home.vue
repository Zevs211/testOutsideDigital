<template>
  <div class="home">
    <!-- <v-input label="Текст один" />
    <br />
    <br />
    <v-input label="Текст один" disabled v-model="inputValue" />
    <br />
    <br />
    <v-input label="Текст .df" required v-model="inputValue" /> -->

    <v-button type="outlined"> Кнопка </v-button>
    <tax-deduction />
  </div>
</template>

<script>
import VButton from "@/components/ui/VButton.vue";
import TaxDeduction from "@/components/TaxDeduction.vue";

export default {
  name: "Home",
  components: {
    VButton,
    TaxDeduction,
  },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #ff5e56;
}
</style>
