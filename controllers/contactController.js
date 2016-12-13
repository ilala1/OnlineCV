const Contact = require("../models/contact");
const Mailer = require("../lib/email");

class ContactController {
    static sendContactRequest(req,res){
        try{
            const contactRequest = new Contact(req.body);
            Mailer.sendEmail(contactRequest)
            .then(() => {
                console.log("it worked");
                res.redirect("/");
            })
            .catch(error => {
                console.log(`it didnt work because ${error}`);
                res.redirect("/");
            })
            console.log(req.body);

        } catch (err){
            console.log(err);
            res.redirect("/");
            
        }
    }
}

module.exports = ContactController;