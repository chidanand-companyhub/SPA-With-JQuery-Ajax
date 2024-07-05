import { loadTemplate } from "../templateLoader";

export default{
    async generateHTML(){
        var templatePath='teplate'+Contex.rout.name+'Template.html';
        var template=loadTemplate(templatePath);
        var response = await fetch('https://freetestapi.com/api/v1/students');

        var data=response.json();
        var html=template({users:data});
        
        return html;
    }
}