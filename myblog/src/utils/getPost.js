import { ref } from "vue";
import { projectDB } from "../firebase/config";
import { getDoc, doc } from "firebase/firestore/lite";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const postDocRef = doc(projectDB, "posts", id);
      // console.log(postDocRef);
      const postDocSnap = await getDoc(postDocRef);
      // console.log(postDocSnap.data());
      if (postDocSnap.exists()) {
        post.value = { ...postDocSnap.data(), id: id };
      } else {
        error.value = "No Such Document!";
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
