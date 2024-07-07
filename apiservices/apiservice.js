import { axiosInstance } from "./axiosInstances";

export const getAllData = async (endpoint, headers) => {
  if (headers) {
    const result = await axiosInstance
      .get(endpoint, { headers })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  } else {
    const result = await axiosInstance
      .get(endpoint)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  }
};
//post
export const storeData = async (endpoint, data, headers) => {
  if (headers) {
    const result = await axiosInstance
      .post(endpoint, data, { headers })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  } else {
    const result = await axiosInstance
      .post(endpoint, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  }
};
//PATCH
export const updateData = async (endpoint, updatedData, headers) => {
  if (headers) {
    const result = await axiosInstance
      .patch(endpoint, updatedData, { headers })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  } else {
    const result = await axiosInstance
      .patch(endpoint, updatedData)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  }
};
//delete
export const deleteData = async (endpoint, headers) => {
  if (headers) {
    const result = await axiosInstance
      .delete(endpoint, { headers })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  } else {
    const result = await axiosInstance
      .delete(endpoint)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
    return result;
  }
};
