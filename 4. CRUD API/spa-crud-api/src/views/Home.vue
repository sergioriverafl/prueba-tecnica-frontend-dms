<template>
  <div class="flex flex-col gap-8 px-3">
    <div class="flex gap-4 items-center justify-start">
      <h1 class="font-bold text-gray-700 text-xl">Inicio</h1>
    </div>

    <div class="flex gap-4 items-center justify-between">
      <div class="flex gap-2">
        <a @click="loadData" class="flex gap-2 items-center px-3 py-1 bg-gray-400 rounded-md text-white font-semibold cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
          </svg>
          <h6 class="hidden md:flex truncate">Eliminar seleccionados</h6>
        </a>
      </div>

      <div class="flex gap-2 items-center">
        <button @click="loadData" class="flex gap-2 items-center px-3 py-1 bg-gray-400 rounded-md text-white font-semibold cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round"   stroke-linejoin="round"   d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
        </button>

        <router-link to="/add-record/" class="flex gap-2 items-center px-3 py-1 bg-sky-500 rounded-md text-white font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Agregar registro
        </router-link>
      </div>
    </div>

    <div class="overflow-auto shadow">
      <table class="w-full">
        <thead class="divide-y divide-slate-200">
          <tr class="text-gray-600 bg-gray-100">
            <th class="font-semibold tracking-wide text-center px-2 py-2 w-16">
              <input type="checkbox" />
            </th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Nombres</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Teléfono</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">E-mail</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Dirección</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Código postal</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Región</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">País</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Lista</th>
            <th class="font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2 w-28 truncate">Texto</th>
            <th class="truncate font-semibold tracking-wide text-left border-r border-gray-300 px-2 py-2">Ranking</th>
            <th class="truncate font-semibold tracking-wide text-left px-2 py-2">Moneda</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 font-light text-sm">
          <tr class="text-gray-600 hover:bg-gray-50" v-for="(data, index) in dataSet" :key="index">
            <td class="px-2 py-2 whitespace-nowrap w-16 text-center" scope="row">
              <input type="checkbox" class="form-control" />
            </td>
            <td class="px-2 py-2 whitespace-nowrap text-sky-500 font-bold hover:underline">
              <router-link :to="'/update-record/' + data.alphanumeric">{{ data.name || data.alphanumeric }}</router-link>
            </td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.phone }}</td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.email }}</td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.address }}</td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.postalZip }}</td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.region }}</td>
            <td class="px-2 py-2 whitespace-nowrap">{{ data.country }}</td>
            <td class="px-2 py-2 whitespace-nowrap text-right">{{ data.list }}</td>
            <td class="px-2 py-2 truncate w-28">{{ data.text }}</td>
            <td class="px-2 py-2 whitespace-nowrap text-right">{{ data.numberrange }}</td>
            <td class="px-2 py-2 whitespace-nowrap text-right">{{ data.currency }}</td>
          </tr>
        </tbody>
      </table >
    </div >
  </div >

</template>

  <script>

    export default {
      name: 'Home',
    components: {
    },
    data() {
    return {
      message: 'Hello Vue!',
    dataSet: []
    }
  },
    mounted: function () {
      this.loadData()
    },
    methods: {
      loadData() {
      fetch('https://webapi.dms.ms/api/test', {
        method: 'GET'
      })
        .then(response => response.json())
        .then((data) => {
          this.dataSet = data;
        })
    }
  }
}
  </script>
