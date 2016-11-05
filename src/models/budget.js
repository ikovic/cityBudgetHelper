module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define('Budget', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        year: {
            type: DataTypes.DATE,
            allowNull: true
        },
        default: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Proračun'
        }
    }, {
        tableName: 'budget'
    });

    Budget.associate = function (models) {
        Budget.belongsTo(models.Organization);
        Budget.hasMany(models.BudgetItem);
    };

    return Budget;
};
