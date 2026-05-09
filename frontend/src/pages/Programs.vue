<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Hero -->
    <section class="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">

        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Programas e Iniciativas
        </h1>

        <p class="text-lg text-purple-100 max-w-2xl mx-auto">
          Impulsamos el crecimiento profesional de mujeres en tecnología
          mediante programas de formación, mentoría y networking.
        </p>

      </div>
    </section>

    <!-- Loading -->
    <div
      v-if="loading"
      class="flex flex-col items-center justify-center py-24"
    >
      <div
        class="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-700"
      ></div>

      <p class="mt-4 text-gray-600">
        Cargando programas...
      </p>
    </div>

    <!-- Content -->
    <div
      v-else
      class="max-w-7xl mx-auto px-4 py-16"
    >

      <!-- Programs Grid -->
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        <article
          v-for="program in programs"
          :key="program.id"
          class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >

          <!-- Image -->
          <div class="relative h-56 overflow-hidden">
            <img
              :src="program.image"
              :alt="program.name"
              class="w-full h-full object-cover transition duration-500 hover:scale-105"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">

            <h3 class="text-2xl font-bold text-gray-900 mb-3">
              {{ program.name }}
            </h3>

            <p class="text-gray-600 leading-relaxed mb-6 line-clamp-3">
              {{ program.description }}
            </p>

            <!-- Benefits -->
            <div class="space-y-3 mb-8">

              <div
                v-if="program.id === 1"
                class="space-y-2 text-sm text-gray-600"
              >
                <p>Mentores expertos de la industria</p>
                <p>Sesiones personalizadas 1 a 1</p>
                <p>Duración estimada de 3 meses</p>
              </div>

              <div
                v-else-if="program.id === 2"
                class="space-y-2 text-sm text-gray-600"
              >
                <p>Formación en tecnologías actuales</p>
                <p>Modalidad híbrida</p>
                <p>Certificación incluida</p>
              </div>

              <div
                v-else-if="program.id === 3"
                class="space-y-2 text-sm text-gray-600"
              >
                <p>Networking profesional</p>
                <p>Eventos mensuales</p>
                <p>Comunidad activa</p>
              </div>

              <div
                v-else-if="program.id === 4"
                class="space-y-2 text-sm text-gray-600"
              >
                <p>Formación intensiva especializada</p>
                <p>Desarrollo de proyectos reales</p>
                <p>Acceso a bolsa de empleo</p>
              </div>

              <div
                v-else-if="program.id === 5"
                class="space-y-2 text-sm text-gray-600"
              >
                <p>Trabajo colaborativo</p>
                <p>Mentoría académica</p>
                <p>Posibilidad de publicación</p>
              </div>

            </div>

            <!-- Button -->
            <button
              @click="showProgramInfo(program)"
              class="mt-auto w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-3 rounded-xl transition"
            >
              Ver detalles
            </button>

          </div>
        </article>

      </div>

      <!-- Featured Projects -->
      <section class="mt-24">

        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>

          <p class="text-gray-600 max-w-2xl mx-auto">
            Algunas de las iniciativas que han generado impacto
            dentro de nuestra comunidad tecnológica.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">

          <!-- Project 1 -->
          <div
            class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >

            <div
              class="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6"
            >
              <span class="text-purple-700 font-bold text-lg">
                C&G
              </span>
            </div>

            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Code & Girls
            </h3>

            <p class="text-gray-600 leading-relaxed mb-6">
              Programa de introducción a la programación dirigido a niñas
              de instituciones educativas públicas, desarrollado en alianza
              con entidades educativas nacionales.
            </p>

           

          </div>

          <!-- Project 2 -->
          <div
            class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
          >

            <div
              class="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6"
            >
              <span class="text-purple-700 font-bold text-lg">
                WF
              </span>
            </div>

            <h3 class="text-2xl font-bold text-gray-900 mb-4">
              Women Founders
            </h3>

            <p class="text-gray-600 leading-relaxed mb-6">
              Programa de aceleración para emprendimientos tecnológicos
              liderados por mujeres, con acceso a mentoría, networking
              estratégico y acompañamiento empresarial.
            </p>

            

          </div>

        </div>
      </section>

    </div>

    <!-- Modal -->
    <div
      v-if="selectedProgram"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >

      <div
        class="bg-white rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
        @click.stop
      >

        <!-- Header -->
        <div class="bg-purple-700 text-white p-6">

          <div class="flex justify-between items-start gap-4">

            <h3 class="text-2xl font-bold">
              {{ selectedProgram.name }}
            </h3>

            <button
              @click="closeModal"
              class="text-white/80 hover:text-white text-2xl leading-none"
            >
              &times;
            </button>

          </div>

        </div>

        <!-- Content -->
        <div class="p-6 space-y-6">

          <div>
            <p class="text-gray-600 leading-relaxed">
              {{ selectedProgram.description }}
            </p>
          </div>

          <div class="bg-gray-100 rounded-xl p-5">
            <h4 class="font-semibold text-gray-900 mb-3">
              Proceso de participación
            </h4>

            <ol class="space-y-2 text-sm text-gray-600 list-decimal list-inside">
              <li>Completa el formulario de interés.</li>
              <li>Recibe la confirmación por correo electrónico.</li>
              <li>Accede a la información y cronograma del programa.</li>
            </ol>
          </div>

          <div class="bg-purple-50 rounded-xl p-5 border border-purple-100">
            <h4 class="font-semibold text-gray-900 mb-2">
              Contacto
            </h4>

            <p class="text-sm text-gray-600">
              Para más información:
            </p>

            <p class="text-purple-700 font-medium mt-1">
              programas@womenintechcolombia.org
            </p>
          </div>

        </div>

        <!-- Footer -->
        <div class="border-t border-gray-200 p-6">
          <button
            @click="closeModal"
            class="w-full bg-gray-900 hover:bg-black text-white py-3 rounded-xl transition"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchPrograms } from '../utils/api'

const programs = ref([])
const loading = ref(true)
const selectedProgram = ref(null)

const showProgramInfo = (program) => {
  selectedProgram.value = program
}

const closeModal = () => {
  selectedProgram.value = null
}

onMounted(async () => {
  programs.value = await fetchPrograms()
  loading.value = false
})
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>