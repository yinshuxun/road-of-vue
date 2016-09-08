const requireContext = require.context('.', false, /\.js$/)

const utils = requireContext.keys().reduce((pre, curr, index, arr)=> {
    return Object.assign(requireContext(curr), pre)
}, {})

export default utils;
