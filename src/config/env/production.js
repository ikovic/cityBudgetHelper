const config = {
    db: {
        connectionString: 'mysql://root:root@example.com:3306/budget_helper',
        database: 'budget_helper',
        username: 'root',
        password: 'root',
        options: {
            host: 'localhost',
            port: 3306,
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    },
    jwt: {
        secret: 'DO NOT USE IN PRODUCTION'
    },
    app: {
        port: process.env.PORT || 3000
    },
    bootstrap: false
};

// export config
module.exports = config;