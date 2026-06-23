import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black-400 p-4 rounded-xl mb-4'>
        Tailwind Test
      </h1>
      <article class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
  <img alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&amp;fit=crop&amp;q=80&amp;w=1160" class="h-56 w-full object-cover"></img>

  <div class="bg-white p-4 sm:p-6">
    <time datetime="2022-10-10" class="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 class="mt-0.5 text-lg text-gray-900">
        How to position your furniture for positivity
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
      quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
      atque dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>
</article>
    </>
  )
}

export default App
