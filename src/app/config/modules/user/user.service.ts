import { Order, User } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (user: User) => {
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ id: id });
  return result;
};

const updateUserInDB = async (id: string, updatedUser: User) => {
  const result = await UserModel.findOneAndUpdate({ id: id }, updatedUser, {
    new: true,
  });
  return result;
};

const deleteUserFromDB = async (id: string) => {
  const result = await UserModel.findOneAndDelete({ id: id });
  return result;
};

const addOrderToUserInDB = async (userId: string, order: Order) => {
  const result = await UserModel.findOneAndUpdate(
    { id: userId },
    { $push: { orders: order } },
    { new: true },
  );
  return result;
};

const getUserOrdersFromDB = async (userId: string) => {
  const result = await UserModel.findOne({ id: userId }, 'orders');
  return result?.orders || [];
};

const calculateTotalPriceFromDB = async (userId: string) => {
  const user = await UserModel.findOne({ id: userId });
  const totalPrice =
    user?.orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0,
    ) || 0;
  return totalPrice;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserInDB,
  deleteUserFromDB,
  addOrderToUserInDB,
  getUserOrdersFromDB,
  calculateTotalPriceFromDB,
};
