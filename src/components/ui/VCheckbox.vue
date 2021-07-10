<template>
  <div class="check-main">
    <label class="main">
      <input type="checkbox" v-model="checked" />
      <span class="geekmark"></span>
    </label>
    <div class="check-title"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "VCheckbox",
  props: {
    value: {},
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.check-main {
  display: flex;
}
.check-title {
  margin-top: 23px;
  user-select: none;
}
.main {
  width: 0;
  display: flex;
  position: relative;
  margin: 20px 30px 20px 0;
  cursor: pointer;
  user-select: none;
}
.content {
  padding-left: 15px;
}

input[type="checkbox"] {
  visibility: hidden;
}

.geekmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dfe3e6;
  transition: background-color 0.25s, border 0.25s;
}

.main:hover input ~ .geekmark {
  border: 1px solid #000000;
}

.main input:checked ~ .geekmark {
  background-color: #ff5e56;
  // border: none;
}

.geekmark:after {
  content: "";
  position: absolute;
  display: none;
}

.main input:checked ~ .geekmark:after {
  display: block;
}

.main .geekmark:after {
  content: "";
  position: absolute;
  left: 3px;
  top: 5px;
  width: 12px;
  height: 5px;

  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(-45deg);
}
</style>
