// import { pathOr } from "ramda";

/**
 * Regex to get ip address
 */
const ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

/**
 * lListen for candidate events
 * @param {*} ice event param on ice candidate
 */
const onIceCandidate = (pc, params) => ice => {
  /**
   * Get ip
   */
  const [ip] = '1.1.1.1';
  // const [ip] = pathOr([], ["candidate", "candidate"], ice).match(ipRegex);

  /**
   * Remove listener after get ip
   */
  pc.onicecandidate = undefined;

  /**
   * Store ip
   */
  console.log('> User IP address: ', ip);

  const action = params.action({ ip });
  params.dispatch(action);
};

/**
 * Get the user IP throught the webkitRTCPeerConnection
 */
const getUserIP = async (params) => {
  /**
   * onNewIp - your listener function for new IPs
   *
   * compatibility for firefox and chrome
   */
  const myPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection;
  const pc = new myPeerConnection({ iceServers: [] });
  const noop = () => {};

  /**
   * Create a false data channel
   */
  pc.createDataChannel("");

  /**
   * Create offer and set local description
   */
  try {
    const offer = await pc.createOffer();
    pc.setLocalDescription(offer, noop, noop);
  } catch (err) {
    /**
     * An error occurred, so handle the failure to connect
     */
    console.log(err);
  }

  /**
   * Listen for candidate events
   */
  pc.onicecandidate = onIceCandidate(pc, params);
};



export { getUserIP };
