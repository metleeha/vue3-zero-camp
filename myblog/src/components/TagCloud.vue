<template>
  <div class="tag-cloud">
    <h3>Tags</h3>
    <div v-for="tag in tags" :key="tag">
      <router-link :to="{ name: 'tag', params: { tag } }">
        #{{ tag }}
      </router-link>
    </div>
  </div>
</template>

<script>
import useTags from "../utils/useTags";
export default {
  setup(props) {
    const { tags } = useTags(props.posts);

    return { tags };
  },
  props: ["posts"],
};
</script>

<style>
.tag-cloud {
  padding: 10px;
}

.tag-cloud h3 {
  border-bottom: 1px solid #eee;
  padding: 1rem 0.75rem;
  color: #444;
  font-family: Merriweather, serif;
  font-size: 1.5rem;
  margin: 2rem 0;
}

.tag-cloud div {
  display: inline-block;
  padding: 0.5rem;
}

.tag-cloud a {
  color: #ccc;
  text-decoration: none;
}

.tag-cloud a.router-link-active {
  color: #a3e635;
  font-weight: bold;
}
</style>
