const sg = require('sendgrid').SendGrid("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");

const request = sg.emptyRequest();

class Email {

    static sendEmail(obj){
        return new Promise(
            (resolve, reject) => {
                request.body = {
                    "from": {
                        "email": obj.email,
                        "name": `${obj.firstName} ${obj.lastName}`
                    },
                    "subject": "A new website contact request",
                    "content": [
                        {
                            "type": "text/html",
                            "value": `<html><p>
                                ${obj.firstName} ${obj.lastName} has sent you an email
                            </p>
                            <p>
                                ${obj.message}
                            </p>
                            </html>`
                        }
                    ],
                    "personalizations": [
                        {
                            "to": [
                                {
                                    "email": "imranlala@hotmail.co.uk"
                                }
                            ]
                        }
                    ]
                };

                request.method = 'POST';
                request.path = '/v3/mail/send';

                sg.API(request, function (response) {
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(response.headers);
                    if (response.statusCode === 202){
                        resolve();
                    } else {
                        reject("An error has occurred");
                    }
                });
            }
        )
    }
}

module.exports = Email;