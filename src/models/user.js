'use strict';

const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('User', {
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
        instanceMethods: {
            setPassword(user, password, done) {
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(password, salt, function (err, hash) {
                        if (hash) {
                            user.hashedPassword = hash;
                            done(user);
                        }
                    });
                });
            },
            validatePassword(password) {
                return new Promise((resolve, reject) => {
                    bcrypt.compare(password, this.hashedPassword, function (err, res) {
                        if (err || !res) {
                            reject(err);
                        } else {
                            resolve(res);
                        }
                    });
                });
            },
            toJson() {
                return {
                    id: this.id,
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    orgId: this.OrganizationId
                }
            }
        }
    });

    User.associate = function (models) {
        User.belongsTo(models.Organization);
    };

    return User;
};
