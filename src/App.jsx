import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>MEGA | Üretken Akademi</h1>
          <p>Eğitim Programları</p>
        </header>
        <nav className="App-menu">
          <ul>
            <li><a href="#anasayfa">Ana Sayfa</a></li>
            <li><a href="#hakkimizda">Hakkımızda</a></li>
            <li><a href="#programlar">Programlar</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
        <section className="PhotoGallery">
          <h2>Fotoğraf Galerisi</h2>
          <img src="https://startupmarket.co/cache/768x384/upload/images/startup/5f58b0aea347c711812535.jpg" alt="Fotoğraf 1" />
          <img src="https://pbs.twimg.com/profile_images/1623688354129666053/PPIPwUGJ_400x400.jpg" alt="Fotoğraf 2" />
          <img src="https://media.istockphoto.com/id/1264296727/tr/foto%C4%9Fraf/k%C4%B1z-%C3%B6%C4%9Frenci.jpg?s=612x612&w=0&k=20&c=tZQV8Ubf3gLhdP7PnHXjbQz1LKDXnQyIF-Q5iY9THag=" alt="Fotoğraf 3" />
          <img src="https://media.istockphoto.com/id/1347652268/tr/foto%C4%9Fraf/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=CPq5k-jXLCk9uoMJJsD0bV26r6XOHPipdnndjKO1HuM=" alt="Fotoğraf 4" />
          <img src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Fotoğraf 5" />
          <img src="https://sozemegitim.com/dimg/urun/resized_317583720523.jpg" alt="Fotoğraf 6" />

        </section>
        <section className="VideoGallery">
          <h2>Video Galerisi</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/watch?v=lNfBlYAk3Lw&list=PLIHume2cwmHeydP0GkOzSxJHT1ph1BrWj"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </section>
        <footer>
          <p>Copyright © 2024 MEGA ve Üretken Akademi</p>
        </footer>
      </div>

      <div className="jumbotron text-center header-bg-color">
        <h1>Begüm Nur Karapınar</h1>
      </div>

      <div className="container">
        <div className="text-center">
        </div>
      </div>

      <hr />

      <div className="col-md-8 col-sm-8">
        <div className="card">
          <div className="card-header alert card-color text-center">Blog</div>
          <div className="card-body">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="card">
                    <h2 className='certificate text-center'>Uretken Akademı Hakkında</h2>
                    <h4 className='margin-10'>Düşün, Planla, Yap</h4>
                    <h6>WEB GELIŞTIRICISI | YAZILIM DILLERI OGRETICISI | WEB TASARIM OGRETICISI |
                      INTERAKTIF DERS ICERIK URETICISI | CANLI DESTEK SUNUCULARI
                    </h6>
                    <p>Merhaba, biz Üretken Akademi ekibiyiz!</p>
                    <p>
                      Kendimizi tanıtmamıza izin verin: Bizler kocaman bir aileyiz. Bu ailenin baş ekipleri olarak eğitmenimiz Enes Polat, direktörümüz Kaan Kırkoyun, koordinatörümüz Aybike Çelik.  Her şeye kendi benzersiz dokunuşumuzu katmaktan, her zaman kendini gliştirmek için adım atan gençlerimizle bu işi yapmaktan zevk alıyoruz. Kalıpları kırmaya ve işleri farklı şekilde yapmaya yürekten inanıyoruz.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card certificate text-center" >
                        <h2>Sertifikalarım</h2>
                        <div className="list-group">
                          <div className="list-group-item">
                            <h6>MEGA | URETKEN AKADEMI</h6>
                          </div>
                          <div className="list-group-item">
                            <h6>YAPAY ZEKA EGİTİMİ</h6>
                          </div>
                          <div className="list-group-item">
                            <h6>HTML | CSS | JAVASCRIPT | REACTJS EGİTİMİ</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;