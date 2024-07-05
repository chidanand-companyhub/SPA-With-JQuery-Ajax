import { loadTemplate } from "../templateLoader";

export default {
    async generateHTML(){
        var templatePath='templates'+Context.route.name+'Template.htm';
        var template=loadTemplate(templatePath);

        var html=template({});
        return html;
    }
}