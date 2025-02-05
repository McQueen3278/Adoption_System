import { Router } from "express";
import { getAppoiment, saveAppointment, updateAppointemnt } from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppoiment)

router.put("/updateAppointment/:uid", updateAppointmentValidator, updateAppointemnt)

export default router;