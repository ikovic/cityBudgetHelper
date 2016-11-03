var bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        hashedPassword: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'user',
        classMethods: {
            setPassword: function (user, password, done) {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (hash) {
                            user.hashedPassword = hash;
                            done(user);
                        }
                    });
                });
            },
            validPassword: function (password, callback) {
                bcrypt.compare(password, this.password, function (err, res) {
                    callback(res);
                });
            }
        }
    });

    User.associate = function (models) {
        User.belongsTo(models.Organization);
    };

    return User;
};
