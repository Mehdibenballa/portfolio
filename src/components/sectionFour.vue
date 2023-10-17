<script setup>
import flesh from '@/components/icons/Flesh.vue'

</script>



<template>
<section class="bg-primary">
  <div class=" container grid lg:grid-cols-2 justify-between pt-8 lg:pt-20 lg:gap-56">
    <div class="lg:pb-36">
        <h2 class="text-textcolor text-lg tracking-widest">- Portfolio</h2>
        <p class="text-4xl font-bold text-white py-6">All Creative Works <br> Selected Project.</p>
        <p class="text-textcolor pt-6 pb-12">sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantuim</p>
        <a href="" class="flex items-center gap-8 py-6 ">
            <span class="text-logocolor font-bold text-2xl underline">Explore more</span>
            <div class="relative py-6 after:absolute after:left-0  lg:after:top-12 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg " /></div> 
        </a>
        <img src="@/assets/two.jpg" alt="" class="pt-4 lg:pt-36">
    </div>
    <div class="">
        <img src="@/assets//Capture.png" alt="" class="pb-4 pt-4 lg:pb-14">
        <img src="@/assets/three.png" alt="" class="lg:pt-36 pt-4 lg:pb-32">
    </div>
  </div>
 </section>

</template>