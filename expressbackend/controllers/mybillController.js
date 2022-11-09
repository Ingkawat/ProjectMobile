import MybillModel from '../models/Mybill.js'

class MybillController {
  static getAllDoc = async (req, res) => {
    try {
      const result = await MybillModel.find()
      res.send(result)
    } catch (error) {
      console.log(error)
    }
  }
}

export default MybillController