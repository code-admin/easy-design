//const req = require.context('./svgs', true, /\.svg$/);  // 报错， 改用以下方式处理；

/*
 ***
 */
const req = require.context('!svg-sprite-loader?{"symbolId":"easy-desige-[name]"}!./svgs', false, /.svg$/);

const requireAllSvgs = requireContext => requireContext.keys().map(requireContext);

requireAllSvgs(req);