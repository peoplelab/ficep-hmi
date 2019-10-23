// import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

// import intlDefault from '../../../../public/translations/login/default.json';
// import Modal from '../../layouts/Modal.view';

// import '../../../styles/modal/ErrorModal.style.scss';


// function mapLabels(){
//   return ({ // etichette in lingua
//     title: window.intl.modal_error_title || intlDefault.modal_error_title,
//     message: window.intl.modal_error_message || intlDefault.modal_error_message,
//     code: window.intl.modal_error_code || intlDefault.modal_error_code,
//     details: window.intl.modal_error_details || intlDefault.modal_error_details,
//     close: window.intl.modal_error_close || intlDefault.modal_error_close,
//     error: errorCode => window.intl[errorCode] || intlDefault[errorCode] || errorCode,
//   });
// }


// function mapErrorsList(errorCode, index) {
//   const errorMessage = mapLabels().error(errorCode);

//   return (
//     <li className="modal-error__list-item" key={'error-' + index}>
//       {errorMessage}
//     </li>
//   );
// }


// function ErrorModal(props) {
//   const { errorCode, errorsList, open } = props;

//   const genericError = mapLabels().error(errorCode);
//   const ItemsList = errorsList.map(mapErrorsList);

//   return ReactDOM.createPortal(
//     <Modal
//       open={open}
//       className="modal--alert modal--medium error-modal"
//       messages={({ title: mapLabels().title, close: mapLabels().close })}
//       redirect={false}
//       header="full"
//       footer="alert"
//     >
//       <div className="error-modal__container">
//         <div className="error-modal__content">
//           <h1 className="error-modal__title modal__title--main-title">
//             {mapLabels().message}
//           </h1>
//         </div>
//         <div className="error-modal__content">
//           <p className="error-modal__text error-modal__text--message">
//             {mapLabels().code}
//           </p>
//           <p className="error-modal__text error-modal__text--main">
//             {genericError}
//           </p>
//         </div>
//         <div className="error-modal__content">
//           <p className="error-modal__text error-modal__text--details">
//             {mapLabels().details}
//           </p>
//           <ul className="error-modal__list">
//             {ItemsList}
//           </ul>
//         </div>
//       </div>
//     </Modal>
//   , document.getElementById('modal'));
// }


// ErrorModal.propTypes = {
//   open: PropTypes.bool.isRequired,
//   errorCode: PropTypes.string,
//   errorsList: PropTypes.arrayOf(PropTypes.string),
// };

// ErrorModal.defaultProps = {
//   errorCode: '',
//   errorsList: [],
// };


// export default ErrorModal;






































import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';

import Modal from '../../layouts/Modal.view';

import '../../../styles/modal/Dialog/ErrorModal.style.scss';


function ErrorModal(props) {

  return ReactDOM.createPortal(
    <Modal
      open={props.open}
      className="modal--alert modal--medium error-modal"
      messages={({ title: 'TITLE', close: 'Close' })}
      redirect={false}
      header="full"
      footer="alert"
      onClose={props.onClose}
    >
      <div className="error-modal__container">
        <div className="error-modal__content">
          <h1 className="error-modal__title modal__title--main-title">
            Message
          </h1>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--message">
            Code
          </p>
          <p className="error-modal__text error-modal__text--main">
            TEST_1
          </p>
        </div>
        <div className="error-modal__content">
          <p className="error-modal__text error-modal__text--details">
            Details
          </p>
          <ul className="error-modal__list">
            <li>Test_2</li>
          </ul>
        </div>
      </div>
    </Modal>
  , document.getElementById('modal'));
}


export default ErrorModal;
