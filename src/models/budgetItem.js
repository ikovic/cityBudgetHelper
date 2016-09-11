module.exports = function (sequelize, DataTypes) {
    var BudgetItem = sequelize.define('BudgetItem', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        BudgetItem.belongsTo(models.Budget);
        BudgetItem.hasMany(models.Order);
    };

    return BudgetItem;
};
