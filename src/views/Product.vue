<template>
  <div class="about">
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ProductId</th>
          <th scope="col">ProductName</th>
          <th scope="col">Desc</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in productList">
          <tr v-bind:key="item.productId">
            <td>{{ item.productId }}</td>
            <td>{{ item.productName }}</td>
            <td>@{{ item.desc }}</td>
          </tr>
        </template>     
      </tbody>
    </table>
  </div>
</template>

<script>
import { getProducts } from "@/api/product";

export default {
  name: "Product",
  components: {},
  data() {
    return {
      productList: [],
    };
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      var vm = this;
      getProducts(vm.$store.getters.isTestApi)
        .then((response) => {
          if (response.status === "OK") {
            vm.productList = response.data;
          }
        })
        //.catch((error) => {});
    },
  },
};
</script>
