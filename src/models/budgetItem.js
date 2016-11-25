'use strict';

module.exports = function (sequelize, DataTypes) {
    const BudgetItem = sequelize.define('BudgetItem', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        }
    }, {
        tableName: 'budget_item'
    });

    BudgetItem.associate = function (models) {
        BudgetItem.belongsTo(models.Organization);
        BudgetItem.belongsTo(models.Budget, {foreignKey: {allowNull: false}, onDelete: 'CASCADE'});
        BudgetItem.hasMany(models.Order, {as: 'orders'});
    };

    return BudgetItem;
};
