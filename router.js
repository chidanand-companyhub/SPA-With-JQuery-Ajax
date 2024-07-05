import { loadTemplate } from "./templateLoader";

const routes=[{
    name:"users",
    path:"/users",
    controller:UserController
},
]
    
async function renderPage(route){
    var html = await route.controller.generateHTML({
        route: { name: route.name, path: route.pattern.path },
        params: route.params,
      });
      console.log("html", html);
      $("#app").html(html);
}


export const router={
    async handleRoute(path){
        await renderPage(path);
    history.pushState(null,'userNames',path)
    }
    
}