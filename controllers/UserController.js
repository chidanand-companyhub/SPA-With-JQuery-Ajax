import { loadTemplate } from "../templateLoader";

export default{
    async generateHTML(){
        var templatePath='template'+Context.route.name+'Template.html';
        var template=loadTemplate(templatePath);
        var response =await fetch('https://freetestapi.com/api/v1/students');
        var data= await response.json();
        console.log("user Controller.js file loaded.");

        var html=template({users:data});

        return html;
    }

}