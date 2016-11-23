'use strict';

module.exports = function (sequelize, DataTypes) {
    const OrderItem = sequelize.define('OrderItem', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        unitOfMeasure: {
            type: DataTypes.STRING,
            allowNull: true
        },
        quantity: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    }, {
        tableName: 'order_item'
    });

    OrderItem.associate = function (models) {
        OrderItem.belongsTo(models.Organization, { foreignKey: { allowNull: true }});
        OrderItem.belongsTo(models.Order);
    };

    return OrderItem;
};
