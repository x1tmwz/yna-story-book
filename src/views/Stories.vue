<template>
  <ul class="stories_list">
    <li v-for="story in stories" :key="story.id">
      <div class="stories_list_li_coniter">
        <section>
          <h1>{{ story.title }}</h1>
          <span>{{ story.createdDate }}</span>
        </section>
        <h2>Author: {{ story.authorName }}</h2>
        <p>{{ getExcerptFromContent(story.content) }}</p>
        <span @click="goToStory(story.id)">Read more...</span>
      </div>
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Stories",
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
  created(){
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
    goToStory(id){
      this.$router.push({name:"Story",params:{id}})

    }
  },
};
</script>
<style lang="scss">
.stories_list {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  li {
    display: flex;
    flex-direction: column;
    background: rgba(231, 224, 224, 0.2);
    padding: 0.4rem;
    .stories_list_li_coniter {
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
    }
    section {
      display: flex;
      justify-content: space-between;
      width: 100%;
      span {
        color: rgb(156, 151, 151);
        text-decoration: none;
        cursor:unset
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
}
</style>
