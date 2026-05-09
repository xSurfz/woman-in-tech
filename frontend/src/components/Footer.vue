<template>
  <footer class="bg-gray-900 text-white mt-16">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Logo y derechos -->
        <div>
          <h3 class="text-xl font-bold mb-2">Women in Tech</h3>
          <p class="text-gray-400">Empoderando mujeres en tecnología</p>
          <p class="text-sm text-gray-500 mt-4">© 2026 - Todos los derechos reservados</p>
        </div>

        <!-- Enlaces rápidos -->
        <div>
          <h4 class="font-semibold mb-3">Enlaces rápidos</h4>
          <ul class="space-y-2">
            <li><router-link to="/events" class="text-gray-400 hover:text-white">Eventos</router-link></li>
            <li><router-link to="/programs" class="text-gray-400 hover:text-white">Programas</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white">Contacto</router-link></li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div>
          <h4 class="font-semibold mb-3">Síguenos</h4>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <Facebook size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <Twitter size="20" />
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <Linkedin size="20" />
            </a>
            <a href="mailto:contacto@womenintech.com" class="text-gray-400 hover:text-white">
              <Mail size="20" />
            </a>
          </div>
          <p class="text-gray-400 mt-4">contacto@womenintech.com</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-vue-next'
</script>