// 1. posts 배열을 받아온다
// 2. 중복 방지를 위해서 tag set를 새로 만들어 저장한다
// 3. post의 tags들을 set에 저장한다
// 4. tags 배열을 return

import { ref } from "vue";

const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((item) => {
    item.tags.forEach((tag) => tagSet.add(tag));
  });

  tags.value = [...tagSet];

  return { tags };
};

export default useTags;
