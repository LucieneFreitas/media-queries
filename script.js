function changeDevice(device) {
            const frame = document.getElementById('deviceFrame');
            const info = document.getElementById('screenInfo');
            const dimensions = document.getElementById('dimensions');
            const codeExample = document.getElementById('codeExample');
            const buttons = document.querySelectorAll('.btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            
            frame.className = 'device-frame ' + device;
            
            if (device === 'mobile') {
                info.innerHTML = '📱 Visualização: SMARTPHONE';
                dimensions.innerHTML = 'Largura atual: 375px';
                document.querySelector('.btn-mobile').classList.add('active');
                codeExample.textContent = `/* Smartphone - Layout em coluna única */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
}

.nav {
  flex-direction: column;
}`;
            } else if (device === 'tablet') {
                info.innerHTML = '📱 Visualização: TABLET';
                dimensions.innerHTML = 'Largura atual: 768px';
                document.querySelector('.btn-tablet').classList.add('active');
                codeExample.textContent = `/* Tablet - 2 colunas */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .nav {
    flex-direction: row;
  }
}`;
            } else {
                info.innerHTML = '💻 Visualização: DESKTOP';
                dimensions.innerHTML = 'Largura atual: 1200px';
                document.querySelector('.btn-desktop').classList.add('active');
                codeExample.textContent = `/* Desktop - Layout com sidebar */
@media (min-width: 1024px) {
  .content-grid {
    grid-template-columns: 2fr 1fr;
  }
  
  .nav {
    justify-content: center;
  }
}`;
            }
        }
  