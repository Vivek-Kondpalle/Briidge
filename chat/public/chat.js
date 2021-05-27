// Make connection
const socket = io.connect('http://localhost:3000');

//Query DOM
const message = document.getElementById('message');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const handler = document.getElementById('handler');

// Emit Events
btn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handler: handler.value,
  });
  message.value = '';
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handler.value);
});

// Listen events
socket.on('chat', (data) => {
  feedback.innerHTML = '';
  output.innerHTML +=
    '<p><strong>' + data.handler + ': ' + '</strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
  feedback.innerHTML = '<p><em>' + data + '</em>' + ' is typing...' + '</p>';
});
