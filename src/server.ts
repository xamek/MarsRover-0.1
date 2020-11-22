import app from '../src/app';

const server = app.listen(app.get("port"), () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${app.get("port")}`);
});

export default server;