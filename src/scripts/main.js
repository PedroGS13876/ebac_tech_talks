// Inicializa AOS, se a biblioteca estiver presente
if (typeof AOS !== 'undefined') {
    AOS.init();
}

const dataDoEvento = new Date('2024-12-12T19:00:00'); // Data futura para testar o cronômetro
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    // Verifica se o elemento existe no DOM
    const contador = document.getElementById('contador');
    if (contador) {
        contador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    }

    // Quando a contagem regressiva termina
    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        if (contador) {
            contador.innerHTML = 'Evento expirado';
        }
    }
}, 1000);