<template>
  <div class="checkbox">
    <label class="checkbox__box">
      <input type="checkbox" v-model="checked" />
      <span></span>
    </label>
    <div class="checkbox__title"><slot /></div>
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
.checkbox {
  display: flex;
  align-items: center;
  &__title {
    user-select: none;
  }
  &__box {
    width: 0;
    display: flex;
    position: relative;
    margin: 0px 30px 12px 0;
    cursor: pointer;
    user-select: none;
    span {
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
    span:after {
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
    &:hover span {
      border: 1px solid #000000;
    }
    input:checked ~ span {
      background-color: #ff5e56;
    }
    input:checked ~ span:after {
      display: block;
    }
  }
  input[type="checkbox"] {
    visibility: hidden;
  }
}
</style>
