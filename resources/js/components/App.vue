<template>
    <div class="container">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "App",
        mounted() {
            console.log('component mounted')
        }
    }
</script>
