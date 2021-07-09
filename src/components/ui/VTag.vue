<template>
  <div class="v-tag">
    <div class="v-tag__text"><slot /></div>
  </div>
</template>

<script>
export default {
  name: "VTag",
};
</script>

<style lang="scss" scoped>
.v-tag {
  height: 36px;
  width: fit-content;
  background: #eef0f2;
  border-radius: 50px;
  cursor: pointer;
  user-select: none;

  &__text {
    font-family: Lab Grotesque;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    height: 36px;
    padding: 0 12px;

    color: #000000;
    &:active {
      color: #ffffff;
    }
  }
  &:hover {
    background: #dfe3e6;
  }
  &:active {
    background: #ff5e56;
  }
}
</style>
