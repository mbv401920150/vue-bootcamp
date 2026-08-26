import './style.css'
import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
// import './bases/01-const-let'
// import './bases/02-objects'
// import './bases/03-arrays'
// import './bases/04-functions'
// import './bases/05-deses-obj'
// import './bases/06-deses-arr'
// import './bases/07-imp-exp'
// import './bases/08-promises'
// import './bases/09-fetch-api'
// import './bases/10-axios'
import './bases/11-async-await'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img alt="temp1" src="${heroImg}" class="base" width="170" height="179">
    <img alt="temp2" src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img alt="temp3" src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img class="button-icon" src="${typescriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`
