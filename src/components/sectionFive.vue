<script setup>
import flesh from '@/components/icons/Flesh.vue'

</script>



<template>
<section class="bg-second pb-12">
  <div class=" container grid lg:grid-cols-2 justify-between pt-20">
    <div class="lg:pb-36">
        <h2 class="text-textcolor text-lg tracking-widest">- Blog</h2>
        <p class="text-4xl font-bold text-white py-6">What's new? <br> My blog and news.</p>
    </div>
    <div class="">
        <div class="grid grid-cols-4 pb-12">
          <h2 class="pt-16 text-textcolor px-2"> Feb 26 . blog </h2>
          <a href="" class="col-span-3 flex justify-between gap-8 pt-14">
            <span class="text-white font-bold text-xl">Let this be a lesson to you</span>
            <div class="relative after:absolute after:left-0  lg:after:top-22 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg"/></div> 
          </a>
        </div>
        <hr class="border-b border-[#3b3d48]">
        <div class="grid grid-cols-4 pb-12">
          <h2 class="pt-16 text-textcolor px-2"> Feb 26 . blog </h2>
          <a href="" class="col-span-3 flex justify-between  gap-8 pt-14">
            <span class="text-white font-bold text-xl">How do you use time tracking for <br> projects?</span>
            <div class="relative after:absolute after:left-0  lg:after:top-22 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg"/></div> 
          </a>
        </div>
        <hr class="border-b border-[#3b3d48]">
        <div class="grid grid-cols-4 pb-12">
          <h2 class="pt-16 text-textcolor px-2"> Feb 26 . blog </h2>
          <a href="" class="col-span-3 flex justify-between gap-8 pt-14">
            <span class="text-white font-bold text-xl">Ego and emphaty in design</span>
            <div class="relative after:absolute after:left-0  lg:after:top-22 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg"/></div> 
          </a>
        </div>
    </div>
  </div>
 </section>

</template>