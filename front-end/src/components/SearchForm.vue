<template>
  <form @submit.prevent="">
    <label for="SearchType">Search by</label>
    <select id="SearchType" v-model="searchData.searchedby">
      <option>Article Title</option>
      <option>Article Source</option>
    </select>
    <label for="SearchedFor">Searched For</label>
    <input type="text" id="SearchedFor" v-model="searchData.searchedFor" />
    <button @click="getData(searchData)">Search</button>
    <button v-if="filter" @click="Reset">Reset</button>
  </form>
</template>
<script>
export default {
  name: "SearchForm",
  props: { getData: Function, filter: Boolean },
  data() {
    return {
      searchData: {
        searchedby: "",
        searchedFor: "",
      },
    };
  },
  methods: {
    Reset() {
      this.$emit("Reset");
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
}

@media (max-width: 880px) {
  label,
  select,
  input,
  button {
    width: 6rem;
    height: 3rem;
    border-radius: 15px;
    outline: none;

    margin: 1rem 0.3rem 0 0.3rem;
  }

  select,
  input,
  button {
    border: 1.2px solid #dbd8fc;
  }

  button:hover {
    opacity: 50%;
    cursor: pointer;
  }
  button {
    background-color: white;
    color: black;
  }
  label {
    width: fit-content;
    margin-top: 2rem;
  }
}
@media (min-width: 881px) {
  input,
  select {
    outline: none;
    border-radius: 1rem;
    border: 1.2px solid #dbd8fc;
    width: 10rem;
    height: 3rem;
  }
  button {
    border: 1px solid #dbd8fc;
    border-radius: 15px;
    background-color: white;
    color: black;
    width: 9rem;
    height: 3rem;
    display: block;
    margin-left: 1rem;
  }
  button:hover {
    opacity: 50%;
    cursor: pointer;
  }
  label {
    margin: 1rem 1rem 0 1rem;
    width: fit-content;
  }
}
</style>
