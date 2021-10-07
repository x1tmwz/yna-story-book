<template>
  <div class="dash_borad_container">
    <div class="story-contaier">
      <div class="story-contaier_header">
        <section>
          <h1>{{ story.title }}</h1>
          <span>{{ story.createdDate }}</span>
        </section>
        <h2>Author: {{ story.authorName }}</h2>
      </div>
      <p>{{ story.content }}</p>
    </div>
    <RecentStories />
  </div>
</template>

<script>
import RecentStories from "../components/lists/RecentStories.vue";
export default {
  name: "Story",
  components: { RecentStories },
  data: () => ({
    story: {
      id: 1,
      title: "the story of pro js",
      createdDate: "today",
      authorName: "tomer meyer",
      content: "blblblbsfsdfsdfsdfsdfffsdflfsdffsdfsfsdsdfsdfdsf",
    },
  }),
  created() {
    //need to chose from stories a story by id
  },
};
</script>
<style lang="scss">
.story-contaier {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: rgba(231, 224, 224, 0.2);
  padding: 0.8rem;
  min-height: 85vh;
  .story-contaier_header {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    border-bottom: 1px solid rgba(41, 39, 39, 0.2);
    border-bottom-width: 60%;
  }
  h1 {
    font-weight: 600;
    font-size: 1.4rem;
  }
  h2 {
    font-weight: 400;
    font-size: 1.2rem;
    color: rgb(156, 151, 151);
    margin: 0.5rem 0;
  }
  section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    span {
      color: rgb(156, 151, 151);
      text-decoration: none;
      cursor: unset;
    }
    
  }
  p {
    font: 0.8rem;
    margin: 1rem 0;
  }
  span {
    color: blue;
    cursor: pointer;
  }
}
</style>
