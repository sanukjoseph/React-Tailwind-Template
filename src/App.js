import './App.css';

function App() {
  return (
<div className="h-screen flex justify-center items-center flex-col">
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5  items-center justify-center flex-col">
    <img class=" h-36 w-36 object-cover object-center " alt="hero" src="https://i.ytimg.com/vi/wXGlWLQdgf4/maxresdefault.jpg"/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">React Tailwind Template</h1>
      <p class="mb-8 leading-relaxed">Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?</p>
      <div class="flex justify-center">
        <a href="https://github.com/sanukjoseph" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Contact Me</a>
      </div>
    </div>
  </div>
</section>
</div>
  );
}

export default App;
