<script setup>
import Quotes from '@/components/icons/Quotes.vue'
import { ref } from 'vue';

const activeclass = ref(1)



 const arr = ref([{
    id : 1 ,
    src : 'https://i.pinimg.com/564x/1b/43/8c/1b438c2c4208c53d32a39a3d8832a87e.jpg',
    quote: 'No matter how hard or impossible it is, never lose sight of your goal.'   ,
    name :' Monkey D. Luffy' ,
    ceo : 'king of pirates'
 },
 {
    id :  2,
    src : 'https://i.pinimg.com/564x/54/b3/1d/54b31d3f7b2ea3bb634cc6cbfaf0e1b1.jpg',
    quote: 'Only those who have suffered long, can see the light within the shadows.'   ,
    name :'Roronoa Zoro' ,
    ceo : 'pirate hunter'
 },
 {    
    id : 3 ,
    src : 'https://i.pinimg.com/564x/a3/0f/c4/a30fc47f82678800ff3d4c42973c5daa.jpg',
    quote: 'What keeps me alive in this world is neither bodily organs nor muscles, it’s my soul.'   ,
    name :'Brook' ,
    ceo : 'dead bones'
 },
 {  id :  4,
    src : 'https://i.pinimg.com/564x/b0/69/31/b06931fe6bdfb84cce8653d5eada416d.jpg',
    quote: 'I don’t wanna live a thousand years. If I just live through today, that’ll be enough.'   ,
    name :'Portgas D. Ace' ,
    ceo : 'Fire Fist'
 }
])


</script>


<template>
    <section class="bg-second py-12">
    <div 
        v-for="index in arr"
        :key="index.id"
        class=""
    >
        <div v-if="activeclass === index.id" class="container grid lg:grid-cols-2">
            <img :src="index.src" alt="" class="lg:w-3/4">
            <div>
                <Quotes class="text-primary"/>
                <div>
                    <p class="text-4xl font-bold text-white pb-16">{{index.quote}}</p>
                    <h2 class="text-2xl font-bold text-white pb-3">{{ index.name }}</h2>
                    <h3 class="text-textcolor text-xl pb-24">{{ index.ceo }}</h3>
                </div>
                <div>
                    <button
                        v-for="item in arr"
                        :key="item.id"
                        :class="item.id === activeclass ? 'bg-logocolor' : 'bg-primary'" class="py-2 px-8 lg:px-12 mx-2"
                        @click="activeclass = item.id"
                    ></button> 
                </div>
            </div>
        </div>
    </div>
    </section>


</template>