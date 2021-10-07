<<template>
  <div class="box">
    <nuxt-link to="/">home</nuxt-link>
    <nuxt-link to="/about">about</nuxt-link>
    <nuxt-link to="/user">user</nuxt-link>
    <Nuxt></Nuxt>
  </div>
</template>

<script>
export default {

}
</script>

<style>
html,body{
  text-align: center;
}
a{
  padding: 0 20px;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

.page-enter-active, .page-leave-active {
  transition: opacity 0.8s;
}

.bounce-enter-active {
  animation: bounce-in 0.8s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
}
</style>
