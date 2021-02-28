import { createClient } from "contentful";

export const getAllBlogPosts = async () => {
  const client = createClient({
    space: "ex6pvsoi7pxx",
    accessToken: "TtD5eF3UGT5CEWP2W3-R73cf8fq0tPm_9JVXB0RiRDs"
  });

  const entries = await client.getEntries({
    content_type: "post"
  });

  return entries?.items?.map((item) => {
    const { fields } = item;
    return {
      title: fields.title,
      slug: fields.slug,
      author: fields.author,
      date: fields.date,
      image: fields.image,
      content: fields.content
    };
  });
};

export const getSingleBlogPost = async (slug) => {
  const client = createClient({
    space: "ex6pvsoi7pxx",
    accessToken: "TtD5eF3UGT5CEWP2W3-R73cf8fq0tPm_9JVXB0RiRDs"
  });

  const entry = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug
  });

  return entry?.items?.map((item) => {
    console.log(item);

    const { fields } = item;
    return {
      title: fields.title,
      slug: fields.slug,
      content: fields.content,
      image: fields.image,
      author: fields.author,
      publishedDate: fields.date
    };
  })[0];
};
