<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="postsWithTag" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <ZeroSpinner />
    </div>
  </div>
</template>

<script>
// 과제: Tag Route & Tag Cloud 
// 1. tag route 만들고, tag 값을 route parameter로 받기 (tags/:tag)
// 2. TagView에서 모든 posts 리스트 불러오기 (getPosts)
// 3. tag 값을 가진 posts만 골라서 computed property로 보여주기
// 4. PostList 컴포넌트를 이용해서 요청한 posts들 보여주기
// 5. 데이터 로딩할 때 스피너 보여주기

import ZeroSpinner from "../components/ZeroSpinner.vue";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../utils/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, ZeroSpinner, TagCloud },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { error, posts, postsWithTag };
  },
};
</script>

<style>
.tag {
  padding: 10px;
}
</style>
