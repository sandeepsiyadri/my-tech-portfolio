import { defineCollection } from 'astro:content';

const tutorials = defineCollection({
  type: 'content',
  // No schema = no strict rules. Everything will pass.
});

export const collections = { tutorials };