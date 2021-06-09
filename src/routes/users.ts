import { Request, Response, NextFunction, Router } from "express";
const router = Router();

interface Students{
  id?: number,
  name: string,
  gender: string,
  age: number,
  class: string
}

let database: Students[] = [];

/* Get Query */
router.get("/query", function (req: Request, res: Response, next: NextFunction) {
  return res.status(200).json({ status: "Query Retrieved", data: req.query });
})

/* GET users listing. */
router.get('/', function(req:Request, res:Response, next:NextFunction) {
  return res.status(200).json({status: "Success", data: database});
});

/*  POST new user  */
router.post("/", function (req: Request, res: Response, next: NextFunction) {
  if (database.length === 0) {
    let id = 1;
    let post = { id: id, ...req.body };
    database.push(post);
    return res.status(201).json({ status: "New student created", data: post })
  } else {
    let id = generateID(database);
    let post = { id: id, ...req.body };
    database.push(post);
    return res.status(201).json({ status: "New student created", data: post });
  }
})

/* Generate ID Function */
function generateID(database:Students[]) {
  let lastStudentID = database[database.length - 1].id;
  if (lastStudentID) {
    let newID = lastStudentID + 1;
    return newID;
  }
  
}

/* GET student by id */
router.get("/:id", function (req: Request, res: Response, next: NextFunction) {
  const id = parseInt(req.params.id);
  let student = database.find((item) => item.id === id);
  return res.status(200).json({ status: "Student Retrieved", data: student });
})

/* PUT */
router.put("/:id", function (req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id);
    let student = database.find((item) => item.id === id);
    if (student) {
      const index = database.indexOf(student);
      let update = { ...student, ...req.body };
      database[index] = update;
      return res.status(200).json({ status: "Student Updated", data: update });
    }
  } catch (error) {
    return res.status(404).json({ status: "Error", message: "Student not Found"})
  }
})

/* DELETE by id*/
router.delete("/:id", function(req: Request, res: Response, next: NextFunction){
  let id = parseInt(req.params.id);
  let newDB = database.filter((item) => item.id !== id);
  database = newDB;
  return res.status(200).json({ status: `Student with id ${id} was Deleted`, data: database });
})

/* DELETE All*/
router.delete("/", function (req: Request, res: Response, next: NextFunction) {
  database.length = 0;
  return res.status(200).json({ status: "All Student Profiles were deleted", data: database });
})




export default  router;
