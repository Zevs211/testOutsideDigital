<template>
  <div class="v-tag" :class="{ active: tag.isSelected }" @click="select">
    <div class="v-tag__text">{{ tag.name }}</div>
  </div>
</template>

<script>
export default {
  name: "VTag",
  props: {
    tag: {
      type: Object,
      default: () => ({
        id: 0,
        name: "",
        isSelected: false,
      }),
    },
  },
  methods: {
    select() {
      this.$emit("on-select", this.tag);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-tag {
  height: 36px;
  width: fit-content;
  background-color: #eef0f2;
  border-radius: 50px;
  cursor: pointer;
  user-select: none;

  transition: background-color 0.25s, color 0.25s;
  &__text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    height: 36px;
    padding: 0 12px;

    color: #000000;
  }
  .active &__text {
    color: #ffffff;
  }
  &:hover:not(.active) {
    background-color: #dfe3e6;
  }
}
.active {
  background-color: #ff5e56;
}
</style>
