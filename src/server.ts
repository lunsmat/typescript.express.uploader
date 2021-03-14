import { app } from './app';

const server = app.listen(app.get('port'), () => {
    const address = server.address();

    if (typeof address === 'object')
        console.log(`🚀 Server running in the port ${address?.port}`);
});
