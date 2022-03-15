<template>
  <div class="mx-auto my-5">
    <div class="flex flex-col gap-8">

      <div class="container mx-auto px-3 flex gap-4 items-center justify-between">
        <div class="flex gap-x-2 items-center font-bold text-gray-700">
          <a href="javascript:history.back()" id="go-back" name="go-back" aria-label="Volver átras">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </a>

          <h1 class="text-xl" @click="getDetailsRecord">Detalles del registro</h1>
        </div>
      </div>

      <div class="container mx-auto px-3 py-5">

        <div class="grid grid-cols-1 md:grid-cols-2">

          <form class="flex flex-col gap-4" autocomplete="none" @submit.prevent="updateRecord">

            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label for="names">Nombres</label>
                <input type="text" id="names" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.name">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1">
                <label for="phone">Teléfono</label>
                <input type="text" id="phone" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.phone">
              </div>
              <div class="flex flex-col gap-1">
                <label for="email">E-mail</label>
                <input type="text" id="email" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.email">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex flex-col gap-1">
                <label for="country">País</label>
                <input type="text" id="country" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.country">
              </div>
              <div class="flex flex-col gap-1">
                <label for="region">Región</label>
                <input type="text" id="region" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.region">
              </div>
              <div class="flex flex-col gap-1">
                <label for="code-zip">Código postal	</label>
                <input type="text" id="code-zip" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.postalZip">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label for="address">Dirección</label>
                <input type="text" id="address" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.address">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="flex flex-col gap-1">
                <label for="list">Lista</label>
                <input type="text" id="list" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.list">
              </div>
              <div class="flex flex-col gap-1">
                <label for="ranking">Ranking</label>
                <input type="text" id="ranking" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.numberrange">
              </div>
              <div class="flex flex-col gap-1">
                <label for="coin">Moneda</label>
                <input type="text" id="coin" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.currency">
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label for="text">Texto</label>
                <textarea id="text" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]" v-model="detailsRecord.text"></textarea>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-4">
              <div class="flex flex-col gap-1">
                <label for="alphanumeric">Alphanumeric</label>
                <div id="alphanumeric" class="w-full border border-gray-200 rounded-md py-2 pl-3" :class="[ isLoadedResult == true ? 'text-sm text-black placeholder-gray-500 focus:outline-none focus:ring-1' : 'text-gray-200 animate-pulse bg-slate-200' ]">{{ detailsRecord.alphanumeric }}</div>
              </div>
            </div>

            <div class="flex gap-3" v-if="isLoadedResult">
              <button type="submit" id="update-record" name="update-record" aria-label="Actualizar registro" class="flex items-center gap-2 px-3 py-1 bg-sky-500 rounded-md text-white font-semibold w-48">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Guardar cambios
              </button>
              <button @click="confirmDeleteRecord"  id="delete-record" name="delete-record" aria-label="Eliminar registro" type="button" class="flex items-center gap-2 px-3 py-1 bg-gray-500 rounded-md text-white font-semibold w-54">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Eliminar registro
              </button>
            </div>

          </form>

          <div class="hidden md:flex flex-col items-center justify-center">
            <img src="./../assets/form.svg" alt="Bienvenido al formulario de actualización del registro" title="Completa el formulario para actualizar el registro" class="h-96">
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
      isLoadedResult: false,
    }
  },
  mounted: function () {
    this.getDetailsRecord();
  },
  methods: {

    getDetailsRecord(){

      this.isLoadedResult = false;

      fetch(`https://webapi.dms.ms/api/test/${this.$route.params.id_record}`, {
        method: 'GET',
        headers: {
          "Content-Type": "text/plain;charset=UTF-8"
        },
      })
      .then(response => response.json())
      .then((data) => {

        if(data.success != undefined){

          swal("Alerta!", data.message, "warning")
          .then(()=> {
            this.$router.push({ path: '/' })
          })

        } else {
          this.detailsRecord = data;
          this.isLoadedResult = true;
        }
      })
    },

    updateRecord(){

      fetch(`https://webapi.dms.ms/api/test/${this.$route.params.id_record}`, {
        method: 'PUT',
        body: JSON.stringify(this.detailsRecord), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then((data) => {

        if(data.success){
          swal("OK!", data.message, "success");
        }
      })
    },

    confirmDeleteRecord(){

      swal({
        title: "¿Está seguro?",
        text: "Una vez eliminado, ¡no podrá recuperar este registro!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

          let isDeleteRecord = this.deleteRecord();

          if(isDeleteRecord){

            swal("OK!", "Registro eliminado correctamente", "success")
            .then(()=> {
              this.$router.push({ path: '/' })
            })

          } else {

            swal("Alert", "A ocurrido un error", "warning");

          }
        }
      });
    },

    async deleteRecord(){
      await fetch(`https://webapi.dms.ms/api/test/${this.$route.params.id_record}`, {
        method: 'DELETE',
        body: JSON.stringify(this.detailsRecord),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then((data) => {
        return data.success ? true : false;
      })
    }
  }
}
</script>
