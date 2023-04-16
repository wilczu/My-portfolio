<template>
    <div>
        
        <div class="flex items-center justify-center h-screen text-white text-center">
            <div class="flex flex-col gap-4">
                <div>
                    <h1 class="text-pink-600 text-5xl">Not found</h1>
                </div>
                <div>
                    <h3 class="text-2xl">This page doesn't exist</h3>
                </div>
                <div>
                    <nuxt-link to="/">
                        <Button type="button" name="Home page" />
                    </nuxt-link>
                </div>
            </div>
        </div>

    </div>
</template>