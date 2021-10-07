<template>
  <div class="recent-list-stories">
    <h1>Recent stories:</h1>
    <ul class="recent-list-stories_list">
      <li v-for="story in stories" :key="story.id">
        <h2>{{ story.title }}</h2>
        <p>{{ getExcerptFromContent(story.content) }}</p>
        <span>{{ story.createdDate }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "RecentStories",
  data: () => ({
    stories: [
      {
        id: 1,
        title: "the story of pro js",
        createdDate: "today",
        authorName: "tomer meyer",
        content: "blblblbsfsdfsdfsdfsdfffsdflfsdffsdfsfsdsdfsdfdsf",
      },
      {
        id: 2,
        title: "the story of pro php",
        createdDate: "today",
        authorName: "tomer meyer",
        content:
          "blblblfsfsdfsdfsdfsdfblsdfsdfsdsfsdsfsdsdfsdfsddfgggfgdfgdfgdfgdfgfsdfsdfsdfsdfsdfsdfsdfsdfsf",
      },
    ],
  }),
  created() {
    //need to get list of stories
  },
  methods: {
    getExcerptFromContent(content) {
      if (content.length < 120) {
        return content;
      }
      let excerpt = "";
      for (let i = 0; i < content.length; i++) {
        excerpt += content[i];
        if (
          i >= 120 &&
          (content[i] === "\n" || content[i] === " " || content[i] === ".")
        ) {
          return excerpt;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.recent-list-stories {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  h1 {
    color: white;
    background: rgb(71, 68, 114);
    width: 100%;
    font-size: 1.2rem;
    padding: 1rem 0;
    font-weight: lighter;
  }
  .recent-list-stories_list {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: rgba(75, 75, 75, 0.1);
      padding: 0.4rem;
      margin: 0.5rem 0;
      border-top-right-radius: 30px;
      border-bottom-left-radius: 30px;
      h2 {
        font-weight: 400;
        font-size: 1.2rem;
      }
      p {
        font: 0.8rem;
        color: red;
        word-break: break-all;
        margin: 0.2rem 0;
      }
      span {
        align-self: flex-end;
      }
    }
  }
}
</style>
