import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const build = imageUrlBuilder();
export const urlFor = (source) => build.image(source);

export default sanityClient({
  projectId: "19zw9e1u",
  dataset: "production",
  useCdn: true,
});
