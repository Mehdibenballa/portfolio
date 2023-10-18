<script setup>
import flesh from '@/components/icons/Flesh.vue'
import upload from '@/components/icons/upload.vue'

</script>


    <template>
        <section class="bg-primary pb-12">
            <div class="container grid lg:grid-cols-2 justify-between pt-20">
            <div>
                <p class="text-3xl font-bold text-white py-6">Got a project? <br> Let's talk.</p>
                <p class="text-textcolor pt-6 pb-12">sed ut perspiciatis unde omnis iste natus error sit <br> voluptatem accusantuim</p>
                <a href="" class="flex items-center gap-8 py-6 ">
                <span class="text-logocolor font-bold text-2xl underline">mehdikech15@gmail.com</span>
                <div class="relative py-6 after:absolute after:left-0  lg:after:top-12 after:bg-logocolor after:w-6 after:h-0.5"><flesh class="text-logocolor text-lg " /></div> 
                </a>
            </div>
            <div>
                <h2 class="text-3xl font-bold text-white py-6">Estimate your project?<br> Let me know here.</h2>
                <form action="" class="grid">
                    <label for="" class="text-xl font-bold text-white py-6">What's your name?</label>
                    <input type="text" class="bg-primary outline-none text-white">
                    <hr class="border-b border-[#3b3d48]">
                    <label for="" class="text-xl font-bold text-white py-6">Your fancy email</label>
                    <input type="text" class="bg-primary outline-none text-white">
                    <hr class="border-b border-[#3b3d48]">
                    <label for="" class="text-xl font-bold text-white py-6 grid grid-cols-2 items-center">Tell me about your project 
                            <div class="flex justify-end items-center gap-6">
                                <div>
                                    <label for="add" class="cursor-pointer">
                                        <input hidden type="file" name="add" id="add" class="">
                                        <upload class=""/>
                                    </label>
                                </div>
                                <button type="submit">
                                    <div class="relative py-6 after:absolute after:left-0  lg:after:top-12 after:bg-logocolor after:w-6 after:h-0.5">
                                        <flesh class="text-logocolor text-lg " />
                                    </div>
                                </button>
                            </div> 
                    </label>
                    <textarea name="" id="" cols="30" rows="2" class="bg-primary outline-none text-white"></textarea>
                </form>
            </div>
            </div>
        </section>
    </template>