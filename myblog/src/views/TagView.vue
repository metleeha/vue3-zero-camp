<template>
  <div class="tag"></div>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList :posts="postsWithTag" />
  </div>
  <div v-else>
    <ZeroSpinner />
  </div>
</template>

<script>
// 도전: Tag Cloud 만들기
// 1. tag route 만들고, tag 값을 route parameter로 받기 (posts/:tag)
// 2. TagView에서 모든 posts 리스트 불러오기 (getPosts)
// 3. tag 값을 가진 posts만 골라서 computed property로 보여주기
// 4. PostList 컴포넌트를 이용해서 요청한 posts들 보여주기
// 5. 데이터 로딩할 때 스피너 보여주기

import ZeroSpinner from "../components/ZeroSpinner.vue";
import PostList from "../components/PostList.vue";
import getPosts from "../utils/getPosts";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, ZeroSpinner },
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

<style></style>
