import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// 页面样式初始化
import 'normalize.css'
import '@/styles/index.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
