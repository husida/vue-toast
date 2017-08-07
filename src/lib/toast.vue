<template>
    <div>
        <transition name="toast-fade">
        <div v-show="show" class="mtoast" :class="position">
            <p class="content">{{text}}</p>
        </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: false,
                text: 'hello world',
                time: 1500,
                position: 'toast-default'
            }
        },
        mounted () {
        },
        methods: {},
        watch: {
            show (val) {
                if (val) {
                    setTimeout(() => {
                        this.show = false
                    }, this.time)
                }
            }
        }
    }
</script>

<style>
    .mtoast {
        position: fixed;
        z-index: 5000;
        left: 50%;
        background: hsla(0, 0%, 7%, .7);
        text-align: center;
        border-radius: 5px;
        color: #fff;
        bottom: 25%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }

    .mtoast .content {
        margin: 0;
        padding: 10px;
        border-radius: 15px;
    }

    .toast-fade-enter-active, .toast-fade-leave-active {
        opacity: 1;
        transition: opacity linear .2s;
    }
    .toast-fade-enter, .toast-fade-leave-active {
        opacity: 0;
    }
    .toast-bottom, .toast-default{
        bottom: 25%;
    }
    .toast-top{
        top: 25%;
    }
    .toast-center{
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>