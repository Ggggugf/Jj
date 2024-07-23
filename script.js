// JavaScript code to handle the widget's functionality

// Example of updating the screen time (this should be connected to actual data)
document.querySelector('.screen-time').innerHTML = `
    <h2>Screen time</h2>
    <div>20m</div>
    <div>
        <div>ChatGPT</div><div>12m</div>
    </div>
    <div>
        <div>Spck Ed...</div><div>3m</div>
    </div>
    <div>
        <div>Chrome</div><div>1m</div>
    </div>
`;

// Example of handling the pomodoro timer
let pomodoroTime = 0;
document.querySelector('.pomodoro button').addEventListener('click', function() {
    pomodoroTime += 25; // Example increment, typically would use a timer
    document.querySelector('.pomodoro h2').textContent = `Today: ${pomodoroTime}m`;
});