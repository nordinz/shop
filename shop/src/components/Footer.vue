<script setup>
import SignUp from './signUp.vue';





</script>
<template>
    <div class="footer">
        <div class="left">
        <SignUp/>
    </div>
    <div class="right">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis voluptate rem facere labore minus tenetur qui cum iste numquam.</p>
    </div>
    </div>
</template>
<style scoped>
.footer {
    background-color: rgba(0, 0, 0, 0.5);
    height: 15vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;
}


</style>