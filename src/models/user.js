module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        tableName: 'user'
    });

    User.associate = function(models) {
        User.belongsTo(models.Organization);
    };

    return User;
};
