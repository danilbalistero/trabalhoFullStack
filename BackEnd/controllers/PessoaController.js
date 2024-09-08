const { Pessoa } = require('../models');

exports.createPessoa = async (req, res) => {
    try {
        const { nome, cpf, telefone } = req.body;

        const pessoa = await Pessoa.create({
            nome,
            cpf,
            telefone,
        });
        res.status(201).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar pessoa', details: error.message });
    }
};

exports.getAllPessoas = async (req, res) => {
    try {
        const pessoa = await Pessoa.findAll();
        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
    }
};

exports.getPessoaById = async (req, res) => {
    try {
        const { id } = req.params;
        const pessoa = await Pessoa.findByPk(id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }
        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pessoas', details: error.message });
    }
};

exports.updatePessoa = async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, cpf, telefone } = req.body;

        const pessoa = await Pessoa.findByPk(id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        pessoa.nome = nome;
        pessoa.cpf = cpf;
        pessoa.telefone = telefone;

        await pessoa.save();

        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar cadastro de pessoa', details: error.message });
    }
};

exports.deletePessoa = async (req, res) => {
    try {
        const { id } = req.params;

        const pessoa = await Pessoa.findByPk(id);

        if (!pessoa) {
            return res.status(404).json({ error: 'Pessoa não encontrada' });
        }

        await pessoa.destroy();
        res.status(200).json(pessoa);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar cadastro de pessoa', details: error.message });
    }
};