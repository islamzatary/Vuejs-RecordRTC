<template>
  <div>
    <h2 class="text-md-center">Video</h2>
    <v-video></v-video>  </div>
</template>

<script>

import Video from '@/components/video/Video';

export default {
  name: 'Home',
  components: {'v-video':Video},
  data () {
    return {

    }
  },
  methods: {
  },
  computed: {
    
  },
  mounted: function () {
  }
}
</script>
