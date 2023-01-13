import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "19zw9e1u",
  dataset: "production",
  useCdn: true,
});
