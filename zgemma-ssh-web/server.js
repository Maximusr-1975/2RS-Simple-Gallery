const express = require('express');
const { WebSocketServer } = require('ws');
const { Client } = require('ssh2');
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', (ws) => {
    let sshClient = null;
    let stream = null;

    ws.on('message', (data) => {
        try {
            const msg = JSON.parse(data);

            if (msg.type === 'connect') {
                sshClient = new Client();

                sshClient.on('ready', () => {
                    ws.send(JSON.stringify({ type: 'status', text: 'Połączono z ' + msg.host }));

                    sshClient.shell({ term: 'xterm-256color', cols: msg.cols || 80, rows: msg.rows || 24 }, (err, s) => {
                        if (err) {
                            ws.send(JSON.stringify({ type: 'error', text: err.message }));
                            return;
                        }
                        stream = s;

                        stream.on('data', (d) => {
                            ws.send(JSON.stringify({ type: 'data', text: d.toString('binary') }));
                        });

                        stream.stderr.on('data', (d) => {
                            ws.send(JSON.stringify({ type: 'data', text: d.toString('binary') }));
                        });

                        stream.on('close', () => {
                            ws.send(JSON.stringify({ type: 'status', text: 'Sesja zamknięta.' }));
                            sshClient.end();
                        });
                    });
                });

                sshClient.on('error', (err) => {
                    ws.send(JSON.stringify({ type: 'error', text: 'Błąd SSH: ' + err.message }));
                });

                sshClient.connect({
                    host: msg.host,
                    port: msg.port || 22,
                    username: msg.username,
                    password: msg.password,
                    readyTimeout: 10000,
                    keepaliveInterval: 10000
                });

            } else if (msg.type === 'data' && stream) {
                stream.write(msg.text);

            } else if (msg.type === 'resize' && stream) {
                stream.setWindow(msg.rows, msg.cols);

            } else if (msg.type === 'disconnect') {
                if (sshClient) sshClient.end();
            }

        } catch (e) {
            ws.send(JSON.stringify({ type: 'error', text: 'Błąd: ' + e.message }));
        }
    });

    ws.on('close', () => {
        if (sshClient) sshClient.end();
    });
});

const PORT = 3033;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`ZGemma SSH Web Terminal działa na http://127.0.0.1:${PORT}`);
});
