import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkBreaks from 'remark-breaks';
import remarkPrism from 'remark-prism';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), 'src/posts');

export async function getPost(id: string) {
  const fullPath = join(postsDirectory, `${id}.md`);
  const fileContents = readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkBreaks)
    .use(remarkPrism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  };
}

export const getSortedPosts = async () => {
  const fileNames = readdirSync(postsDirectory);
  const allPosts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = join(postsDirectory, fileName);
    const relativePath = `/posts/${id}`;
    const fileContents = readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      path: relativePath,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPosts.sort((a, b) => {
    return a.date < b.date ? 1 : -1;
  });
};

export const getPostIds = async () => {
  const fileNames = readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};
