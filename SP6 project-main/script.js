const completeButtons = document.querySelectorAll(".complete-btn");

for (let i = 0; i < completeButtons.length; i++) {
  const completeBtn = completeButtons[i];
  
  completeBtn.addEventListener("click", function() {
    completeBtn.disabled = true;
    alert("Board Updated Successfully!");

    const taskElement = document.getElementById("task-assigned");
    const completedTaskElement = document.getElementById("task-completed");
    
    const currentTask = parseInt(taskElement.innerText);
    const currentCompletedTask = parseInt(completedTaskElement.innerText);
    
    const newTask = currentTask - 1;
    const newCompletedTask = currentCompletedTask + 1;
    
    taskElement.innerText = newTask;
    completedTaskElement.innerText = newCompletedTask;
    
    if (newTask === 0) {
      alert("Congrats!! You have completed all the current tasks");
    }
    const taskTitle = document.querySelectorAll(".task-title")[i].innerText;
    addLog(taskTitle);
  });
}

function addLog(taskTitle) {
  const taskLog = document.getElementById("task-log");
  const logAdd = document.createElement("div");
  
  logAdd.innerHTML = 
  '<div class="bg-[#F4F7FF] p-4 text-justify rounded-lg space-y-3 logs">' +
    '<p>You have Completed the ' + taskTitle + ' at ' + formatTime(new Date()) + '</p>' +    
  '</div>';
  taskLog.appendChild(logAdd);
}

const clearLogsButton = document.getElementById("clear-logs");
clearLogsButton.addEventListener("click", function() {
  const logs = document.getElementsByClassName("logs");
  for (let i = 0; i < logs.length; i++) {
    logs[i].classList.add("hidden");
  }
});

function currentDate() {
  const dateContainer = document.getElementById("date");
  const dateElement = document.createElement("p");
  dateElement.innerHTML = formatDate(new Date());
  dateContainer.appendChild(dateElement);
}

currentDate();

let mainTheme = "bg-[#F4F7FF]";
const themeButton = document.getElementById("theme-btn");

themeButton.addEventListener("click", function(event) {
  event.preventDefault();

  const availableThemes = {
    "regular": "bg-[#F4F7FF]",
    "red": "bg-red-500",
    "blue": "bg-blue-600",
    "green": "bg-green-400",
    "orange": "bg-orange-500",
    "teal": "bg-teal-600",
    "gray": "bg-gray-800",
    "yellow": "bg-yellow-300",
    "sky": "bg-sky-400",
    "indigo": "bg-indigo-400"
  };

  const themeNames = Object.keys(availableThemes);
  let randomTheme = Math.floor(Math.random() * themeNames.length);
  let newTheme = availableThemes[themeNames[randomTheme]];

  if (newTheme === mainTheme) {
    randomTheme++;
    if (randomTheme >= themeNames.length) {
      randomTheme = 0;
    }
    newTheme = availableThemes[themeNames[randomTheme]];
  }

  const bodyElement = document.getElementById("body");
  Object.values(availableThemes).forEach(themeClass => {
    bodyElement.classList.remove(themeClass);
  });

  bodyElement.classList.add(newTheme);
  mainTheme = newTheme;
});

function formatTime(time) {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let period = "AM";
  if (hours >= 12) {
    period = "PM";
  }
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds + " " + period;
}

function formatDate(date) {
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  const dayName = dayNames[date.getDay()];
  const monthName = monthNames[date.getMonth()];
  let dayOfMonth = date.getDate();
  const year = date.getFullYear();
  
  if (dayOfMonth < 10) {
    dayOfMonth = "0" + dayOfMonth;
  }

  return dayName + "," + monthName + " " + dayOfMonth + " " + year;
}
