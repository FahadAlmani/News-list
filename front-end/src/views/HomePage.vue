<template>
  <div>
    <header>
      <router-link to="/">
        <img src="..\assets\logo.png" alt="News logo" />
      </router-link>

      <SearchForm :getData="getFormData" :filter="filter" @Reset="reset" />
    </header>

    <main>
      <div v-if="cards" class="CardSection">
        <router-link
          v-for="card in cards"
          :key="card.id"
          :to="`/ArticleDetails/${card.id}`"
        >
          <NewsCard :content="card" />
        </router-link>
      </div>

      <div v-else>
        <h4>Not Found</h4>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import NewsCard from "../components/NewsCard.vue";
import SearchForm from "../components/SearchForm.vue";

export default {
  name: "HomePage",
  components: {
    NewsCard,
    SearchForm,
  },
  data() {
    return {
      cards: [],
      searchBy: "",
      searchFor: "",
      filter: false,
    };
  },
  methods: {
    reset() {
      this.filter = !this.filter;
      axios
        .get("http://localhost:3000/index")
        .then((res) => {
          this.cards = res.data;
        })
        .catch((err) => console.log(err.message));
    },
    getFormData(Data) {
      this.searchBy = Data.searchedby;
      this.searchFor = Data.searchedFor;
      this.filter = true;

      if (this.searchBy === "Article Source") {
        axios
          .get(`http://localhost:3000/bySource/${this.searchFor}`)
          .then((res) => {
            if (res.data.length === 0) {
              this.cards = false;
              return;
            }
            this.cards = res.data;
          })
          .catch((err) => console.log(err.message));
      } else if (this.searchBy === "Article Title") {
        axios
          .get(`http://localhost:3000/byTitle/${this.searchFor}`)
          .then((res) => {
            if (res.data.length === 0) {
              this.cards = false;
              return;
            }
            this.cards = res.data;
          })
          .catch((err) => console.log(err.message));
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/index")
      .then((res) => {
        this.cards = res.data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
header {
  color: #fff;
  display: flex;
  background: gray;
  justify-content: space-around;
  height: 7rem;
  align-items: center;
  border-bottom: 1px solid #dbd8fc;
}
img {
  height: 100%;
}
main {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}

.CardSection {
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  margin: 0 3rem 0 3rem;
}
a {
  color: #000;
  text-decoration: none;
}
</style>
