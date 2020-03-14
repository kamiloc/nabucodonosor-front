<template>
  <div class="container">
    <nav class="nav-menu">
      <h3 class="nav-menu__title">Navegación</h3>
      <ul>
        <li
          v-for="navItem in navItems"
          :key="navItem.label"
          class="nav-menu__item"
        >
          <vs-button color="#3d405b" :href="navItem.to" gradient>
            {{ navItem.label }}
          </vs-button>
        </li>
      </ul>
    </nav>
    <section class="device-status">
      <h3 class="device-status__title">Estado del dispositivo</h3>
      <div class="center con-switch">
        <vs-switch v-model="deviceStatus">
          <template #off>
            Off
          </template>
          <template #on>
            On
          </template>
        </vs-switch>
      </div>
    </section>
    <div class="bg-image"></div>
  </div>
</template>

<script>
export default {
  layout: 'ap-default',
  data: () => ({
    navItems: [
      { label: 'Hisotial', to: '/history' },
      { label: 'Desplazamiento', to: '/moves' },
      { label: 'Gráficas', to: '/graphs' }
    ],
    deviceStatus: false
  })
}
</script>

<style lang="scss">
body {
  background-color: $color-background;
}

.head,
.foot {
  width: 55%;
}
.container {
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 50% 0 5%;
  text-align: center;
}

.nav-menu,
.device-status {
  @include flex-container-colums;
  min-height: 300px;
  padding-top: 10%;
  width: 100%;
  &__title {
    @include h4-title-red;
    flex: 0 0 100%;
    margin-bottom: 1em;
    text-align: center;
  }
}

.nav-menu {
  &__item {
    margin: 16px 0;
    .vs-button {
      font-family: inherit;
      font-size: 0.8em;
      letter-spacing: -0.2px;
      font-weight: 800;
      text-transform: uppercase;
      margin: 0 auto;
      width: 50%;
    }
  }
}

.device-status {
  .con-switch {
    font-family: inherit;
    font-weight: 600;
    margin-right: auto;
    text-transform: uppercase;
    margin: 0 auto;
    width: 20%;
  }
}

.bg-image {
  background-image: url(../static/background.jpg);
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  border-left: 1px solid $purple-light;
  bottom: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 45vw;
  z-index: 2;
}
</style>
