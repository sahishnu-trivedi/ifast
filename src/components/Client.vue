<template>
    <div class="center-column">
        <div class="box">
            <h2 class="box-title"> <strong> My Clients </strong> </h2>
            <p class="box-subtitle"> Check out each collumn for more details </p>
            <div class="box-in">
                <img src="@/assets/img/jack.png" alt="img">
                <div class="box-body">
                    <h3 class="box-name">John Doe</h3>
                    <p class="box-designation">Senior Project Manager</p>
                </div>
            </div>
            <div class="box-in">
                <img src="@/assets/img/alex.png" alt="img">
                <div class="box-body">
                    <h3 class="box-name">John Doe</h3>
                    <p class="box-designation">Senior Project Manager</p>
                </div>
            </div>
            <div class="box-in">
                <img src="@/assets/img/walker.png" alt="img">
                <div class="box-body">
                    <h3 class="box-name">John Doe</h3>
                    <p class="box-designation">Senior Project Manager</p>
                </div>
            </div>
            <div class="box-in">
                <img src="@/assets/img/ramirez.png" alt="img">
                <div class="box-body">
                    <h3 class="box-name">John Doe</h3>
                    <p class="box-designation">Senior Project Manager</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Client",
}
</script>

<style lang="scss" scoped>
    .box-in {display: grid; grid-template-columns: auto 1fr; gap: 15px; align-items: center; margin-bottom: 25px;
    &:first-of-type{margin-top: 50px;}
    }
</style>