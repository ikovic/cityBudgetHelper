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
        password: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'user',
        instanceMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
            },
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password);
            }
        }
    });

    User.associate = function (models) {
        User.belongsTo(models.Organization);
    };

    return User;
};
