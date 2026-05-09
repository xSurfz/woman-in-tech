<template>
  <div class="bg-gray-50 min-h-screen">

    <!-- Hero -->
    <section class="bg-gradient-to-r from-purple-700 to-fuchsia-600 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Testimonios
        </h1>

        <p class="text-lg text-purple-100 max-w-2xl mx-auto">
          Historias de experiencia dentro de la comunidad Women in Tech Colombia
        </p>
      </div>
    </section>

    <!-- Loading -->
    <div v-if="loading" class="flex flex-col items-center justify-center py-24">
      <div class="animate-spin rounded-full h-12 w-12 border-4 border-purple-200 border-t-purple-700"></div>
      <p class="mt-4 text-gray-600">Cargando testimonios...</p>
    </div>

    <!-- Content -->
    <section v-else class="py-20">
      <div class="max-w-6xl mx-auto px-4">

        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :breakpoints="{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }"
          class="pb-12"
        >
          <SwiperSlide v-for="t in testimonials" :key="t.id">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 h-full flex flex-col">

              <div class="flex items-center gap-4 mb-4">
                <img
                  :src="t.image"
                  class="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h3 class="font-bold text-gray-900">
                    {{ t.name }}
                  </h3>
                  <p class="text-purple-700 text-sm">
                    {{ t.role }}
                  </p>
                </div>
              </div>

              <p class="text-gray-600 italic flex-1">
                "{{ t.testimonial }}"
              </p>

              <div class="mt-4 flex text-yellow-400">
                <Star v-for="i in 5" :key="i" size="16" fill="currentColor" />
              </div>

            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star } from 'lucide-vue-next'
import { fetchTestimonials } from '../utils/api'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const modules = [Autoplay, Pagination, Navigation]

const testimonials = ref([])
const loading = ref(true)

onMounted(async () => {
  testimonials.value = await fetchTestimonials()
  loading.value = false
})
</script>