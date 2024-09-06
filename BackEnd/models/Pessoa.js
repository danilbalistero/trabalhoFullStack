const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model { }

module.exports = (sequelize, DataTypes) => {
    Pessoa.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    }, {
        sequelize,
        modelName: 'Pessoa',
        tableName: 'pessoa',
        timestamps: false,
    });

    return Pessoa;
}