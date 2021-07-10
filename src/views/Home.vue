<template>
  <div class="home">
    <v-button type="outlined" @click.native="openModal"> Кнопка </v-button>
    <v-modal
      v-if="isModalVisible"
      title="Налоговый вычет"
      @on-modal-close="closeModal"
    >
      <div class="body">
        <div class="content">
          <p class="body__description">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер
            налогового вычета составляет не более 13% от своего официального
            годового дохода.
          </p>
          <v-input
            :moneyConfig="moneyConfig"
            v-model.lazy="formattedSalary"
            label="Ваша зарплата в месяц"
          />
          <v-text-button class="mt-2" @click.native="calculatePayments"
            >Рассчитать</v-text-button
          >
          <div v-if="isCalculated">
            <div class="body__subtitle">
              Итого можете внести в качестве досрочных:
            </div>
            <v-checkbox
              v-for="(payment, index) in payments"
              :key="index"
              v-model="payment.isSelected"
              >{{ formatPayment(payment, index + 1) }}</v-checkbox
            >
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
        <v-button @click.native="submit">Добавить</v-button>
      </div>
    </v-modal>
  </div>
</template>

<script>
import VModal from "@/components/ui/VModal.vue";

import VButton from "@/components/ui/VButton.vue";
import VTextButton from "@/components/ui/VTextButton.vue";
import VInput from "@/components/ui/VInput.vue";
import VTag from "@/components/ui/VTag.vue";
import VCheckbox from "@/components/ui/VCheckbox.vue";

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
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    calculatePayments() {
      const yearlyTax = this.salary * 12 * 0.13;
      const paymentsCount = Math.ceil(260000 / yearlyTax);

      const payments = [...Array(paymentsCount).keys()].map((_, index) => {
        const payment = {
          value: 0,
          year: index + 1,
          isSelected: false,
        };
        if (index < paymentsCount - 1) {
          payment.value = yearlyTax;
        } else {
          payment.value = 260000 - index * yearlyTax;
        }
        return payment;
      });
      this.payments = payments;
      this.isCalculated = true;
    },
    formatPayment(payment, year) {
      const preposition = year === 2 ? "во" : "в";
      let suffix = "";
      const lastDigit = +`${year}`.slice(-1);
      if ([1, 4, 5, 9, 0].includes(lastDigit)) {
        suffix = "ый";
      } else if ([2, 6, 7, 8].includes(lastDigit)) {
        suffix = "ой";
      } else {
        suffix = "ий";
      }
      return `${payment.value} рублей ${preposition} ${year}-${suffix} год`;
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
