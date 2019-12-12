const routes = module.exports = require('next-routes')()

routes
.add('index', '/')
.add('/home')
.add('/bicameral')
.add('/unicameral')
.add('/security')
/* .add('channel', '/:slug.:id', 'channel')
.add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast') */