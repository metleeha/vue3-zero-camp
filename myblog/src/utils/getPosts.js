import { ref } from "vue";
import { projectDB } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore/lite";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // fireStore collections data 불러오기
      const postsCol = collection(projectDB, "posts");
      // console.log(collection(projectDB, "posts"));
      const postsSnapshot = await getDocs(postsCol);
      // console.log(postsSnapshot);
      posts.value = postsSnapshot.docs.map((doc) => {
        // console.log(doc.data());
        // console.log(doc.id);
        return { ...doc.data(), id: doc.id };
      });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
