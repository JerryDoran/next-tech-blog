import { createClient } from "contentful";

export const getAllBlogPosts = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
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
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const entry = await client.getEntries({
    content_type: "post",
    limit: 1,
    "fields.slug[in]": slug
  });

  return entry?.items?.map((item) => {
    // console.log(item);

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

export const getAllApps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  });

  const entries = await client.getEntries({
    content_type: "app"
  });

  // console.log(entries);

  return entries?.items?.map((item) => {
    const { fields } = item;
    return {
      title: fields.title,
      slug: fields.slug,
      image: fields.image,
      content: fields.content,
      link: fields.link
    };
  });
};
