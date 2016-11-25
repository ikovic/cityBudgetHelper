'use strict';

module.exports = function (sequelize, DataTypes) {
    const Order = sequelize.define('Order', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        identificator: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateReceived: {
            type: DataTypes.DATE,
            allowNull: true
        },
        type: {
            type: DataTypes.ENUM,
            values: ['roba', 'rad', 'usluga'],
            allowNull: true
        }
    }, {
        tableName: 'order'
    });

    Order.associate = function (models) {
        Order.belongsTo(models.BudgetItem);
        Order.belongsTo(models.Organization, {as: 'buyer'});
        Order.belongsTo(models.Organization, {as: 'Organization'});
        Order.hasMany(models.OrderItem, {as: 'orderItems'});
    };

    return Order;
};
