<template>
  <div class="text-button">
    <slot />
  </div>
</template>

<script>
export default {
  name: "VTextButton",
};
</script>

<style lang="scss" scoped>
.text-button {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #ea0029;
  transition: color 0.25s;
  &:hover {
    cursor: pointer;
    color: #f53a31;
  }
}
</style>
