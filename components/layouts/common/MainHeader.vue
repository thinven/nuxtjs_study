<template>
    <header class="main-header">

    <!-- Logo -->
    <nuxt-link to="/" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Admin</b>LTE</span>
    </nuxt-link>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" @click="toggleMenubar">
        <span class="sr-only">Toggle navigation</span>
      </a>
      
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" @click="toggleDropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">{{notes_cnt}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{notes_cnt}} messages</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="note in notes" :key="note.time"><!-- start message -->
                    <a href="#" @click="test">
                      <div class="pull-left">
                        <img :src="note.img" class="img-circle" alt="User Image">
                      </div>
                      <h4>
                        {{note.role}}
                        <small><i class="fa fa-clock-o"></i>{{note.time}}</small>
                      </h4>
                      <p>{{note.msg}}</p>
                    </a>
                  </li>
                  <!-- end message -->
                </ul>
              </li>
              <li class="footer"><a href="#">See All Messages</a></li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" @click="toggleDropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{notifications_cnt}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{notifications_cnt}} notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="notification in notifications" :key="notification.id">
                    <a href="#" @click="test">
                      <i :class="'fa ' + notification.cls"></i> {{notification.msg}}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">View all</a></li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" @click="toggleDropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{tasks_cnt}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have {{tasks_cnt}} tasks</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="task in tasks" :key="task.id"><!-- Task item -->
                    <a href="#" @click="test">
                      <h3>
                        {{task.msg}}
                        <small class="pull-right">{{task.rop}}%</small>
                      </h3>
                      <div class="progress xs">
                        <div :class="'progress-bar ' + task.cls" :style="'width: '+task.rop+'%'" role="progressbar" :aria-valuenow="task.rop" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">{{task.rop}}% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" @click="toggleDropdown">
              <img src="/comp/adminlte/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">Alexander Pierce</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="/comp/adminlte/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar" @click="toggleSidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { closest, insertAfter } from '~/utils/Util';
export default {
  computed: {
    notes() {
      return this.$store.getters['adminlte/notes/allNotes'];
    },
    notes_cnt() {
      return this.notes.length;
    },
    notifications() {
      return this.$store.getters['adminlte/notifications/allNotifications'];
    },
    notifications_cnt() {
      return this.notifications.length;
    },
    tasks() {
      return this.$store.getters['adminlte/tasks/allTasks'];
    },
    tasks_cnt() {
      return this.tasks.length;
    }
  },
  methods: {
    toggleMenubar() {
      let body = document.querySelector("body");
      body.classList.toggle( 'sidebar-collapse' );
    },
    toggleSidebar() {
      let body = document.querySelector(".control-sidebar");
      body.classList.toggle( 'control-sidebar-open' );
    },
    toggleDropdown(e) {
      let parent = closest(e.target, ".dropdown");
      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
      } else {
        let div = document.createElement('div');
        div.classList.add('dropdown-backdrop');
        let a = parent.querySelector(".dropdown-toggle");
        insertAfter(a, div);
        div.addEventListener("click",function(e){
          e.target.remove();
          parent.classList.remove("open");
        });
        parent.classList.add("open");
      }
    },
    test(e) {
      alert("ok");
    }
  }
}
</script>