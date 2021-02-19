<template>
    <div>
        <div v-if='loggedIn'>Youre logged in!</div>
        <div v-else>You're not logged in!</div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
    data: () => ({
        loggedIn: false,
    }),
    
}
</script>

<style scoped>

</style>