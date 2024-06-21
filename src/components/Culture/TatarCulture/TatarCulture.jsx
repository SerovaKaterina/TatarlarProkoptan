import React from 'react';
import styles from './TatarCulture.module.scss';
import imagesData from '../../../Services/CultureData/culture.json';

function TatarCulture() {
  return (
    <div className={styles.tatar_container}>
      <h1>Культура Татар Прокопьевска</h1>
      <p className={styles.tatar_culture}>
        Одна из самых многочисленных диаспор в Кузбассе — татарская. Татары проживают в нашем регионе как компактными поселениями, например, в Юргинском и в Прокопьевском районах, так и рассеяны среди кузбассовцев в значительном количестве. Поэтому вполне уместно говорить не столько о влиянии татарской культуры на общероссийскую, сколько о взаимопроникновении, которое современниками порой не осознается вовсе.
      </p>
      <div className={styles.tatar_images}>
        {imagesData.map((image, index) => (
          <div key={index} className={styles.tatar_image_wrapper}>
            <img src={image.src} alt={image.alt} className={styles.tatar_image} />
          </div>
        ))}
      </div>
      <p className={styles.read_more}>
        <a href="https://sibdepo.ru/reading/duslyk-eto-druzhba.html" target="_blank" rel="noopener noreferrer">
          Подробнее
        </a>
      </p>
    </div>
  );
}

export default TatarCulture;
