/* jshint indent: 2 */

/*module.exports = function(sequelize, DataTypes) {
  return sequelize.define('budget_item', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    budgetId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'budget',
        key: 'id'
      }
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
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  }, {
    tableName: 'budget_item'
  });
};*/
