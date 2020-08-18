module.exports = function(config) {
  config.addPassthroughCopy('assets')
  return { passthroughFileCopy: true };
}