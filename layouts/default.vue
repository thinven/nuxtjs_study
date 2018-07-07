<template>
  <div class="wrapper">
    <main-header />
    <main-sidebar />
    <nuxt/>
    <main-footer />
    <control-sidebar />
  </div>
</template>

<script>
import MainHeader from '~/components/layouts/common/MainHeader'
import MainSidebar from '~/components/layouts/common/MainSidebar'
import MainFooter from '~/components/layouts/common/MainFooter'
import ControlSidebar from '~/components/layouts/common/ControlSidebar'

export default {
  components: {
    MainHeader,
    MainSidebar,
    MainFooter,
    ControlSidebar
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/comp/bootstrap/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/comp/font-awesome/css/font-awesome.min.css' },
      { rel: 'stylesheet', href: '/comp/ionicons/css/ionicons.min.css' },
      { rel: 'stylesheet', href: '/comp/adminlte/css/AdminLTE.min.css' },
      { rel: 'stylesheet', href: '/comp/adminlte/css/skins/_all-skins.min.css' }
    ],
    bodyAttrs: {
      class: 'sidebar-mini skin-green'
    }
  }
}
</script>