<template>
  <v-modal title="Налоговый вычет">
    <div class="body">
      <div class="content">
        <p class="body__description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
          налогового вычета составляет не более 13% от своего официального
          годового дохода.
        </p>
        <div class="body__subtitle">Ваша зарплата в месяц</div>
        <v-input></v-input>
        <v-text-button></v-text-button>
        <div class="body__subtitle">
          Итого можете внести в качестве досрочных:
        </div>
        <!-- <v-checkbox v-for="payment in payments" :key="payment.id"></v-checkbox> -->
        <v-check-box title="78000 рублей в 1-ый год" />
        <div class="divider"></div>
        <v-check-box title="78000 рублей во 2-ой год" />
        <div class="divider"></div>
        <v-check-box title="78000 рублей в 3-ий год" />
        <div class="divider"></div>
        <v-check-box title="26000 рублей в 4-ый год" />
        <div class="divider"></div>
        <div>
          <div class="body__subtitle">Что уменьшаем?</div>
          <div class="body__tag-group">
            <v-tag>Платеж</v-tag>
            <v-tag>Срок</v-tag>
          </div>
        </div>
      </div>
      <v-button>Добавить</v-button>
    </div>
  </v-modal>
</template>

<script>
import VModal from "@/components/ui/VModal.vue";

import VButton from "@/components/ui/VButton.vue";
import VTextButton from "@/components/ui/VTextButton.vue";
import VInput from "@/components/ui/VInput.vue";
import VTag from "@/components/ui/VTag.vue";
import VCheckBox from "@/components/ui/VCheckBox.vue";

export default {
  name: "TaxDeduction",
  components: {
    VModal,
    VButton,
    VTextButton,
    VInput,
    VTag,
    VCheckBox,
  },
  data() {
    return {
      payments: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__description {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;

    color: #808080;
  }
  &__tag-group {
    display: flex;
  }
  &__subtitle {
    margin: 20px 0 16px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;

    color: #000000;
  }
}
.divider {
  width: 100%;
  height: 1px;
  background: #dfe3e6;
}
</style>
