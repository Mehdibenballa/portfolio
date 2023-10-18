<script setup>
    import Logo from '@/components/icons/Logom.vue';
    import instagram from '@/components/icons/Instagram.vue'
    import linkedin from '@/components/icons/Linkedin.vue'
    import dribble from '@/components/icons/Dribbel.vue'
</script>

    <template>
        <footer class="bg-primary pb-8">
            <div class="flex flex-col justify-center items-center">
                <Logo class="text-logocolor" />
                <h2 class="py-6 font-bold text-lg text-white">Thanks for scrolling, <span class="font-normal"> that's all folks.</span></h2>
                <div class="flex items-center gap-6 pb-8 pt-8 px-4">
                    <a target="_blank" href="https://www.instagram.com/mehdibenballa/"><instagram class="text-white"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/mehdi-benballa-5a5420296/"><linkedin  class="text-white"/></a>
                    <a target="_blank" href="http://"><dribble  class="text-white"/></a>
                </div>
            </div>
        </footer>
    </template>