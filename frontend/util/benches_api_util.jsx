export const fetchBenches = () =>
  $.ajax({
    url: "/api/benches",
    method: "get",
    error: () => console.log("fetchbenches ajax req didnt work"),
  });
