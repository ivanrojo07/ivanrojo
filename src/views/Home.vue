<template>
    <div id="homePage" class="container mx-auto max-w-screen-xl">
        <main id="wrapper" class="flex flex-col sm:flex-row-reverse sm:m-12 shadow-2xl">
            <!-- lateral derecho: foto -->
            <div id="sidebar" class="w-full sm:max-w-sm p-8 bg-gradient-to-b from-blue-300 via-red-300 to-purple-100">
                <div class="px-2 mb-12">

                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data () {
            return {
                msg: 'Hello Vue!'
            }
        },
        methods: {
            changeMsg () {
                this.msg = 'Hello Vue!'
            }
        }  
    }
</script>   