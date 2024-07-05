import { router } from "./router";

// using jQuery intercept all anchor links
console.log("index.html");
function interceptAnchors(callback) {
  $("a").on("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    var path = new URL(event.target.href).pathname;
    console.log("click path", path);

    // Render Page
    await router.handleRoute(path);

    if (typeof callback == "function") {
      callback();
    }
  });
}

$(async () => {
  console.log("Docuemnt Ready");

  // On Page Load
  var path = window.location.pathname;
  // Render Page
  await router.handleRoute(path);

  interceptAnchors(interceptAnchors);

  window.addEventListener("popstate", async (event) => {
    console.log(
      `location: ${document.location}, state: ${JSON.stringify(event.state)}`
    );

    var path = window.location.pathname;
    // Render Page
    await router.handleRoute(path);
    interceptAnchors(interceptAnchors);
  });
});
