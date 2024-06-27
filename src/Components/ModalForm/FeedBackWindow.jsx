import style from "./ModalForm.module.scss";
import Reject from "../../assets/images/errorrequest.svg";
import Document from "../../assets/images/document.svg";

export default function FeedbackWindow({ responseStatus, onCloseFeedback }) {
  return (
    <div className={style.modal__window} onClick={() => onCloseFeedback(false)}>
      <div
        className={style.modal__container}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.feedback__wrapper}>
          {responseStatus ? (
            <img
              src={Document}
              alt="document"
              className={style.feedback__image}
            />
          ) : (
            <img src={Reject} alt="reject" className={style.feedback__image} />
          )}

          <div className={style.feedback__info}>
            {responseStatus ? (
              <>
                <h2 className={style.header__feedback}>
                  Ваша заявка принята, спасибо!
                </h2>
                <p className={style.paragragh__feedback}>
                  Здесь можно оставить инфо о том, что что-то придет по почте
                  или еще что-то для вновь вступивших
                </p>
              </>
            ) : (
              <>
                <h2 className={style.header__feedback}>
                  Сервер временно не доступен!
                </h2>
                <p className={style.paragragh__feedback}>
                  Пожалуйста, попробуйте позже
                </p>
              </>
            )}
            <button
              type="button"
              onClick={() => onCloseFeedback(false)}
              className={style.button__feedback}
            >
              OK
            </button>
          </div>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  );
}
