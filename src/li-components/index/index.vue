<template>
    <div>
        <router-view></router-view>
        <fixNav></fixNav>
    </div>
</template>


<script>
    import fixNav from '../fixNav/fixNav';
    export default{
        components:{
            fixNav
        }
    }
</script>

<style lang="scss" >
    @import '../../li-style/index.scss';
</style>