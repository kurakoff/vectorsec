import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-s" id="contact">
      <div className="contact-inner">
        <div className="cl fu">
          <h2 className="sec-h">Готовы обсудить<br />внедрение Вектора?</h2>
          <p className="sec-sub">Наши специалисты ответят на технические вопросы, организуют демонстрацию и подготовят коммерческое предложение.</p>
          <div className="cinfo">
            <div className="cinfo-item">
              <div className="cinfo-ico"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg></div>
              info@vectorsec.ru
            </div>
            <div className="cinfo-item">
              <div className="cinfo-ico"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg></div>
              +7 (XXX) XXX-XX-XX
            </div>
            <div className="cinfo-item">
              <div className="cinfo-ico"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg></div>
              Telegram-бот для быстрых вопросов
            </div>
            <div className="cinfo-item" style={{ marginTop: "8px", color: "rgba(255,255,255,.35)", fontSize: "13px" }}>
              <div className="cinfo-ico" style={{ opacity: 0 }}></div>
              Ответим в течение 1 рабочего дня
            </div>
          </div>
        </div>
        <div className="fu d2">
          <div className="form-wrap">
            {submitted ? (
              <div className="form-success">
                <div className="fs-icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                <h3>Заявка отправлена</h3>
                <p>Наши специалисты свяжутся с вами в течение 1 рабочего дня.</p>
              </div>
            ) : (
              <form id="cform" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="fg">
                    <label className="flbl req">Имя</label>
                    <input className="fi" type="text" placeholder="Иван Иванов" required />
                  </div>
                  <div className="fg">
                    <label className="flbl req">Должность</label>
                    <input className="fi" type="text" placeholder="CISO / CTO" required />
                  </div>
                  <div className="fg">
                    <label className="flbl req">Компания</label>
                    <input className="fi" type="text" placeholder="ООО «Название»" required />
                  </div>
                  <div className="fg">
                    <label className="flbl req">Email</label>
                    <input className="fi" type="email" placeholder="ivan@company.ru" required />
                  </div>
                  <div className="fg">
                    <label className="flbl">Телефон</label>
                    <input className="fi" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="fg">
                    <label className="flbl">Интересующий сектор</label>
                    <select className="fi">
                      <option value="">Выберите...</option>
                      <option>Корпоративный сектор</option>
                      <option>Госсектор / КИИ</option>
                      <option>Промышленность / АСУ ТП</option>
                      <option>Операторы связи</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  <div className="fg full">
                    <label className="flbl">Комментарий</label>
                    <textarea className="fi" placeholder="Опишите задачу или вопрос..."></textarea>
                  </div>
                </div>
                <div className="fcheck">
                  <input type="checkbox" id="pd" required />
                  <label htmlFor="pd">Согласен на обработку персональных данных в соответствии с <a href="#">Политикой конфиденциальности</a> и требованиями 152-ФЗ</label>
                </div>
                <button type="submit" className="btn-sub">Отправить заявку</button>
                <p className="fnote">Наши специалисты свяжутся с вами в течение 1 рабочего дня</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
