import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // 현재 모드(development/production)에 맞춰 환경 변수를 불러옵니다.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 💡 [핵심 수정] 깃허브 배포 경로를 설정합니다. 
    // 레포지토리 이름이 'studio-pilot'이라면 '/studio-pilot/' 라고 적어주세요.
    base: '/studio-pilot/',

    plugins: [react(), tailwindcss()],

    define: {
      // 빌드 시점에 환경 변수를 주입합니다.
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    // 💡 빌드 결과물이 나올 폴더 설정 (기본값 dist)
    build: {
      outDir: 'dist',
    }
  };
});
