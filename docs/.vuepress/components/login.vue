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
                if(this.value=='iqidao123'){
                    localStorage.setItem('iqidao',this.value)
                    alert('ok')
                }
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