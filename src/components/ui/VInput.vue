<template>
  <div class="input">
    <div class="input__label">{{ label }}</div>
    <div
      class="input__container"
      :class="[{ disabled: disabled }, { danger: isNotValid }]"
    >
      <input
        type="text"
        placeholder="Введите данные"
        :disabled="disabled"
        v-money="moneyConfig"
        :value="value"
        @input="onInput"
      />
    </div>
    <div class="input__remark" v-if="isNotValid">
      Поле обязательно для заполнения
    </div>
  </div>
</template>

<script>
import { VMoney } from "v-money";

export default {
  name: "VInput",
  directives: { money: VMoney },
  props: {
    label: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {},
    moneyConfig: {},
  },
  computed: {
    isNotValid() {
      return this.required && (this.value === "" || this.value === 0);
    },
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000000;

  &__label {
    margin-bottom: 8px;
  }
  &__container {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #dfe3e6;
    border-radius: 3px;
    background-color: white;
    transition: border-color 0.25s;

    &:not(.disabled):hover {
      border-color: #000000;
    }

    input {
      width: 100%;
      outline: none;

      font-style: inherit;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      color: inherit;

      &:disabled {
        background-color: transparent;
      }
    }
  }
  &__remark {
    margin-top: 4px;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;

    color: #ea0029;
  }
}
.disabled {
  border-color: #808080;
  color: #808080;
}
.danger {
  border-color: #ea0029;
}
</style>
