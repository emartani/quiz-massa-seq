const questions = [
    // -----------------------------------------------------
    // 10 PROBLEMAS DE SEQUÊNCIAS (COM NÍVEL)
    // -----------------------------------------------------
    {
        question: "Uma balança mostra: 5kg, 10kg, 15kg... Qual será a próxima massa na sequência?",
        answers: [
            { text: "16kg", correct: false },
            { text: "20kg", correct: true },
            { text: "25kg", correct: false },
            { text: "18kg", correct: false },
        ],
        calculation: "A sequência está subindo de 5 em 5. 15kg + 5kg = 20kg.",
        level: 'easy'
    },
    {
        question: "Um bebê engorda 200g por mês. Se ele pesa 3000g, quanto pesará no próximo mês?",
        answers: [
            { text: "3020g", correct: false },
            { text: "3200g", correct: true },
            { text: "3400g", correct: false },
            { text: "3500g", correct: false },
        ],
        calculation: "3000g + 200g = 3200g.",
        level: 'hard' // Envolve números grandes (milhares), classificando como difícil.
    },
    {
        question: "Um caminhão descarrega 100kg de areia por dia. Ele já descarregou 500kg. Quanto ele terá descarregado ao final do próximo dia de trabalho?",
        answers: [
            { text: "550kg", correct: false },
            { text: "600kg", correct: true },
            { text: "700kg", correct: false },
            { text: "800kg", correct: false },
        ],
        calculation: "500kg + 100kg = 600kg.",
        level: 'hard' // Envolve números grandes (centenas).
    },
    {
        question: "A cada semana, o estoque de arroz diminui em 1kg. Se o estoque tem 15kg, quanto terá em 2 semanas?",
        answers: [
            { text: "16kg", correct: false },
            { text: "13kg", correct: true },
            { text: "12kg", correct: false },
            { text: "14kg", correct: false },
        ],
        calculation: "Semana 1: 15kg - 1kg = 14kg. Semana 2: 14kg - 1kg = 13kg.",
        level: 'hard'
    },
    {
        question: "Se a sequência de massas é 10g, 20g, 30g... Qual o próximo massa?",
        answers: [
            { text: "35g", correct: false },
            { text: "40g", correct: true },
            { text: "45g", correct: false },
            { text: "50g", correct: false },
        ],
        calculation: "A sequência está subindo de 10g em 10g. 30g + 10g = 40g.",
        level: 'easy'
    },
    {
        question: "A sequência de compras foi 2kg, 4kg, 6kg... Qual a próxima massa, seguindo o padrão?",
        answers: [
            { text: "7kg", correct: false },
            { text: "8kg", correct: true },
            { text: "10kg", correct: false },
            { text: "12kg", correct: false },
        ],
        calculation: "A sequência está subindo de 2 em 2. 6kg + 2kg = 8kg.",
        level: 'easy'
    },
    {
        question: "Os pacotes de açúcar estão empilhados em ordem: 8kg, 6kg, 4kg... Qual a próximo massa na pilha?",
        answers: [
            { text: "1kg", correct: false },
            { text: "2kg", correct: true },
            { text: "3kg", correct: false },
            { text: "0kg", correct: false },
        ],
        calculation: "A sequência está diminuindo de 2 em 2. 4kg - 2kg = 2kg.",
        level: 'easy'
    },
    {
        question: "Qual o número que completa a sequência de massas: 50kg, ___, 70kg, 80kg?",
        answers: [
            { text: "55kg", correct: false },
            { text: "65kg", correct: false },
            { text: "60kg", correct: true },
            { text: "75kg", correct: false },
        ],
        calculation: "A sequência está subindo de 10kg em 10kg. 50kg + 10kg = 60kg.",
        level: 'easy'
    },
    {
        question: "Uma receita precisa de 5g a mais de tempero a cada nova fornada. Se a primeira usou 10g, quanto usará a terceira fornada?",
        answers: [
            { text: "15g", correct: false },
            { text: "20g", correct: true },
            { text: "25g", correct: false },
            { text: "30g", correct: false },
        ],
        calculation: "2ª fornada: 10g + 5g = 15g. 3ª fornada: 15g + 5g = 20g.",
        level: 'hard'
    },
    {
        question: "Qual a massa inicial da sequência: ___, 100g, 150g, 200g?",
        answers: [
            { text: "50g", correct: true },
            { text: "75g", correct: false },
            { text: "90g", correct: false },
            { text: "110g", correct: false },
        ],
        calculation: "A sequência está subindo de 50g em 50g. Para achar o início: 100g - 50g = 50g.",
        level: 'hard' // Envolve subtrair para achar o início da sequência.
    },

        // -----------------------------------------------------
    // 10 PROBLEMAS VARIADOS (CÁLCULO SIMPLIFICADO) (COM NÍVEL)
    // -----------------------------------------------------
        {
        question: "Complete a sequência de massas: 34 kg, 36 kg, 38 kg, ___.",
        answers: [
            { text: "39 kg", correct: false },
            { text: "40 kg", correct: true },
            { text: "42 kg", correct: false },
            { text: "44 kg", correct: false },
        ],
        calculation: "A sequência está subindo de 2 em 2. 38 + 2 = 40.",
        level: 'easy'
    },
        {
        question: "Complete a sequência de massas: 60 g, 50 g, 40 g, ___.",
        answers: [
            { text: "35 g", correct: false },
            { text: "30 g", correct: true },
            { text: "20 g", correct: false },
            { text: "25 g", correct: false },
        ],
        calculation: "A sequência está diminuindo de 10 em 10. 40 - 10 = 30.",
        level: 'easy'
    },
    {
        question: "Complete a sequência: 31 kg, 33 kg, 35 kg, ___.",
        answers: [
            { text: "36 kg", correct: false },
            { text: "37 kg", correct: true },
            { text: "38 kg", correct: false },
            { text: "39 kg", correct: false },
        ],
        calculation: "A sequência está subindo de 2 em 2 (somente números ímpares). 35 + 2 = 37.",
        level: 'hard' 
    },
        {
        question: "Complete a sequência: 77 kg, 66 kg, 55 kg, ___.",
        answers: [
            { text: "40 kg", correct: false },
            { text: "44 kg", correct: true },
            { text: "33 kg", correct: false },
            { text: "45 kg", correct: false },
        ],
        calculation: "A sequência está diminuindo de 11 em 11. 55 - 11 = 44.",
        level: 'hard'
    },
    // -----------------------------------------------------
    // 10 QUESTÕES: DOBRO E TRIPLO (Massa)
    // -----------------------------------------------------
    {
        question: "Uma melancia tem de massa 4 kg. Qual é o dobro dessa massa?",
        answers: [
            { text: "6 kg", correct: false },
            { text: "8 kg", correct: true },
            { text: "12 kg", correct: false },
            { text: "16 kg", correct: false },
        ],
        calculation: "Dobro é multiplicar por 2. 4 kg x 2 = 8 kg.",
        level: 'easy'
    },
    {
        question: "O papai tem uma sacola com 2 kg de laranjas. Qual é o triplo dessa massa?",
        answers: [
            { text: "4 kg", correct: false },
            { text: "5 kg", correct: false },
            { text: "6 kg", correct: true },
            { text: "8 kg", correct: false },
        ],
        calculation: "Triplo é multiplicar por 3. 2 kg x 3 = 6 kg.",
        level: 'easy'
    },
    {
        question: "Uma bala tem de massa 10 g. Qual é o dobro da massa dessa bala?",
        answers: [
            { text: "15 g", correct: false },
            { text: "20 g", correct: true },
            { text: "30 g", correct: false },
            { text: "12 g", correct: false },
        ],
        calculation: "Dobro é 10 g x 2 = 20 g.",
        level: 'easy'
    },
    {
        question: "A massa de um tempero é 5 g. Qual o triplo da massa do tempero?",
        answers: [
            { text: "10 g", correct: false },
            { text: "12 g", correct: false },
            { text: "15 g", correct: true },
            { text: "20 g", correct: false },
        ],
        calculation: "Triplo é 5 g x 3 = 15 g.",
        level: 'easy'
    },
    {
        question: "A mamãe tem um pacote de 5 kg de arroz. Se ela comprasse o dobro, quantos quilos seriam?",
        answers: [
            { text: "7 kg", correct: false },
            { text: "10 kg", correct: true },
            { text: "15 kg", correct: false },
            { text: "20 kg", correct: false },
        ],
        calculation: "Dobro é 5 kg x 2 = 10 kg.",
        level: 'easy'
    },
    {
        question: "Um pote de geleia tem de massa 200 g. Qual é o triplo dessa massa em gramas?",
        answers: [
            { text: "400 g", correct: false },
            { text: "600 g", correct: true },
            { text: "800 g", correct: false },
            { text: "300 g", correct: false },
        ],
        calculation: "Triplo é 200 g x 3 = 600 g.",
        level: 'hard'
    },
    {
        question: "Um bolo usa 150 g de açúcar. Para fazer o dobro da receita, qual massa de açúcar será preciso?",
        answers: [
            { text: "250 g", correct: false },
            { text: "300 g", correct: true },
            { text: "400 g", correct: false },
            { text: "350 g", correct: false },
        ],
        calculation: "Dobro é 150 g x 2 = 300 g.",
        level: 'hard'
    },
        {
        question: "Um presente tem de massa 1 kg. Se eu tiver o dobro dessa massa, quantos gramas isso representa?",
        answers: [
            { text: "1000 g", correct: false },
            { text: "1500 g", correct: false },
            { text: "2000 g", correct: true },
            { text: "3000 g", correct: false },
        ],
        calculation: "O dobro de 1 kg é 2 kg. 2 kg equivalem a 2000 g.",
        level: 'hard'
    },
    {
        question: "Uma sacola tem de massa 3 kg. O caminhão leva o triplo dessa massa mais 1 kg. Qual a massa total que ele leva?",
        answers: [
            { text: "9 kg", correct: false },
            { text: "10 kg", correct: true },
            { text: "7 kg", correct: false },
            { text: "12 kg", correct: false },
        ],
        calculation: "Triplo de 3 kg é 3 x 3 = 9 kg. Soma: 9 kg + 1 kg = 10 kg.",
        level: 'hard'
    },

    // -----------------------------------------------------
    // 10 QUESTÕES: MEIA DÚZIA E UMA DÚZIA (Massa)
    // -----------------------------------------------------
    {
        question: "Se cada pão tem de massa 100g, qual é a massa total de meia dúzia (6) de pães?",
        answers: [
            { text: "500 g", correct: false },
            { text: "600 g", correct: true },
            { text: "1200 g", correct: false },
            { text: "1000 g", correct: false },
        ],
        calculation: "Meia Dúzia é 6. 6 x 100 g = 600 g.",
        level: 'easy'
    },
    {
        question: "Um pacote de açúcar tem de massa 1 kg. Qual seria a massa total de uma dúzia (12) de pacotes?",
        answers: [
            { text: "10 kg", correct: false },
            { text: "11 kg", correct: false },
            { text: "12 kg", correct: true },
            { text: "13 kg", correct: false },
        ],
        calculation: "Uma Dúzia é 12. 12 x 1 kg = 12 kg.",
        level: 'easy'
    },
        {
        question: "A massa de um limão é 10g. Qual é a massa de meia dúzia de limões mais um limão extra?",
        answers: [
            { text: "100 g", correct: false },
            { text: "70 g", correct: true },
            { text: "50 g", correct: false },
            { text: "150 g", correct: false },
        ],
        calculation: "Meia Dúzia é 6. 6 x 10 g = 60 g. Total: 60 g + 10 g = 70 g.",
        level: 'hard'
    },
    {
        question: "Uma dúzia de caixas tem de massa 60 kg. Qual é a massa de meia dúzia dessas caixas?",
        answers: [
            { text: "15 kg", correct: false },
            { text: "30 kg", correct: true },
            { text: "40 kg", correct: false },
            { text: "60 kg", correct: false },
        ],
        calculation: "Meia dúzia é a metade. 60 kg dividido por 2 = 30 kg.",
        level: 'hard'
    },
    {
        question: "A vovó comprou uma dúzia de sabonetes, totalizando 1200 g. Se ela usar 100 g, qual a massa restante?",
        answers: [
            { text: "1000 g", correct: false },
            { text: "1100 g", correct: true },
            { text: "1150 g", correct: false },
            { text: "1200 g", correct: false },
        ],
        calculation: "1200 g - 100 g = 1100 g.",
        level: 'hard'
    },
    {
        question: "Uma dúzia (12) de embalagens tem de massa 1 kg e 200 g. Qual massa tem meia dúzia (6) de embalagens?",
        answers: [
            { text: "500 g", correct: false },
            { text: "600 g", correct: true },
            { text: "700 g", correct: false },
            { text: "800 g", correct: false },
        ],
        calculation: "1 kg e 200 g = 1200 g. Metade (meia dúzia) é 1200 g dividido por 2 = 600 g.",
        level: 'hard'
    },
    {
        question: "Qual seria a massa total de uma dúzia (12) de potes de geleia, se cada pote tem de massa 100 g?",
        answers: [
            { text: "5000 g", correct: false },
            { text: "1200 g", correct: true },
            { text: "7000 g", correct: false },
            { text: "1500 g", correct: false },
        ],
        calculation: "12 x 100 g = 1200 g.",
        level: 'easy'
    },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Referências corrigidas para os elementos do placar
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

const difficultySelector = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const quizBox = document.getElementById('quiz-box');
let availableQuestions = []; // O array de questões filtradas que será usado no quiz.

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;



// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ATENÇÃO: Esta função será chamada apenas DEPOIS que a função filterQuestions() for executada.
function startQuiz() {
    // 1. Embaralha o array de questões filtrado (Fácil, Difícil ou Todas)
    shuffleArray(availableQuestions); 
    
    // 2. Zera as variáveis de controle do quiz
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    // 3. Atualiza o placar e o contador
    updateScoreAndCounter(); 
    
    // 4. Garante que o botão "Próxima Pergunta" esteja escondido no início
    nextButton.classList.add('hide'); 
    
    // 5. Mostra a primeira questão do array filtrado
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = availableQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    updateScoreAndCounter();

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.innerText = '';
    explanationBox.classList.add('hide'); 
    calculationText.innerText = ''; 
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // ESSENCIAL: Declarar a variável da pergunta atual aqui
    const currentQuestion = availableQuestions[currentQuestionIndex];
    
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add('correct');
        feedbackElement.innerText = 'Correto! 🎉';
        correctAnswers++;
        acertoSom.play();
    } else {
        selectedButton.classList.add('wrong');
        feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
        wrongAnswers++;
        erroSom.play();
    }

    // NOVO: Exibe o cálculo correto
    calculationText.innerText = currentQuestion.calculation;
    explanationBox.classList.remove('hide'); // Torna a explicação visível

    updateScoreAndCounter();

    // BLOCO ÚNICO para desabilitar todos os botões e mostrar a resposta correta
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // CRUCIAL: Mostrar o botão de próxima pergunta
    nextButton.classList.remove('hide');
}

// A função para atualizar o placar é a mais importante aqui.
function updateScoreAndCounter() {
    correctCountElement.innerText = `Acertos: ${correctAnswers}`;
    wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
    counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${availableQuestions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < availableQuestions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${availableQuestions.length} perguntas. Parabéns!`;
        resetState();
        nextButton.classList.add('hide');
    }
});

function filterQuestions() {
    const selectedLevel = difficultySelector.value;
    
    if (selectedLevel === 'all') {
        // Se 'Todas' foi selecionado, usa o array completo
        availableQuestions = [...questions]; 
    } else {
        // Filtra o array original com base no nível
        availableQuestions = questions.filter(q => q.level === selectedLevel);
    }
}

// Evento para o novo botão Começar Quiz
startButton.addEventListener('click', () => {
    filterQuestions();
    // Esconde o seletor de dificuldade e mostra o quiz
    document.getElementById('difficulty-selector').classList.add('hide-initial');
    quizBox.classList.remove('hide-initial');
    nextButton.classList.remove('hide-initial');

    startQuiz(); // Chama a função que inicia o quiz com o array filtrado
});