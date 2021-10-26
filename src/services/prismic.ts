import Prismic from "@prismicio/client";

export const prismiClient = Prismic.client(process.env.PRISMIC_API_ENDPOINT);