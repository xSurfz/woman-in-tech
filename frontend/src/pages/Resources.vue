<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Hero -->
    <section
      class="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-20"
    >
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Recursos Tecnológicos
        </h1>

        <p class="text-lg text-purple-100 max-w-2xl mx-auto">
          Potencia tu crecimiento profesional con cursos, materiales y recursos
          tecnológicos seleccionados para la comunidad.
        </p>
      </div>
    </section>

    <!-- Loading -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <div
        class="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-700"
      ></div>

      <p class="mt-4 text-gray-600">Cargando recursos...</p>
    </div>

    <!-- Content -->
    <div v-else class="max-w-7xl mx-auto px-4 py-16">
      <!-- Filters -->
      <section class="mb-12">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="type in resourceTypes"
            :key="type.value"
            @click="selectedType = type.value"
            :class="[
              'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 border',
              selectedType === type.value
                ? 'bg-purple-700 text-white border-purple-700 shadow-lg'
                : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:text-purple-700',
            ]"
          >
            {{ type.label }}
          </button>
        </div>
      </section>

      <!-- Empty -->
      <div
        v-if="filteredResources.length === 0"
        class="bg-white border border-gray-200 rounded-2xl p-12 text-center"
      >
        <p class="text-gray-600">
          No hay recursos disponibles para esta categoría.
        </p>
      </div>

      <!-- Grid -->
      <div v-else class="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        <article
          v-for="resource in paginatedResources"
          :key="resource.id"
          class="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
        >
          <!-- Image -->
          <div class="relative">
            <img
              :src="resource.image"
              :alt="resource.title"
              class="w-full h-56 object-cover"
            />

            <div class="absolute top-4 right-4">
              <span
                :class="[
                  'px-3 py-1 rounded-full text-xs font-semibold uppercase',
                  getTypeColor(resource.type),
                ]"
              >
                {{ getTypeLabel(resource.type) }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow">
            <div class="mb-4">
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                {{ resource.title }}
              </h3>

              <p class="text-gray-600 leading-relaxed line-clamp-3">
                {{ resource.description }}
              </p>
            </div>

            <!-- Metadata -->
            <div class="mt-auto">
              <div class="flex items-center gap-2 text-sm text-gray-500 mb-5">
                <component
                  :is="getTypeIcon(resource.type)"
                  size="16"
                  class="text-purple-700"
                />

                <span>
                  {{ getTypeLabel(resource.type) }}
                </span>
              </div>

              <a
                :href="resource.link"
                target="_blank"
                rel="noopener noreferrer"
                class="w-full inline-flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 rounded-xl transition"
              >
                Acceder al recurso

                <ExternalLink size="18" />
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Pagination -->
      <div
        v-if="totalPages > 1"
        class="flex justify-center items-center gap-2 mt-14 flex-wrap"
      >
        <button
          @click="previousPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Anterior
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          :class="[
            'w-10 h-10 rounded-lg font-semibold transition',
            currentPage === page
              ? 'bg-purple-700 text-white'
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100',
          ]"
        >
          {{ page }}
        </button>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Siguiente
        </button>
      </div>

      <!-- Community Recommendations -->
      <section class="mt-24">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Recomendaciones de la Comunidad
          </h2>

          <p class="text-gray-600 max-w-2xl mx-auto">
            Recursos y plataformas frecuentemente utilizados por integrantes de
            Women in Tech Colombia.
          </p>
        </div>

        <div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <GraduationCap class="text-purple-700 mb-4" size="28" />

            <h3 class="font-bold text-gray-900 mb-2">Plataformas educativas</h3>

            <p class="text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <BookOpen class="text-purple-700 mb-4" size="28" />

            <h3 class="font-bold text-gray-900 mb-2">Materiales gratuitos</h3>

            <p class="text-sm text-gray-600 leading-relaxed">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <LinkIcon class="text-purple-700 mb-4" size="28" />

            <h3 class="font-bold text-gray-900 mb-2">Recursos online</h3>

            <p class="text-sm text-gray-600 leading-relaxed">
              Ut enim ad minim veniam quis nostrud exercitation ullamco.
            </p>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl p-6">
            <Award class="text-purple-700 mb-4" size="28" />

            <h3 class="font-bold text-gray-900 mb-2">Becas y oportunidades</h3>

            <p class="text-sm text-gray-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse.
            </p>
          </div>
        </div>
      </section>

      <!-- Newsletter -->
      <section class="mt-24">
        <div class="bg-white border border-gray-200 rounded-3xl p-10">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Mantente informada
            </h2>

            <p class="text-gray-600 mb-8">
              Recibe actualizaciones sobre nuevos cursos, becas y materiales
              educativos para potenciar tu desarrollo profesional.
            </p>

            <div class="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                class="flex-1 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
              />

              <button
                class="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-xl font-semibold transition"
              >
                Suscribirme
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";

import {
  ExternalLink,
  GraduationCap,
  Award,
  Link as LinkIcon,
  BookOpen,
} from "lucide-vue-next";

import { fetchResources } from "../utils/api";

const resources = ref([]);
const loading = ref(true);

const selectedType = ref("all");

const currentPage = ref(1);
const itemsPerPage = 6;

const resourceTypes = [
  {
    value: "all",
    label: "Todos",
  },
  {
    value: "course",
    label: "Cursos",
  },
  {
    value: "scholarship",
    label: "Becas",
  },
  {
    value: "link",
    label: "Enlaces",
  },
  {
    value: "material",
    label: "Materiales",
  },
];

const filteredResources = computed(() => {
  if (selectedType.value === "all") {
    return resources.value;
  }

  return resources.value.filter(
    (resource) => resource.type === selectedType.value,
  );
});

const totalPages = computed(() => {
  return Math.ceil(filteredResources.value.length / itemsPerPage);
});

const paginatedResources = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;

  const end = start + itemsPerPage;

  return filteredResources.value.slice(start, end);
});

watch(selectedType, () => {
  currentPage.value = 1;
});

const goToPage = (page) => {
  currentPage.value = page;
};

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const getTypeLabel = (type) => {
  const labels = {
    course: "Curso",
    scholarship: "Beca",
    link: "Enlace",
    material: "Material",
  };

  return labels[type] || "Recurso";
};

const getTypeColor = (type) => {
  const colors = {
    course: "bg-blue-100 text-blue-700",
    scholarship: "bg-emerald-100 text-emerald-700",
    link: "bg-purple-100 text-purple-700",
    material: "bg-orange-100 text-orange-700",
  };

  return colors[type] || "bg-gray-100 text-gray-700";
};

const getTypeIcon = (type) => {
  const icons = {
    course: GraduationCap,
    scholarship: Award,
    link: LinkIcon,
    material: BookOpen,
  };

  return icons[type] || LinkIcon;
};

onMounted(async () => {
  resources.value = await fetchResources();
  loading.value = false;
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
