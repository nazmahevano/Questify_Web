const questions = [
  {
    question:
      "Andi memiliki 5 apel. Kemudian, ibunya memberi 7 apel lagi. Berapa jumlah apel Andi sekarang?",
    options: ["10 apel", "12 apel", "13 apel", "14 apel"],
    answer: "12 apel",
  },
  {
    question:
      "Budi memiliki 8 pensil. Jika ia memberi 3 pensil kepada temannya, berapa pensil yang tersisa?",
    options: ["5 pensil", "6 pensil", "4 pensil", "7 pensil"],
    answer: "5 pensil",
  },
  {
    question: "Berapa jumlah sudut pada balok?",
    options: ["4", "6", "8", "10"],
    answer: "8",
  },
];

let currentQuestionIndex = 0;

// Fungsi untuk menampilkan soal
function loadQuestion(index) {
  const questionText = document.querySelector("h4");
  const questionParagraph = document.querySelector("main p");
  const options = document.querySelectorAll(".btn-outline-secondary");

  questionText.textContent = `Soal nomor: ${index + 1}`;
  questionParagraph.textContent = questions[index].question;
  options.forEach((option, i) => {
    option.textContent = questions[index].options[i];
  });
}

// Fungsi untuk memilih jawaban
function selectAnswer(optionId) {
  const options = document.querySelectorAll(".btn-outline-secondary");
  options.forEach((option) => option.classList.remove("active"));

  // Tambahkan kelas 'active' ke tombol yang dipilih
  const selectedOption = document.getElementById(optionId);
  selectedOption.classList.add("active");
}

// Fungsi untuk melanjutkan ke soal berikutnya
function nextQuestion() {
  const selectedOption = document.querySelector(
    ".btn-outline-secondary.active"
  );
  const warningMessage = document.getElementById("warning-message");

  if (!selectedOption) {
    warningMessage.style.display = "block";
    return;
  }

  warningMessage.style.display = "none";
  const userAnswer = selectedOption.textContent;

  // Periksa jawaban
  if (userAnswer === questions[currentQuestionIndex].answer) {
    console.log("Jawaban benar!");
  } else {
    console.log("Jawaban salah!");
  }

  // Hapus kelas 'active' dari jawaban yang dipilih
  selectedOption.classList.remove("active");

  // Tampilkan soal berikutnya jika ada
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion(currentQuestionIndex); // Muat soal berikutnya
  } else {
    alert("Kuis selesai!"); // Tampilkan pesan jika kuis selesai
  }
}
// Inisialisasi soal pertama
loadQuestion(currentQuestionIndex);
