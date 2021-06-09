import { Request, Response, NextFunction, Router } from "express";
const router = Router();
import { calculate } from '../controller/calculate-shape';
let db:Record<string, any>[] = [];
router.post('/calculate', async (req: Request, res: Response) => {
    const result = calculate(req.body);
    let id = db.length + 1;
    let data = { id, result };
    db.push(data);
    return res.status(201).json({ data });
    
})

router.get('/calculate', async (req: Request, res: Response) => {
    return res.status(200).json({data: db})

})

export default router;