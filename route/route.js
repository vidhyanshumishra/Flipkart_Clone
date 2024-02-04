import expres  from "express";

import { usersignup, userLogin } from "../controller/user-controller.js";
import { getProducts, getProductById } from "../controller/product-controller.js";

const router = expres.Router();

router.post('/signup', usersignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;