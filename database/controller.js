/** Controller */
import Users from "../model/user";

//get : http://localhost:3000/api/users
export async function GetUsers(req, res) {
  try {
    const users = await Users.find({});
    // console.log("users start : ", users);

    if (!users) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

//post : http://localhost:3000/api/users
export async function PostUsers(req, res) {
  try {
    const formData = req.body;
    // console.log(formData);
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

//put : http://localhost:3000/api/users/1
export async function PutUsers(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "User Not Selected...!" });
    }
  } catch (error) {
    res.status(404).json({ error: "error while updating the data" });
  }
}

//delete : http://localhost:3000/api/users/1
export async function DeleteUsers(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await Users.findByIdAndRemove(userId);
      return res.status(200).json({ deleted: userId });
    } else {
      res.status(404).json({ error: "User Not Selected...! " });
    }
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the use" });
  }
}
