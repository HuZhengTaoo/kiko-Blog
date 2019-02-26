<template>
    <div>
        <input type="text" v-model="value" placeholder="请输入观看码" @blur="check">
    </div>
</template>

<script>
    export default {
        data(){
            return{
                value:''
            }
        },
        methods: {
            check(){
                
            }
        },
        mounted () {
            if(localStorage.getItem('iqidao')=='iqidao124'){
                    alert('ok')
                }else{
                    alert('失败')
                }
        }
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