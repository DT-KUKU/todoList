export const getHeader = () => {
  return {
    method: "GET",
  };
};

export const patchHeader = (data) => {
  return {
    method: "PATCH",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};

export const putHeader = (data) => {
  return {
    method: "PUT",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};

export const postHeader = (data) => {
  return {
    method: "POST",
    body: JSON.stringify({
      ...data,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };
};

export const deleteHeader = () => {
  return {
    method: "DELETE",
  };
};
