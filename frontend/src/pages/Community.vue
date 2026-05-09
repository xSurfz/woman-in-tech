<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero -->
    <section
      class="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-20"
    >
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nuestra Comunidad</h1>

        <p class="text-lg text-purple-100 max-w-2xl mx-auto">
          Conoce a las profesionales, líderes y miembros que hacen posible Women
          in Tech Colombia.
        </p>
      </div>
    </section>

    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Loading -->
      <div
        v-if="loading"
        class="flex flex-col items-center justify-center py-24"
      >
        <div
          class="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-700"
        ></div>

        <p class="mt-4 text-gray-600">Cargando comunidad...</p>
      </div>

      <div v-else>
        <!-- Leadership -->
        <section class="mb-24">
          <div class="text-center mb-14">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Equipo Líder
            </h2>

            <p class="text-gray-600 max-w-2xl mx-auto">
              Mujeres líderes que impulsan iniciativas, programas y espacios de
              crecimiento dentro de la comunidad.
            </p>
          </div>

          <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            <article
              v-for="leader in community.leaders"
              :key="leader.id"
              class="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <!-- Image -->
              <div class="relative overflow-hidden">
                <img
                  :src="leader.image"
                  :alt="leader.name"
                  class="w-full h-80 object-cover group-hover:scale-105 transition duration-500"
                />

                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                ></div>
              </div>

              <!-- Content -->
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-900 mb-1">
                  {{ leader.name }}
                </h3>

                <p class="text-purple-700 font-semibold mb-3">
                  {{ leader.role }}
                </p>

                <div
                  class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
                >
                  {{ leader.interest }}
                </div>
              </div>
            </article>
          </div>
        </section>

        <!-- Members -->
        <section class="mb-24">
          <div class="text-center mb-14">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Miembros Activas
            </h2>

            <p class="text-gray-600 max-w-2xl mx-auto">
              Una red diversa de mujeres en distintas áreas de tecnología,
              innovación y liderazgo.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <article
              v-for="member in community.members"
              :key="member.id"
              class="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div class="mb-5">
                <img
                  :src="member.image"
                  :alt="member.name"
                  class="w-28 h-28 rounded-full object-cover mx-auto border-4 border-purple-100"
                />
              </div>

              <h3 class="text-lg font-bold text-gray-900 mb-1">
                {{ member.name }}
              </h3>

              <p class="text-purple-700 font-medium text-sm mb-3">
                {{ member.role }}
              </p>

              <div
                class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
              >
                {{ member.interest }}
              </div>
            </article>
          </div>
        </section>

        <!-- Interest Areas -->
        <section class="mb-24">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Áreas de Interés
            </h2>

            <p class="text-gray-600 max-w-2xl mx-auto">
              Nuestra comunidad participa en distintas disciplinas del
              ecosistema tecnológico y digital.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Desarrollo Web
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Frontend, backend, arquitectura web y tecnologías modernas.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Inteligencia Artificial
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Machine learning, automatización y modelos inteligentes.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Data Science
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Análisis de datos, visualización y toma de decisiones basada en
                datos.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Cloud Computing
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Infraestructura cloud, servicios escalables y plataformas
                modernas.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Ciberseguridad
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Protección de sistemas, redes y gestión de riesgos digitales.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                Desarrollo Móvil
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Aplicaciones móviles multiplataforma y experiencias digitales.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                UX/UI Design
              </h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Diseño de interfaces, experiencia de usuario y accesibilidad.
              </p>
            </div>

            <div
              class="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-2">DevOps</h3>

              <p class="text-sm text-gray-600 leading-relaxed">
                Integración continua, automatización y despliegue de
                aplicaciones.
              </p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section
          class="bg-white border border-gray-200 rounded-3xl shadow-sm overflow-hidden"
        >
          
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { fetchCommunity } from "../utils/api";

const community = ref({
  leaders: [],
  members: [],
});

const loading = ref(true);

onMounted(async () => {
  community.value = await fetchCommunity();
  loading.value = false;
});
</script>
