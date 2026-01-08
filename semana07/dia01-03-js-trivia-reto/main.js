const questions = [
  {
    id: 1111,
    order: 1,
    question: '¿Cómo se llama el método en JS que se utiliza para imprimir mensajes en la consola?',
    correctAnswer: 1,
    answerList: ['print()', 'console.log()', 'display()']
  },
  {
    id: 2222,
    order: 2,
    question: '¿Cuál es el operador utilizado para comparar el valor y el tipo de dos variables en JS?',
    correctAnswer: 2,
    answerList: ['==', '=', '===']
  },
  {
    id: 3333,
    order: 3,
    question: '¿Cuál es la función en JS que se utiliza para redondear hacia abajo el valor de un número decimal?',
    correctAnswer: 0,
    answerList: ['floor()', 'ceil()', 'round()']
  },
  {
    id: 4444,
    order: 4,
    question: '¿Qué tipo de valor devuelve el operador typeof null en JavaScript?',
    correctAnswer: 1,
    answerList: ['null', 'object', 'undefined']
  }
]

let correctAnswersCounter = 0 // Contador

let currentQuestionIndex = 0

const questionAndResults = document.getElementById('questions-and-results')

function nextQuestion(event) {
  //TODO: Validar que no tenemos más preguntas para mostrar
  if (currentQuestionIndex >= questions.length - 1) {
    return
  }
  currentQuestionIndex++
  renderQuestions()
}

function prevQuestion(event) {
  //TODO: Añadir el botón con su funcionalidad respectiva
  if (currentQuestionIndex <= 0) {
    return
  }
  currentQuestionIndex--
  renderQuestions()
}

function respondQuestion(event, questionSelected) {
  const currentQuestion = questions[currentQuestionIndex]
  //TODO: Incrementar el número de respuestas correctas (correctAnswersCounter)
  if (questionSelected === currentQuestion.correctAnswer) {
    correctAnswersCounter++ 
  }

  //TODO: Mostrar las respuestas correctas e incorrectas con sus colores respectivos
  const answerButtons = document.querySelectorAll('[data-answer]')
  answerButtons.forEach(button => {
    if (Number(button.dataset.answer) === currentQuestion.correctAnswer) {
      //Llegamos cuando presionamos el botón con la alternativa correcta
      button.className = 'text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    } else {
      button.className = 'text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full'
    }
    button.setAttribute('disabled', 'disabled')
  })
}

function startAgain(event) {
  correctAnswersCounter = 0
  currentQuestionIndex = 0
  renderQuestions()
}

function showResults(event) {
  // TODO: Terminar la pantalla de mostrar resultados con los datos respectivos para que sean dinámicos
  questionAndResults.innerHTML = `
    <section class="flex flex-col px-4 py-6 text-center ${(correctAnswersCounter === questions.length) ? 'bg-green-600' : 'bg-red-600'} rounded-lg shadow-sm">
      <p class="text-4xl font-medium text-gray-900 mb-4">${(correctAnswersCounter === questions.length) ? '¡GANASTE!' : '¡MEJOR SUERTE LA PRÓXIMA!'}</p>
      
      <p class="text-md font-medium text-gray-900 mb-4">Respondiste ${correctAnswersCounter} de ${questions.length}</p>

      <p class="text-md font-medium text-gray-900 mb-4">Y este es tu puntaje: ${correctAnswersCounter * 100}</p>

      <img src="https://placehold.co/300x100" />

      <div class="flex justify-end mt-10">
        <button
          class="text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 cursor-pointer"
          onclick="startAgain(event)"
        >
          Empezar de nuevo
        </button>
      </div>
    </section>
  `
}

function renderQuestions() {
  const currentQuestion = questions[currentQuestionIndex]
  const question = `
    <section class="flex flex-col px-4 py-6 mb-3 border rounded-lg shadow">
      <p class="text-md font-medium text-gray-900 mb-4">
        ${currentQuestion.order}. ${currentQuestion.question}
      </p>

      <div class="flex flex-col items-start mb-10">
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 0)"
          data-answer="0"
        >
          ${currentQuestion.answerList[0]}
        </button>
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 1)"
          data-answer="1"
        >
          ${currentQuestion.answerList[1]}
        </button>
        <button
          class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full cursor-pointer"
          onclick="respondQuestion(event, 2)"
          data-answer="2"
        >
          ${currentQuestion.answerList[2]}
        </button>
        <button class="hidden text-white border border-red-600 bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta incorrecta 2</button>
        <button class="hidden text-white border border-green-600 bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 w-full">Respuesta correcta 3</button>
      </div>

      <div class="flex justify-end">
        <button
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer"
          onclick="prevQuestion(event)"
        >
          Anterior
        </button>
        <button
          class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 cursor-pointer"
          onclick="nextQuestion(event)"
        >
          Siguiente
        </button>
        
        <button
          class="${(currentQuestionIndex === questions.length - 1) ? '' : 'hidden'} text-white border border-blue-300 bg-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 text-left mr-2 mb-2 cursor-pointer"
          onclick="showResults(event)"
        >
          Mostrar resultados
        </button>
      </div>
    </section>
  `
  questionAndResults.innerHTML = question

}

renderQuestions()