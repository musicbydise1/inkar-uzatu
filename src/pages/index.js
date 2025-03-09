import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";


export default function Home() {
  return (
      <div>
          {/* Секция "Главная" с баннером */}
          <section className="relative h-screen bg-contain bg-no-repeat bg-center hero">
              <img className="mob1" src="/mob1.png" alt=""/>
              <img className="mob2" src="/mob2.png" alt=""/>
              {/* Центрированный контент */}
              <div className="hero-text relative flex flex-col items-center justify-center h-full">
                  <h1 className="text-black text-center font-bold mb-4 asd">Inkar Qyz Uzatu</h1>
                  <h1 className="hero-text1 text-center hero-main-text">KҰPMETTI</h1>
                  <h1 className="hero-text2 text-black text-center font-bold mb-4">
                      АҒАЙЫН-ТУЫС, БАУЫРЛАР,
                      ҚҰДА-ЖЕКЖАТ,
                      НАҒАШЫ-ЖИЕН, БӨЛЕЛЕР,
                      ҚҰРБЫ-ҚҰРДАС,
                      ДОС-ЖАРАНДАР, ӘРІПТЕСТЕР, КӨРШІЛЕР!</h1>

                  <h2 className="hero-text3 text-black text-center">СІЗДЕРДІ
                      ҚЫЗЫМЫЗ</h2>
                  <h2 className="hero-text4 text-black text-center"> ІҢКӘРДІҢ</h2>
                  <h2 className="hero-text5 text-black text-center"> ҰЗАТУ ТОЙЫНА АРНАЛҒАН
                      АҚ ДАСТАРХАНЫМЫЗДЫҢ
                      КАДІРЛІ ҚОНАҒЫ БОЛУҒА
                      ШАҚЫРАМЫЗ!</h2>
                  <div className="flex flex-row items-center justify-center mt-[20px]">
                      <span className="date-text">Наурыз</span>
                      <span className="date-text">23</span>
                      <span className="date-text">2025</span>
                  </div>
                  <div className="time">
                      <span className="time-text">САҒАТ 18:00 - ДЕ</span>
                      <span></span>
                  </div>

                  <div className="address-text">
                      <p className="mb-[20px]">Мекен-жайымыз:
                          АЛМАТЫ ҚАЛАСЫ,
                          ҚАЛҚАМАН-2, СЕЙІТОВ КӨШЕСІ, 12
                          "СҰЛТАН САРАЙЫ"</p>
                      <a className="address-btn" href="dgis://2gis.kz/almaty/geo/70000001023455019/76.817431,43.205486" target="_blank" rel="noopener noreferrer">Картаны ашу</a>
                  </div>
                  <div className="owner-text">
                      <p>Той Йелері: Мұрат-Қарлығаш</p>
                  </div>
              </div>
          </section>
      </div>
  );
}
