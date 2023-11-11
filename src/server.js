const app = require('./config/app')

const host = 'http://localhost'

app.listen(app.get('port'), () =>
    console.log(`Server is listening on http://${host}:${app.get('port')}`)
)
