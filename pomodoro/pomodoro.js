 let time = 25 * 60; 
        // tempo em segundos (25 minutos * 60)

        let interval = null; 
        // variável que vai guardar o setInterval

        function updateDisplay() {
            let minutes = Math.floor(time / 60);
            // pega os minutos inteiros

            let seconds = time % 60;
            // pega o resto (segundos)

            seconds = seconds < 10 ? '0' + seconds : seconds;
            // adiciona 0 se for menor que 10 (ex: 09)

            document.getElementById('timer').textContent = `${minutes}:${seconds}`;
            // atualiza o texto na tela
        }

        function startTimer() {
            if (interval) return;
            // evita criar vários timers ao mesmo tempo

            interval = setInterval(() => {
                if (time > 0) {
                    time--;
                    updateDisplay();
                } else {
                    clearInterval(interval);
                    interval = null;
                    alert('Tempo finalizado!');
                }
            }, 1000);
            // executa a cada 1 segundo (1000 ms)
        }

        function pauseTimer() {
            clearInterval(interval);
            // para o contador

            interval = null;
        }

        function resetTimer() {
            clearInterval(interval);
            interval = null;

            time = 25 * 60;
            // volta para 25 minutos

            updateDisplay();
        }

        updateDisplay();
        // inicializa o display quando a página carrega