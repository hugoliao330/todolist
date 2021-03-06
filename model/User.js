'use strict'

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        loginId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'loginId'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: false,
        raw: true
        // other options
    })

    // user.validate = () => {
    //     return 1;
    // };

    // return user;
};