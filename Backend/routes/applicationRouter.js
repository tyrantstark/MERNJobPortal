import express from "express"
import { employerGetAllApplications,jobseekerDeleteApplication,jobseekerGetAllApplications, postApplication } from "../controllers/applicationController.js";
const router=express.Router();
import { isAuthenticated } from "../middleware/auth.js";

router.post("/post", isAuthenticated, postApplication);
router.get("/employer/getall", isAuthenticated, employerGetAllApplications);
router.get("/jobseeker/getall", isAuthenticated, jobseekerGetAllApplications);
router.delete("/delete/:id", isAuthenticated, jobseekerDeleteApplication);


export default router