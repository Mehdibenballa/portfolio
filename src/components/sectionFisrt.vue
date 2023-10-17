<script setup>
import instagram from '@/components/icons/Instagram.vue'
import linkedin from '@/components/icons/Linkedin.vue'
import dribble from '@/components/icons/Dribbel.vue'
import flesh from '@/components/icons/Flesh.vue'
</script>


<template>
  <section class="relative container grid grid-cols-1 lg:grid-cols-3 items-center justify-between before:bg-cover before:-translate-x-1/2 before:left-[75%] lg:before:left-[40%] before:absolute before:bg-[url('@/assets/Banner.png')] before:w-1/2 lg:before:w-[40%] before:h-[22rem] lg:before:h-[60rem] before:lg:-top-[24.5rem] before:-top-[13rem]  lg:before:bottom-0 bg-cover pb-24">
    <div class="lg:col-span-2 relative">
        <h1 class="text-white text-gilroy text-5xl lg:text-9xl font-bold before:absolute befor:mt-6 before:-translate-x-1/2 before:left-12 before:top-28 lg:before:top-[17rem] before:bg-logocolor before:w-16 before:h-2 mx-2 pb-12 lg:pb-32">
        Mehdi <br> BenBalla. 
        </h1>
        <div class="flex items-center gap-6 pb-8 pt-8 px-4">
        <a target="_blank" href="https://www.instagram.com/mehdibenballa/"><instagram class="text-white"/></a>
        <a target="_blank" href="https://www.linkedin.com/in/mehdi-benballa-5a5420296/"><linkedin  class="text-white"/></a>
        <a target="_blank" href="http://"><dribble  class="text-white"/></a>
      </div>
    </div>
    <div class="">
  <h2 class="text-textcolor text-lg tracking-widest">- Introduction</h2>
  <p class="text-4xl font-bold text-white py-6">Product Desinger and Devloper, based in Morrocco</p>
  <p class="text-textcolor py-6">Sed ut perspiciat unde omnis iste natus error sit voluptatebt accusantuim doloermque laundantuim, totam rem aperiam , eaque ipsa.</p>
  <div class="flex gap-8 py-8">
    <a href="" class="flex items-center gap-8">
      <span class="text-logocolor font-bold text-2xl underline">My story</span>
      <div class="relative after:absolute after:left-0 after:top-6 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg " /></div> 
    </a>
  </div>
    </div>
 </section>
</template>