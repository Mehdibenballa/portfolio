
<script setup>
    import Box from '@/components/icons/Box.vue'
    import pen from '@/components/icons/pen.vue'
    import Screen from'@/components/icons/Screen.vue'
</script>


<template>
<section>
    <div class="bg-primary lg:relative">
        <div class="container p-4 lg:before:bg-second lg:before:h-[calc(344px/2)] lg:before:w-full lg:before:absolute lg:before:top-0 lg:before:left-0">
            <div class="relative grid lg:grid-cols-3 gap-6">
                <div class="flex flex-col lg:flex-row gap-8 py-6 bg-boxcolorgray group hover:bg-bocxcolor items-center p-4">
                    <div class="lg:pt-16">
                        <Box class="text-white" />
                    </div>
                    <div class="lg:pt-16">
                        <p class="text-4xl font-bold text-white lg:pt-16">Product <br> Designer</p>
                        <h2 class="text-textcolor pt-4 group-hover:text-white group-hover:font-bold">124 Project</h2>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row gap-8 py-6 bg-boxcolorgray group hover:bg-bocxcolor items-center p-4">
                    <div class="lg:pt-16">
                        <pen class="text-white" />
                    </div>
                    <div class="lg:pt-16">
                        <p class="text-4xl font-bold text-white lg:pt-16">Branding <br> Designer</p>
                        <h2 class="text-textcolor pt-4 group-hover:text-white group-hover:font-bold">37 Project</h2>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row py-12 gap-8 bg-boxcolorgray group hover:bg-bocxcolor items-center p-4">
                    <div class="lg:pt-16">
                        <Screen class="text-white" />
                    </div>
                    <div class="lg:pt-16">
                        <p class="text-4xl font-bold text-white lg:pt-16">Branding <br> Designer</p>
                        <h2 class="text-textcolor pt-4 group-hover:text-white group-hover:font-bold">28 Project</h2>
                    </div>
                </div>
            </div>
            <div class="grid lg:grid-cols-4 gap-12 pt-28 pb-16 ">
                <img src="@/src/assets/logosvgcom.png" alt="" class="grayscale h-24 mx-auto">
                <img src="@/src/assets/Trello_logo.svg.png" alt="" class="grayscale h-24 mx-auto">
                <img src="@/src/assets/1280px-Dyson_logo.svg.png" alt="" class="grayscale h-24 mx-auto">
                <img src="@/src/assets/Disney+_logo.svg.png" alt="" class="grayscale h-24 mx-auto">
            </div>
        </div>
    </div>

</section>

</template>