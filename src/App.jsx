import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <div class="container">
      <header>Header</header>

      <div class="middle">
        <div class="left-column">
          <div class="hero">Hero</div>
          <div class="sidebar">Sidebar</div>
        </div>

        <div class="right-column">
          <div class="main-content">Main Content</div>
          <div class="extra-content">Extra Content</div>
        </div>
      </div>

      <div class="bottom">
        <div class="related-images">Related Images</div>
        <div class="related-posts">Related Posts</div>
      </div>

      <footer>Footer</footer>
    </div>

  )
}

export default App
