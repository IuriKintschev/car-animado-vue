<template>
	<div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img class="img-fluid"
             :src="src"
              alt
            >
          </div>
            <div class="blog-slider__content">
                <span class="blog-slider__code">Compare os DDDs de SP com o plano {{plano}} min.</span>
                <div class="blog-slider__title">Ganhe {{plano}} min GRATIS</div>
                <form action="#" class="row">
                  <div class="col input-group">
                    <div class="input-group-prepend">
                      <button @click.prevent="calcular" class="btn btn-calc" >Calcular</button>
                    </div>
                    <input type="text" class="form-control outline" v-model="min"  placeholder="Seus minutos" required>
                  </div>
                  <div class="col-3">
                      <input type="text" class="form-control outline" v-model="ddd1" placeholder="DDD 1°" required>
                   </div>
                  <div class="col-3">
                      <input type="text" class="form-control outline" v-model="ddd2" placeholder="DDD 2°" required>
                   </div>
                 </form>
                 <div v-if="!result1 == ''" class="row mt-2">
                   <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Com o plano {{plano}}min.</th>
                          <th scope="col">Sem o plano {{plano}}min.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row" class="text-success">R${{result1}}</th>
                          <td class="text-danger">R${{result2}}</td>
                        </tr>
                      </tbody>
                    </table>
                 </div>
           </div>
        </div>
</template>

<script>
export default {
  props: ['src', 'plano'],
  data: function() {
    return {
      base: this.plano,
      min: "",
      ddd1: "",
      ddd2: "",
      result1: "",
      result2: ""
    };
  },
  methods: {
    //   logica simples
    calcular() {
      let valor = this.tabela(this.ddd1, this.ddd2);
      let minutos = 0.0;
      let porc = valor + 10 / 100;
      if (this.min > this.base) {
        minutos = this.min - this.base;
      }

      let res = parseFloat(minutos * porc).toFixed(2);
      let res2 = parseFloat(this.min * valor).toFixed(2);

      this.result1 = res.replace(".", ",");
      this.result2 = res2.replace(".", ",");
      this.min = "";
    },
    //   logica simples end
    // tabela
    tabela(n, m) {
      let valor;
      if (n == 11 && m == 16) valor = 1.90;
      if (n == 16 && m == 11) valor = 2.90;
      if (n == 11 && m == 17) valor = 1.70;
      if (n == 17 && m == 11) valor = 2.70;
      if (n == 11 && m == 18) valor = 0.90;
      if (n == 18 && m == 11) valor = 1.90;
      return valor;
    }
    // tabela end
  }
};
</script>

<style lang="scss" scoped>
$Out: rgb(113, 89, 193);
$Verde: rgba(39,206,122,1.000);

// botao
.btn-calc{
  color: $Out;
  border: 1px solid $Out;
    &:hover{
      color: white;
      background: $Out;
    }
}
// botao end

// outline do input texto
.outline:focus{
  border-color: $Verde;
  box-shadow: none;
  outline: none;
}
// outline do input texto ned
</style>

