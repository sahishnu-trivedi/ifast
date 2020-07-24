<template>
    <div class="box">
        <div class="head-wrap">
            <div>
                <h2 class="box-title"> <strong> Statistic </strong> </h2>
                <p class="box-subtitle"> Check out each collumn for more details </p>
            </div>
            <div>
                <img src="../assets/img/icons8-more.svg" alt="icons8-more">
            </div>
        </div>
        <div>
            <ul class="stat-box">
                <li class="stat-red">
                    <p class="status-text">In Service</p>
                    <span class="status-amt">&dollar; 247.49</span>
                </li>
                <li class="stat-red">
                    <p>Service needed</p>
                    <span>&dollar; 1547.49</span>
                </li>
                <li class="stat-orange">
                    <p>Fully Serviced</p>
                    <span>&dollar; 247.49</span>
                </li>
                <li class="stat-green">
                    <p>Pending</p>
                    <span>&dollar; 1547.49</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.head-wrap{display: grid; align-items: center; grid-template-columns: 20fr 1fr;}
.stat-box{display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 1rem; margin-top: 30px;
    li{position: relative; padding-left: 20px;
        &:before{content: ''; position: absolute; top: 0; left: 0; background: var(--bg-color); width: 4px; height: 100%; border-radius: 50px;}
        &:after{content: ''; position: absolute; bottom: 0; left: 0; width: 4px; height: 60%; border-radius: 50px;}
        &.stat-red:after{background: var(--primary-color);}
        &.stat-orange:after{background: var(--status-orange);}
        &.stat-green:after{background: var(--status-green);}
        p{font-size: 12px;}
        span{font-weight: 600;}
    }
}
</style>