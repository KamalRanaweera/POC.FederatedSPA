<template>
    <div class="content">
      <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/app-component-a">App Component A</RouterLink>
          <RouterLink to="/app-component-b">App Component B</RouterLink>
          <RouterLink to="/app-component-c">App Component C</RouterLink>
          <RouterLink to="/app-component-d">App Component D</RouterLink>
          <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>