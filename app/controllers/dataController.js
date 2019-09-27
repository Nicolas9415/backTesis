/* eslint-disable class-methods-use-this, no-unused-vars */

const datasService = require('../services/dataService');

class DataController {
  async index(req, res, next) {
    const { status, data } = await datasService.index();
    return res.status(status).json(data);
  }

  async show(req, res, next) {
    const { status, data } = await datasService.show(req.params.id);
    return res.status(status).json(data);
  }

  async create(req, res, next) {
    const { status, data } = await datasService.create(req.body);
    return res.status(status).json(data);
  }

  async update(req, res, next) {
    const { status, data } = await datasService.update(req.params.id, req.body);
    return res.status(status).json(data);
  }

  async delete(req, res, next) {
    const { status, data } = await datasService.delete(req.params.id);
    return res.status(status).json(data);
  }
}

const dataController = new DataController();

module.exports = dataController;
