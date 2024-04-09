import Mobile from "../models/mobileMondel";


class MobileController {

    async getAllMobile(req, res) {
        try {
            const mobile = await Mobile.find();
            res.status(200).json({
                message: "Get All Mobile",
                data: mobile,
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            })
        }
    }
    // get /mobile/:id
    async getMobileDetail(req, res) {
        try {
            const mobile = await Mobile.findById(req.params.id);
            if (!mobile) {
                return res.status(404).json({
                    message: "Mobile not found",
                });
            }
            res.status(200).json({
                message: " Get Mobile Datail Done ",
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    // Post / Mobile 
    async createMobile(req, res){ 
        console.log(req.body);
        try {
            const mobile = await Mobile.create(req.body);
            res.status(200).json({
                message: "create Mobile",
                data: mobile,
            });  
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });       
    }
}
// Update/Mobile/:id 
async updatePhones(req, res,){
    try {
        const mobile = await Mobile.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.status(200).send({
            message: "Updatedz"
    } catch (error) {
        
    }
}
 }
export default MobileController;