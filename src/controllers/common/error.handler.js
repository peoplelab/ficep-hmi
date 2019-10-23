export const errorHandler = ({ request, contentType, dataprocessed}) => {
  if (contentType.includes("application/json")) {
    const { responseType } = dataprocessed;

    if (!responseType || responseType === 200) {
      //
    } else if (/^4\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = dataprocessed.errorCode || "GENERIC_TECHNICAL_ERROR";
    } else if (/^5\d{2}$/.test(responseType.toString())) {
      dataprocessed.errorCode = "GENERIC_SERVER_ERROR";
    }

    return { request, contentType, dataprocessed };
  }
};
