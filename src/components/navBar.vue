<script setup>
import { ref } from 'vue';
import Logo from '@/components/icons/Logom.vue';

 const activeTab = ref(0)
const menus = ref([{
  id : 1,
  name : 'Services',
  link :'#services',
},
{
  id : 2,
  name : 'Works',
  link :'#works'
},
{
  id : 13,
  name : 'Blog',
  link :'#blog'
}
])
</script>
 <template>
    <nav class="lg:container grid grid-cols-3 items-center justify-between md:text-sm lg:text-lg py-16">
    <div class="col-span-2">
      <Logo class="text-logocolor" />
    </div>
    <div class="hidden lg:flex items-center gap-8">
      <div v-for="menu in menus" :key="menu.id" class="font-bold text-4xl  text-navcolor flex flex-col items-center">
          <a @click="activeTab = menu.id" :class="[activeTab === menu.id  ? 'text-white before:absolute before:h-2 before:w-2 before:bg-logocolor before:rounded-full before:top-[3rem] before:left-1/2 before:-translate-x-1/2' :' text-navcolor']" :href="menu.link" class=" relative">
            {{ menu.name }}
          </a>
      </div>
    </div>
  </nav>
 </template>
