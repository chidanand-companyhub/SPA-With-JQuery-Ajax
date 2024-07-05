async function loadTemplate(templatePath){
    if(!window.templates){
        window.templates={}
    }
    if(!window.templates[templatePath]){
        var response = await fetch(templatePath,{catch:"no-store"});
        window.templates[templatePath]=_.template(await response.text());
    }
    return window.templates[templatePath];
}

export {loadTemplate};