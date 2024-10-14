import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

const send_reservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, time, date } = req.body;
    if (!firstName || !lastName || !phone || !email || !time || !date) {
        return next(new ErrorHandler("Please fill full reservation form!!", 400));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, time, date});
        res.status(201).json({
            success: true,
            message: "Reservation sent successfully!",
        });
    } catch (error) {
        // Handle Mongoose validation errors
        if (error.name == "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => error.message
            );
            return next(new ErrorHandler(validationErrors.join(","), 400));
        }
        //Handle other Error
        return next(error);
    }
};

export default send_reservation;