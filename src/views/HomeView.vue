<script setup>
import sectionFisrt from '@/components/sectionFisrt.vue';
import navBar from '@/components/navBar.vue';
import sectionTwoVue from '@/components/sectionTwo.vue';
import  sectionThree from '@/components/sectionThree.vue'
import sectionFour from '@/components/sectionFour.vue';
import sectionFive from '@/components/sectionFive.vue';
import slider from '@/components/slider.vue';
</script>

<template>
  <header class="bg-primary rounded-t-md  md:w-full">
    <navBar />
    <sectionFisrt class="px-4" />
  </header>
  <sectionTwoVue class="p-4" id="services" />
  <sectionThree class=""/>
  <sectionFour class="p-4" id="works"/>
  <sectionFive id="blog" class="p-4"/>
  <slider id="blog" class="p-4" />
</template>
