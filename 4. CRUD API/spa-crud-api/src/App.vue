<template>
  <header class="flex gap-4 items-center justify-between bg-sky-500 px-3 h-14 mb-5">
        <router-link to="/" class="flex gap-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            <h1 class="hidden md:flex font-bold text-white text-xl">CRUD API</h1>
        </router-link>

        <a href="https://github.com/sergioriverafl/prueba-tecnica-frontend-dms" target="new" class="flex gap-3 items-center" title="Ir al código del proyecto">
          <img src="./assets/git-hub.svg" class="h-7 w-7" alt="Enlace al repositorio de @sergioriverafl en GitHub del CRUD API" title="Ir al código del proyecto de @sergioriverafl">
          / 4. CRUD API
        </a>
    </header>
  <router-view/>
</template>
