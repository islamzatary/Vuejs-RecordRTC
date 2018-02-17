<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped">
      <a href="https://www.islamzatary.com/">
        <img src="http://www.islamzatary.com/projects/legochart/images/lego.png" title="Talentera" width="65" />
      </a>
      <v-spacer></v-spacer>
      <v-list-tile-avatar>
        <img v-bind:src="user.avatar">
      </v-list-tile-avatar>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid>
          <v-slide-y-transition mode="out-in">
            <v-layout column align-center>
                  <router-view></router-view>
            </v-layout>
          </v-slide-y-transition>
        </v-container>
      </v-content>
    </main>
    <v-footer :fixed="fixed" app v-show="validUser">
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        validUser:false,
        user: {
          avatar: "https://vuetifyjs.com/static/doc-images/lists/2.jpg"
        },
        navs: [
          {
            icon: 'bubble_chart',
            title: 'Register',
            link: '/register',
            order: 2
          },
          {
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/',
            order: 1
          },
          {
            icon: 'video_call',
            title: 'Assesment',
            link: '/assesment',
            order: 3
          },
          {
            icon: 'bubble_chart',
            title: 'Signup',
            link: '/signup',
            order: 4
          }
        ],
        miniVariant: true,
        right: true,
        rightDrawer: false,
        title: 'Talentera'
      }
    },
    computed: {
      orderedNavs: function () {
        return this.navs.sortBy('order');
      }
    },
    methods: {
    },
    created: function(){
     
    }
  }

Array.prototype.sortBy = function(p) {
  return this.slice(0).sort(function(a,b) {
    return (a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0;
  });
}

</script>
