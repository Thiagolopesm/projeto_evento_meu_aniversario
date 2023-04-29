AOS.init();

const countdownElement = document.getElementById('countdown');

    function countdown() {
      const now = new Date();
      const eventDate = new Date('May 20, 2023 19:00:00');
      const distance = eventDate - now;
      
      if (distance < 0) {
        countdownElement.innerHTML = 'EXPIRED';
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    setInterval(countdown, 1000);