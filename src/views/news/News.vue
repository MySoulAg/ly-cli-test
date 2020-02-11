<template>
    <article>
        <ul>
            <li>
                <div class="left"></div>
                <div class="right"></div>
            </li>
        </ul>
    </article>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
article {
    padding: 15px;
}

ul {
    li {
        display: flex;
        .left {
            width: 80px;
            height: 80px;
            background: #eee;
        }

        .right {
            flex: 1;
            min-height: 100%;
            margin-left: 10px;
            background: #eee;
        }
    }
}
</style>