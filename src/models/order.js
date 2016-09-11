module.exports = function (sequelize, DataTypes) {
    var Order = sequelize.define('Order', {
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
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        dateReceived: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'order'
    });

    Order.associate = function (models) {
        Order.belongsTo(models.BudgetItem);
        Order.belongsTo(models.Organization, {as: 'buyer'});
        Order.belongsTo(models.Organization, {as: 'supplier'});
    };

    return Order;
};
