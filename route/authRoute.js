const {
    registerController,
    loginController,
    forgotPasswordController,
    updateProfileController,
    getAllOrdersController,
    getOrdersController,
    orderStatusController
  } =require('../controllers/authcontroller.js');
  const { requireSignIn,isAdmin }=require('../meddlewere/authmeddlewere.js');
  
  const express=require('express')
  const router=express.Router()
  
  router.post("/register", registerController);
  router.post('/login',loginController)
  router.put("/forgot-password", forgotPasswordController);
  router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
  });
  //protected Admin route auth
  router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });
  
  router.put("/profile", requireSignIn, updateProfileController);

  router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);
  router.get("/orders", requireSignIn, getOrdersController);
  
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );
  
  module.exports= router;
 