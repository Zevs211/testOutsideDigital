<template>
  <button class="btn" :class="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: {
      type: String,
      default: "filled",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  height: 54px;
  border-radius: 6px;
  padding: 0 30px;
  margin-top: 40px;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;

  user-select: none;
  cursor: pointer;
  transition: color 0.25s, background-color 0.25s;

  &:disabled {
    background-color: #bec5cc;
    pointer-events: none;
    box-shadow: none;
  }
}

.filled {
  border: 1px solid;
  background-color: #ff5e56;
  box-shadow: 0px 0px 24px #f8abb8;
  &:hover {
    background-color: #ea0029;
  }
}

.outlined {
  background-color: transparent;
  border: 1px solid #ffffff;
  &:hover {
    color: #000000;
    background-color: white;
  }
}
</style>
