export function calculateReadTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}
