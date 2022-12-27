const generate_cinfig_page = (uuid) => {
  config1 = `vless://${uuid}@nextcloud1.purasticudesu.shop:443?encryption=none&flow=xtls-rprx-direct&security=xtls&sni=nextcloud1.purasticudesu.shop&type=tcp&headerType=none#A`
  config2 = `vless://${uuid}@nextcloud10.popilium.ir:443?encryption=none&flow=xtls-rprx-direct&security=xtls&sni=nextcloud10.popilium.ir&type=tcp&headerType=none#B_irancell`
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta
              name="viewport"
              content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Document</title>
      <style>
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          }
          body {
              font-family: "Roboto", sans-serif;
              background: #f0f2f7;
              max-width: 800px;
              margin: auto;
              cursor: pointer;
              display: flex;
              height: 100vh;
              flex-direction: column;
              justify-content: space-around;
          }
          .label {
              padding: 10px;
              font-size: 18px;
              color: #111;
          }
          .copy-text {
              padding: 20px;
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 10px;
              display: flex;
          }
          .btn {
              background-color: #5f9cff;
              border: none;
              border-radius: 5px;
              color: #000000;
              cursor: pointer;
              font-family: inherit;
              font-weight: bold;
              padding: 1rem;
          }
  
          .btn:focus {
              outline: none;
          }
  
          .btn:active {
              transform: scale(0.98);
          }
  
          #toasts {
              align-items: flex-end;
              bottom: 10px;
              display: flex;
              flex-direction: column;
              position: fixed;
              right: 10px;
          }
  
          .toast {
              border-radius: 5px;
              color: #000000;
              margin: 0.5rem;
              padding: 1rem 2rem;
          }
  
          .toast.info {
              background-color: #969696;
          }
  
          .toast.success {
              background-color: #61ff8f;
          }
  
          .toast.error {
              background-color: #ff6161;
          }
      </style>
  </head>
  <body>
  <div class="container config1">
      <div class="label">Config 1</div>
      <div class="copy-text">
          <div class="text config1-data">
          ${config1}
          </div>
      </div>
  </div>
  <div class="container config2">
      <div class="label">Config 2 IRancell</div>
      <div class="copy-text">
          <div class="text config2-data">
          ${config2}
          </div>
      </div>
  </div>
  <div id="toasts"></div>
  </body>
  <script>
      const button = document.getElementById('button');
      const config1 = document.getElementsByClassName('config1')[0];
      const config2 = document.getElementsByClassName('config2')[0];
      console.log(config1)
      const types = ['success'];
      const toasts = document.getElementById('toasts');
      config1.addEventListener('click', () => {
          navigator.clipboard.writeText(document.querySelector('.config1-data').innerText);
          createNotification("config copied!");
      })
      config2.addEventListener('click', () => {
          navigator.clipboard.writeText(document.querySelector('.config2-data').innerText);
          createNotification("config copied!");
      })
  
      function createNotification(message = null, type = null) {
          const notif = document.createElement('div');
          notif.classList.add('toast');
          notif.classList.add('success');
  
          notif.innerText = message ? message : getRandomMessage();
  
          toasts.appendChild(notif);
  
          setTimeout(() => {
              notif.remove();
          }, 3000);
      }
  
      function getRandomMessage() {
          return messages[Math.floor(Math.random() * messages.length)];
      }
  
      function getRandomType() {
          return types[Math.floor(Math.random() * types.length)];
      }
  </script>
  </html>
  
  `
}