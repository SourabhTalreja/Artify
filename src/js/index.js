import { createApi } from "unsplash-js";
const pictures = document.querySelector("#pictures");

const unsplash = createApi({
  accessKey: "MBCzXOIJRKOy6j5qM8ELaXWfFFN0hzQ0Rn2_-GQWZR0",
});

unsplash.search
  .getPhotos({
    query: "Classic Art",
    page: 1,
    perPage: 10,
    orientation: "portrait",
  })
  .then((result) => {
    if (result.type === "success") {
      const photos = result.response.results;
      console.log(photos);
    }
  });
