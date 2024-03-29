import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// 页面样式初始化
import 'normalize.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@/styles/index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
