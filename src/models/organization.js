
module.exports = function (sequelize, DataTypes) {
    var Organization = sequelize.define('Organization', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        OIB: {
            type: DataTypes.STRING,
            allowNull: true
        },
        IBAN: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'organization'
    });
    return Organization;
};
