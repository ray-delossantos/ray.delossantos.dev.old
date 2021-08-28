import type { Component } from "solid-js";
import { createEffect } from "solid-js";

import logo from "./images/ray.delossantos.logo.svg";

function App(): Component {
  createEffect(() => {
    document.title = "Welcome | ray.delossantos.dev";
  });
  return (
    <div class="min-h-screen ">
      <header class="container mx-auto flex flex-row justify-between">
        <img class="w-64 py-4 lg:py-8 px-4" src={logo} alt="logo" />
        <ul class="">
          <li></li>
        </ul>
      </header>
    </div>
  );
}

export default App;

//
// bg-gray-900
