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
        }
    }, {
        tableName: 'budget'
    });

    Budget.associate = function(models) {
        Budget.belongsTo(models.Organization);
    };

    return Budget;
};
