<template>
  <div class="mx-auto my-5">

    <div class="flex flex-col gap-8">

      <div class="container mx-auto px-3 flex gap-4 items-center justify-between">

        <div class="flex gap-x-2 items-center font-bold text-gray-700">
          <a href="javascript:history.back()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </a>

          <h1 class="text-xl">Agregar registro</h1>
        </div>

      </div>



      <div class="container mx-auto px-3 py-5">

        <div class="grid grid-cols-1 md:grid-cols-2">


          <form class="flex flex-col gap-4" autocomplete="none" @submit.prevent="saveNewRecord">

            <div class="grid grid-cols-1 gap-4">

              <div class="flex flex-col gap-1">
                <label for="">Nombres</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.name" required>
              </div>

            </div>


            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">


              <div class="flex flex-col gap-1">
                <label for="">Teléfono</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.phone" required>
              </div>

              <div class="flex flex-col gap-1">
                <label for="">E-mail</label>
                <input type="email"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.email" required>
              </div>

            </div>




            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">


              <div class="flex flex-col gap-1">
                <label for="">País</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.country" required>
              </div>

              <div class="flex flex-col gap-1">
                <label for="">Región</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.region" required>
              </div>

              <div class="flex flex-col gap-1">
                <label for="">Código postal </label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.postalZip" required>
              </div>

            </div>


            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label for="">Dirección</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.address" required>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div class="flex flex-col gap-1">
                <label for="">Lista</label>
                <input type="number"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.list" required>
              </div>

              <div class="flex flex-col gap-1">
                <label for="">Ranking</label>
                <input type="number"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.numberrange" required>
              </div>

              <div class="flex flex-col gap-1">
                <label for="">Moneda</label>
                <input type="text"
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.currency" required>
              </div>

            </div>

            <div class="grid grid-cols-1 gap-4">

              <div class="flex flex-col gap-1">
                <label for="">Texto</label>
                <textarea
                  class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.text" required></textarea>
              </div>

            </div>

            <div class="grid grid-cols-1 gap-4">

              <div class="flex flex-col gap-1">
                <label for="">Alphanumeric</label>
                <textarea class="w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-3 focus:outline-none focus:ring-1" v-model="detailsRecord.alphanumeric" required></textarea>
              </div>

            </div>

            <button type="submit"
              class="flex items-center gap-2 px-3 py-1 bg-sky-500 rounded-md text-white font-semibold w-32">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Guardar
            </button>

          </form>


          <div class="hidden md:flex flex-col items-center justify-center">

            <img src="./../assets/form.svg" alt="" class="h-96">

          </div>
        </div>


      </div>

    </div>
  </div>

</template>

<script>

import swal from 'sweetalert';


  export default {
    name: 'Home',
    components: {
    },
    data() {
      return {
        detailsRecord: {},
      }
    },
    mounted: function () {
      this.uuidv4();
    },
    methods: {
      uuidv4() {
        this.detailsRecord.alphanumeric = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16) );
      },

      saveNewRecord() {

        fetch(`https://webapi.dms.ms/api/test/`, {
          method: 'POST',
          body: JSON.stringify(this.detailsRecord),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then((data) => {

          console.log(data.length)
          console.log(data.status)

          if( data.length > 5 ){

              swal("Alerta!", "Registro guardado correctamente", "success")
              .then(()=> {
                this.$router.push({ path: '/' })
              })

            } else {
              swal("Alerta!", "A ocurrido un error", "warning")
            }
        })
      }
    }
  }
</script>
