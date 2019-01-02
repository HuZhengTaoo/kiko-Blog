<template>
    <div class="link-bar">
        <a href="https://github.com/HuZhengTaoo" class="item github" ></a>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .link-bar{
        width: 100%;
        display: flex;
    }
    .item{
        display: inline-block;
        flex: 1;
        height: 60px;
    }
    .github{
        background: url('https://github.githubassets.com/pinned-octocat.svg') no-repeat;
    }
</style>