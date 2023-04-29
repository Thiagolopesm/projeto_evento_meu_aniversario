AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorElement = document.getElementById('contador');

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMS);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diasEmMS) / horasEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMS) / minutosEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutosEmMs) / 1000);

    const countdownString = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        contadorElement.innerHTML = 'Evento expirado';
    } else if (contadorElement.innerHTML !== countdownString) {
        contadorElement.innerHTML = countdownString;
    }
}, 1000);
