import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.AIzaSyBPNiXOEqyzOqysx4RNY5UZforblxU9qyY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.AIzaSyBmWsTdD47QcMsWFWfbRtimPhEzeVtUriU)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
