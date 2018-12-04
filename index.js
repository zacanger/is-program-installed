module.exports = (program) => {
  try {
    require('child_process').execSync(`hash ${program} 2>/dev/null`)
    return true
  } catch (_) {
    return false
  }
}
