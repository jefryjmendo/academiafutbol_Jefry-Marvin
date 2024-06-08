
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');
  const monthNameEl = document.getElementById('monthName');
  const events = [
      { title: 'Partido Sub-9', date: '2024-06-10', time: '16:00 - 17:00' },
      { title: 'Entrenamiento Sub-15', date: '2024-06-11', time: '16:30 - 18:00' },
      { title: 'Partido Sub-18', date: '2024-06-12', time: '17:00 - 18:30' },
      { title: 'Entrenamiento Sub-20', date: '2024-06-13', time: '18:00 - 19:30' },
      { title: 'Partido Sub-23', date: '2024-06-14', time: '18:30 - 20:00' },
      { title: 'Entrenamiento Mayores', date: '2024-06-15', time: '19:30 - 21:00' },
  ];

  let currentMonth = new Date().getMonth(); // Mes actual

  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  function renderCalendar(month) {
    calendarEl.innerHTML = ''; // Limpiar el calendario existente

    const monthDays = new Date(2024, month + 1, 0).getDate(); // Días en el mes

    monthNameEl.textContent = monthNames[month]; // Mostrar el nombre del mes

    for (let day = 1; day <= monthDays; day++) {
        const date = `2024-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.innerHTML = `<strong>${day}</strong>`;

        events.forEach(event => {
            if (event.date === date) {
                const eventEl = document.createElement('div');
                eventEl.className = 'calendar-event';
                eventEl.innerHTML = `<strong>${event.title}</strong><br>${event.time}`;
                dayEl.appendChild(eventEl);
            }
        });

        calendarEl.appendChild(dayEl);
    }
  }

  // Botones para cambiar de mes
  const prevButton = document.getElementById('prevMonth');
  const nextButton = document.getElementById('nextMonth');

  prevButton.addEventListener('click', function() {
    if (currentMonth > 0) {
        currentMonth--;
        renderCalendar(currentMonth);
    }
  });

  nextButton.addEventListener('click', function() {
    if (currentMonth < 11) {
        currentMonth++;
        renderCalendar(currentMonth);
    }
  });

  // Renderizar el calendario inicial
  renderCalendar(currentMonth);
});


