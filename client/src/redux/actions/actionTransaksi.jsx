import {
  GET_TRANSACTION,
  POST_TRANSACTION,
  PATCH_TRANSACTION,
} from "../../constant/action-types";
import { API, setAuthToken } from "../../config/api";

export const getTransaction = () => {
  return {
    type: GET_TRANSACTION,
    payload: async () => {
      try {
        if(localStorage.token){
         setAuthToken(localStorage.token);
		}

        const {
          data: { data },
        } = await API.get("/transactions");

        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const postTransaction = (transaction) => {
  return {
    type: POST_TRANSACTION,
    payload: async () => {
      try {
        if(localStorage.token){
         setAuthToken(localStorage.token);
		}
		//const transa = {
		//	"attache":transaction,
		//	"userId":localStorage.id
		//}
		var FormData = require('form-data');
		var transa = new FormData();
		transa.append('attache', transaction.attache);
		transa.append('userId', localStorage.id);

		const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        const {
          data: { data },
        } = await API.post("/transaction", transa, config, setAuthToken(localStorage.token));
        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};

export const patchTransaction = (status, id) => {
  return {
    type: PATCH_TRANSACTION,
    payload: async () => {
      try {
		console.log(status)
		console.log(id)
        const formData = new FormData();
        formData.append("status", status);
        setAuthToken(localStorage.getItem("token"));

        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        await API.patch("/transaction/" + id,status);

        const {
          data: { data },
        } = await API.get("/transactions");

        return data;
      } catch (error) {
        if (error.response) {
          const { data, status } = error.response;

          if (status > 399) throw data.error;
        }
      }
    },
  };
};