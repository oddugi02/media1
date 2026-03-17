import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // 💡 [체크 1] 깃허브 레포지토리 이름을 다시 한번 확인하세요!
    // 만약 주소가 https://github.com/ayoung/studio-pilot 이라면 '/studio-pilot/' 입니다.
    base: '/media1/',

    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY || env.VITE_GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // 💡 [체크 2] ./src 로 표기하는 것이 절대 경로를 잡는 데 더 안전합니다.
        '@': path.resolve(__dirname, './src'),
      },
    },

    build: {
      // 빌드 파일이 생성되는 위치 확인
      outDir: 'dist',
    }
  };
});
