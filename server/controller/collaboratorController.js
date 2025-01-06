import { Collaborator } from "../model/collaboratorModel.js";
import { passwordValidator } from "../utils/passwordValidator.js";

const addCollaborator=async(req,res)=>{
  const{firstName,lastName,email,password,gender,country,language,timezone}=req.body;

    try {
        const isEmptyField=[firstName,lastName,email,password,gender,country,language,timezone].some((field)=>(
            field.trim()=== ''||field===undefined
        ));
        if(isEmptyField){
            return res.status(401).json({ message: 'Please fill in all fields' });

        }
        const validPassword=passwordValidator(password);
        if(!validPassword){
            
            return res.status(401).json({ message: 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character' });
        }
        const existingCollaborator=await Collaborator.findOne({email:email});
        if(existingCollaborator){
            return res.status(409).json({ message: 'Email already in use' });

        }
        const role = process.env.COLLABORATOR_ROLE;
        const collaborator=await Collaborator.create({
            firstName,
            lastName,
            email,
            password,
            role,
            gender,
            country,
            language,
            timezone
        });
        const createdCollaborator=await Collaborator.findOne({_id:collaborator._id}).select("-password")
        if (!createdCollaborator) {
            return res.status(500).json({ message: 'Collaborator Registeration Failed' })
        }

        res.status(200).json({ message: 'Collaborator registered successfully', data: createdCollaborator })
    } catch (error) {
        return res.status(500).json({ message: `Internal server error due to ${error.message}` })
        
    }
}
export{addCollaborator}