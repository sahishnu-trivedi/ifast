<template>
    <div class="left-column">
        <div class="box">
            <h1 class="box-title"> <strong> My Profile </strong> </h1>
            <p class="box-subtitle"> Check out each collumn for more details </p>
            <div class="box-in">
                <img src="../assets/img/alex1.png" alt="img" width="72">
                <div class="box-body">
                    <h3 class="box-name">John Doe</h3>
                    <p class="box-designation">Senior Project Manager</p>
                </div>
            </div>
        </div>
        <Static />
    </div>
</template>

<script>
import Static from './Static'
export default {
    name: "Profile",
    components: {
        Static
    }
}
</script>

<style lang="scss" scoped>
.box-in {display: grid; grid-template-columns: 72px 1fr; gap: 15px; align-items: center; margin-top: 22px;}
</style>
