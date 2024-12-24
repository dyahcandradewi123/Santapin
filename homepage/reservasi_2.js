// JavaScript for time selection
document.addEventListener("DOMContentLoaded", () => {
  const timeGrid = document.querySelector(".time-grid");
  const nextButton = document.getElementById("next-button");

  // Generate time slots
  const timeSlots = [
    "07:00", "08:00", "09:00", "10:00",
    "11:00", "12:00", "13:00", "14:00",
    "15:00", "16:00", "17:00", "18:00"
  ];

  // Populate time grid
  timeSlots.forEach(time => {
    const button = document.createElement("button");
    button.textContent = time;
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".time-grid button")
        .forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
    timeGrid.appendChild(button);
  });

  // Handle next button click
  nextButton.addEventListener("click", () => {
    const selectedDate = document.getElementById("reservasi-date").value;
    const selectedTime = document.querySelector(".time-grid button.active");
    
    if (!selectedDate || !selectedTime) {
      alert("Harap pilih tanggal dan waktu terlebih dahulu.");
    } else {
      alert(
        `Anda telah memilih:\nTanggal: ${selectedDate}\nWaktu: ${selectedTime.textContent}`
      );
    }
  });
});
