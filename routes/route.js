import express from "express";
import { getImage, uploadFile } from "../controller/imageController.js";
import { newMessage, getMessage } from "../controller/messageController.js";
import { addUser, getUsers } from "../controller/user-controller.js";
import upload from '../util/upload.js'

import {
  newConversation,
  getConversation,
} from "../conversation-controller/ConversationController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);

route.post("/conversation/add", newConversation);
route.post("/conversation/get", getConversation);

route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessage);

route.post("/file/upload",upload.single("file"), uploadFile);
route.get("/file/:filename",getImage);

export default route;
