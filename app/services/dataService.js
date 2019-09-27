/* eslint-disable class-methods-use-this */
const HttpStatus = require('http-status-codes');
const Data = require('../models/data');

const { getStatusText } = HttpStatus;

class DatasService {
  async index() {
    const datas = await Data.find();
    return { status: HttpStatus.OK, data: datas };
  }

  async show(id) {
    const data = await Data.findById(id);
    if (!data) return { status: HttpStatus.NOT_FOUND, data: getStatusText(HttpStatus.NOT_FOUND) };
    return { status: HttpStatus.OK, data: { data } };
  }

  async create(body) {
    try {
      const tmpData = new Data(body);
      const data = await tmpData.save();
      return { status: HttpStatus.CREATED, data: { data } };
    } catch (error) {
      return { status: HttpStatus.UNPROCESSABLE_ENTITY, data: error };
    }
  }

  async update(id, body) {
    try {
      const data = await Data.findByIdAndUpdate(id, body, { new: true });
      if (!data) {
        return { status: HttpStatus.NOT_FOUND, data: getStatusText(HttpStatus.NOT_FOUND) };
      }
      return { status: HttpStatus.CREATED, data: { data } };
    } catch (error) {
      return { status: HttpStatus.UNPROCESSABLE_ENTITY, data: error };
    }
  }

  async delete(id) {
    const data = await Data.findByIdAndRemove(id);
    if (!data) return { status: HttpStatus.NOT_FOUND, data: getStatusText(HttpStatus.NOT_FOUND) };
    return { status: HttpStatus.CREATED, data: { data } };
  }
}

const datasService = new DatasService();

module.exports = datasService;
