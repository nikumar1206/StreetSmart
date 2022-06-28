export const fetchUser = (userId) =>
  $.ajax({
    url: `/api/users/${userId}`,
    method: "get",
  });

export const updateUser = (user) =>
  $.ajax({
    url: `/api/users/${user.id}`,
    method: "patch",
    data: { user },
  });
