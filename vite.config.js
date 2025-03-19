import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: 'index.html', // 기본 index.html

        chaBanner: '/src/components/banner/character/character-banner.html',
        homeBanner: '/src/components/banner/home/home-banner.html',
        categoryBanner: '/src/components/banner/category/category-banner.html',
        header: 'src/components/header/component-header.html',
        categoryButton: 'src/components/category-button/category-button.html',
        ttakji: 'src/components/ttakji/ttakji.html',
        ttakjiCategory: 'src/components/ttakji-category/ttakji-category.html',
        ttakjiFilter: 'src/components/ttakji-filter/ttakji-filter.html',
        home: 'src/pages/home/home.html',
        plz: 'src/components/footer/footer.html',
      },
    },
  },
  appType: 'mpa', // fallback 사용안함
  server: {
    // open: 'src/pages/main/index.html', // 서버 시작 시 브라우저에서 지정페이지 자동으로 열기
  },
});
