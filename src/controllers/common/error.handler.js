import { ModalHandler } from './modal.handler';


export const errorHandler = ({ request, contentType, dataprocessed}) => {
  if (contentType.includes("application/json")) {
    const { responseType } = dataprocessed;

    if (!responseType || responseType === 200) {
      return { request, contentType, dataprocessed };
    }

    if (/^4\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = dataprocessed.errorCode || "GENERIC_TECHNICAL_ERROR";
    } else if (/^5\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = "GENERIC_SERVER_ERROR";
    }

    ModalHandler.Error({
      errorCode: dataprocessed.errorCode,
      errorsList: dataprocessed.result,
    });

    return { request, contentType, dataprocessed };
  }
};
