// packages/[pkg].paths.js
export default {
  paths() {
    return [
      { params: { pkg: 'foo' } },
      { params: { pkg: 'about' } },
      { params: { pkg: 'bar' } },
    ]
  },
}
