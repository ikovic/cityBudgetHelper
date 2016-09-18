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
        },
        taxpayer: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'organization'
    });

    Organization.associate = function (models) {
        Organization.hasMany(models.Budget);
        Organization.hasMany(models.User);
    };

    return Organization;
};
