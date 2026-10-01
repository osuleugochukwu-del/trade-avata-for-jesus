import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY || '';
const [owner = '', repo = ''] = repository.split('/');
const isProjectPages = Boolean(owner && repo && !repo.endsWith('.github.io'));

export default defineConfig({
  output: 'static',
  site: owner ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: isProjectPages ? `/${repo}` : '/',
  trailingSlash: 'always'
});
