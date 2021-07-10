<template>
  <div class="modal-wrapper" @click.self="closeModal">
    <div class="modal">
      <div class="modal__head">
        <span>{{ title }}</span>
        <button @click="closeModal">
          <img src="@/assets/img/icon-close.svg" />
        </button>
      </div>
      <div class="modal__body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VModal",
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    closeModal() {
      this.$emit("on-modal-close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 0;

  background-color: rgba(0, 0, 0, 0.3);
}
.modal {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 32px 16px;

  @media (min-width: 768px) {
    width: 453px;
    height: min-content;
    padding: 32px;
    border-radius: 30px;
  }
  @media (min-width: 1440px) {
    width: 552px;
    height: min-content;
    padding: 32px;
    border-radius: 30px;
  }
  &__head {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > button {
      cursor: pointer;
      background-color: #ffffff;
    }

    & > span {
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;

      color: #000000;
    }
  }
  &__body {
    height: 100%;
  }
}
</style>
