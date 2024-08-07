import express from "express";
import { z } from "zod";
import db, { Database, TableName } from "../database";
import { addFiltration } from "../helper/addFiltration";
import { SelectQueryBuilder } from "kysely";
import { paginatedResults } from "../helper/paginatedResults";

const otherLeaveEvaluationRouter = express.Router();

otherLeaveEvaluationRouter.get("/", async (req, res) => {
    try {
        var query = db
        .selectFrom("Other_Leave_Evaluation")
        .selectAll();
        
        query = addFiltration("Other_Leave_Evaluation", query as SelectQueryBuilder<Database, TableName, {}>,req) as any;

        paginatedResults(query, req, res);
      }
       catch (error) {
        res.status(500).json({ message: "Internal server error", error });
      }
  });

  const otherLeaveEvaluatesReqBody = z.object({
    applicant_id: z.string(),
    evaluation_type: z.string(),
    le_comment: z.string().nullable(),
    le_evaluation_time: z.string().transform((val) => new Date(val)),
    le_status: z.string(),
    leave_id: z.number(),
  });
  
  otherLeaveEvaluationRouter.post("/add", async (req, res) => {
    try {
      const { applicant_id,
        evaluation_type,
        le_comment,
        le_evaluation_time,
        le_status,
        leave_id } = otherLeaveEvaluatesReqBody.parse(req.body);
  
        await db
          .insertInto("Other_Leave_Evaluation")
          .values({
            applicant_id: applicant_id,
            evaluation_type: evaluation_type,
            le_comment: le_comment,
            le_evaluation_time: le_evaluation_time,
            le_status: le_status,
            leave_id: leave_id    
        })
        .executeTakeFirst();
  
        
  
      // Return the session id
      res.status(200).send({
        message: "Data Inserted Successfully in Other_Leave_Evaluation Table.",
      });
    } catch (error) {
      var typeError: z.ZodError | undefined;
      if (error instanceof z.ZodError) {
        typeError = error as z.ZodError;
        return res.status(400).json({
          name: "Invalid data type.",
          message: JSON.parse(typeError.message),
        });
      }
      return res.status(400).json({ message: "Invalid request body", error });
    }
  });

  otherLeaveEvaluationRouter.put('/update',async (req, res)=>{
    const { applicant_id,
        evaluation_type,
        le_comment,
        le_evaluation_time,
        le_status,
        leave_id } = otherLeaveEvaluatesReqBody.parse(req.body);
    try{
        await db
            .updateTable('Other_Leave_Evaluation')
            .set({
                le_status:le_status,
                le_comment: le_comment,
                le_evaluation_time: le_evaluation_time
            })
            .where('Other_Leave_Evaluation.evaluation_type','=',evaluation_type)
            .where('Other_Leave_Evaluation.leave_id','=',leave_id)
            .where('Other_Leave_Evaluation.applicant_id','=',applicant_id)
        .executeTakeFirst();

        res.status(200).send({
            message: "Data Updated Successfully in Other_Leave_Evaluation Table.",
          });

    } catch(error){
        var typeError: z.ZodError | undefined;
      if (error instanceof z.ZodError) {
        typeError = error as z.ZodError;
        return res.status(400).json({
          name: "Invalid data type.",
          message: JSON.parse(typeError.message),
        });
      }
      return res.status(400).json({ message: "Invalid request body", error });

    }

  });

  
  otherLeaveEvaluationRouter.get("/latest", async (req, res) => {
  try {
    // Validate and convert query parameters
    const leaveIdSchema = z.object({
      leave_id: z.preprocess((val) => Number(val), z.number().int()),  // Convert to number
    });
    const { leave_id } = leaveIdSchema.parse(req.query);

    // Query the database
    const result = await db
      .selectFrom("Other_Leave_Evaluation")
      .selectAll()
      .where("leave_id", "=", leave_id)
      .orderBy("le_evaluation_time", "desc")
      .executeTakeFirst();

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "No evaluation found for the given leave_id." });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        name: "Invalid data type.",
        message: error.errors,
      });
    }
    console.error("Database connection error:", error);  // Log detailed error information
    res.status(500).json({ message: "Internal server error", error });
  }
});

  export default otherLeaveEvaluationRouter;