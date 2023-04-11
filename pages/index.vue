<template>
  <div>
    <main class="bg-gray-800 px-8 md:px-16">
      <Navigation/>
      <Hero />
      <About class="py-16" />
      <Projects class="py-16" />
      <Experience class="py-16"  />
      <Contact class="py-16" />
    </main>
    <fixedSocials class="hidden md:block" />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
