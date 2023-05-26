import Cart from '../models/Cart.js';
import stores from '../models/Store.js';

export const getAllStores = async (req, res) => {
  try {
    const stor = await stores.find();

    if (!stor.length) {
      return res.json({
        message: 'Stores empty',
        messageType: 'err',
      });
    }
    // console.log(stor);
    res.json(stor);
  } catch (error) {
    res.json({
      message:
        'Щось пішло не так в PostController getCar function ' + error.message,
    });
  }
};

export const createCart = async (req, res) => {
  try {
    const { name } = req.body;

    const newCar = new Cart({
      name,
      year,
      vinCode,
    });
    await newCar.save();

    res.json({ message: 'Данні успішно додані', messageType: 'ok', newCar });
  } catch (error) {
    res.json({
      message:
        error.code === 11000
          ? 'Такий VinCode вже існує'
          : `Помилка сервера ${error.message}`,
      messageType: 'err',
    });
  }
};
