<template>
  <div class="article">
    <header>
      <router-link to="/">
        <img src="..\assets\logo.png" alt="News logo" />
      </router-link>

      <SearchForm />
    </header>
    <div class="Image">
      <img :src="content.imageurl" alt="" />
    </div>
    <h1>{{ content.title }}</h1>
    <p class="small-text"><b>Sourece:</b> {{ content.source }}</p>
    <p class="small-text"><b>Published At:</b> {{ content.publishedat }}</p>
    <p class="article-content">{{ content.content }}</p>
    <div class="buttons">
      <a :href="content.url"><button>Go to the Source</button> </a>
      <router-link to="/"><button>Return to News List</button> </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDetails",
  data() {
    return {
      content: {},
    };
  },
  mounted() {
    fetch(`http://localhost:3000/byId/${this.$route.params.index}`)
      .then((res) => res.json())
      .then((data) => {
        this.content = data;
      })
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: center;
}
.Image {
  height: 23rem;
  border: 1px solid black;
}
img {
  width: 100%;
  height: 100%;
}

.article {
  text-align: left;
}

.small-text {
  margin-left: 3rem;
  font-size: 0.9rem;
}

.article-content {
  font-size: 2rem;
  margin: 1.5rem 3rem 0 1.5rem;
}

.buttons {
  text-align: center;
  margin-top: 2rem;
}

button {
  border: 1px solid #dbd8fc;
  border-radius: 15px;
  background-color: gray;
  color: white;
  width: 9rem;
  height: 3rem;
}

button:hover {
  opacity: 50%;
  cursor: pointer;
}

a {
  margin-right: 3rem;
}
</style>
