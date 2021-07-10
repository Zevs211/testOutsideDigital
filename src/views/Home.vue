<template>
  <div class="home">
    <v-button type="outlined" @click.native="openModal"> Кнопка </v-button>
    <transition name="fade">
      <v-modal
        v-if="isModalVisible"
        title="Налоговый вычет"
        @on-modal-close="closeModal"
      >
        <div class="body">
          <div>
            <p class="body__description">
              Используйте налоговый вычет чтобы погасить ипотеку досрочно.
              Размер налогового вычета составляет не более 13% от своего
              официального годового дохода.
            </p>
            <v-input
              :moneyConfig="moneyConfig"
              v-model.lazy="formattedSalary"
              label="Ваша зарплата в месяц"
              required
            />
            <v-text-button class="mt-2" @click.native="calculatePayments"
              >Рассчитать</v-text-button
            >
            <div v-if="isCalculated">
              <div class="body__subtitle">
                Итого можете внести в качестве досрочных:
              </div>
              <div v-for="(payment, index) in payments" :key="index">
                <v-checkbox
                  :class="{ 'mt-3': index > 0 }"
                  v-model="payment.isSelected"
                  >{{ formatPayment(payment) }}</v-checkbox
                >
                <div class="horizontal-divider mt-3"></div>
              </div>
            </div>
            <div>
              <div class="body__subtitle">Что уменьшаем?</div>
              <div class="body__tag-group">
                <v-tag
                  v-for="(tag, index) in tags"
                  :key="tag.id"
                  :class="{ 'ml-2': index > 0 }"
                  :tag="tag"
                  @on-select="onTagSelect"
                />
              </div>
            </div>
          </div>
          <v-button @click.native="submit" :disabled="isSubmitDisabled"
            >Добавить</v-button
          >
        </div>
      </v-modal>
    </transition>
  </div>
</template>

<script>
import VModal from "@/components/ui/VModal.vue";
import VButton from "@/components/ui/VButton.vue";
import VTextButton from "@/components/ui/VTextButton.vue";
import VInput from "@/components/ui/VInput.vue";
import VTag from "@/components/ui/VTag.vue";
import VCheckbox from "@/components/ui/VCheckbox.vue";
import { getSuffixFromYear, getTaxRefunds } from "@/helpers";

export default {
  name: "HomePage",
  components: {
    VModal,
    VButton,
    VTextButton,
    VInput,
    VTag,
    VCheckbox,
  },
  data() {
    return {
      isModalVisible: false,
      payments: [],
      salary: 0,
      moneyConfig: {
        thousands: "",
        suffix: " ₽",
        precision: 0,
      },
      isCalculated: false,
      tags: [
        {
          id: 0,
          name: "Платеж",
          isSelected: true,
        },
        {
          id: 1,
          name: "Срок",
          isSelected: false,
        },
      ],
    };
  },
  computed: {
    formattedSalary: {
      get() {
        return this.salary;
      },
      set(value) {
        this.salary = parseInt(value);
      },
    },
    isSubmitDisabled() {
      return this.salary === 0;
    },
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    calculatePayments() {
      if (this.salary === 0) return;

      this.payments = getTaxRefunds(this.salary);
      this.isCalculated = true;
    },
    formatPayment(payment) {
      const preposition = payment.year === 2 ? "во" : "в";
      const suffix = getSuffixFromYear(payment.year);
      return `${payment.value} рублей ${preposition} ${payment.year}-${suffix} год`;
    },
    onTagSelect(payload) {
      this.tags = this.tags.map((tag) => ({
        id: tag.id,
        name: tag.name,
        isSelected: tag.id === payload.id,
      }));
    },
    submit() {
      const data = {
        salary: this.salary,
        payments: this.payments.filter((payment) => payment.isSelected),
        whatToSubstract: this.tags.find((tag) => tag.isSelected).id,
      };
      console.log(data);
    },
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
