<template>
  <div class="Card">
    <div class="Image">
      <img :src="content.imageurl" alt="" />
    </div>
    <h4>{{ content.title }}</h4>
    <p>{{ content.description }}</p>
  </div>
</template>

<script>
export default {
  name: "NewsCard",
  props: ["content"],
};
</script>

<style scoped>
.Card {
  width: 22rem;
  height: 20rem;
  border: 1.2px solid #dbd8fc;
  border-radius: 15px;
  overflow: hidden;
  transition: 1s;
  margin: 3rem;
}
.Card:hover {
  transform: scale(1.3);
  z-index: 2;
  cursor: pointer;
}
.Image {
  height: 11rem;
  border: 1px solid black;
}
img {
  height: 100%;
  width: 100%;
}

p {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
h4 {
  margin: 0.5rem 0 0.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
