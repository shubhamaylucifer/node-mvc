const express = require('express');

const router = express.Router();
const { handleGetAllUsers, 
  handlegetUserById,
  handleupdateUserById,
  handledeleteUserById,
  handlecreatenewUser
 } = require('../controllers/user')


router.route("/").get(handleGetAllUsers).post(handlecreatenewUser)

// router.get('/users', async (req,res)=>{
//     const alldbusers = await User.find({});
//     const html = `
//     <ul>
//         ${alldbusers.map((user)=>`<li>${user.first_name} with email : ${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

router.route("/:id")
.get(handlegetUserById)
.patch(handleupdateUserById)
.delete(handledeleteUserById)

module.exports = router;
