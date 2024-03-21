<template>
   
    <section>
        <HeaderComp/>
    </section>
    <router-view/>
</template>
<script>
import HeaderComp from '../shared/HeaderComp.vue';

export default {
  components: {
    HeaderComp
  },
}

</script>