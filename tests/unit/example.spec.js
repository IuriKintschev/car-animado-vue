import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'

const factory = (values = {}) => {
  return shallowMount(Card, {
    data: { ...values  }
  })
}

describe('testando o card', () => {
  it('espera o resultado do result1 ser R$0,00', () => {
    const wrapper = factory({
      base: 30,
      min: 20,
      ddd1: 11,
      ddd2: 16
    })
  });
})
