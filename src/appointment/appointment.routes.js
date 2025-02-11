import { Router } from "express";
import { getAppoiment, saveAppointment, updateAppointemnt, cancellAppointment} from "./appointment.controller.js";
import { createAppointmentValidator, updateAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppoiment);

router.put("/updateAppointment/:uid", updateAppointmentValidator, updateAppointemnt);

router.patch("/cancellAppointment/:uid", cancellAppointment);

export default router;