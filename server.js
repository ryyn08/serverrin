const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

let servers = {
    1: { name: "Canada", ip: "98.142.250.14", ms: 40, active: true, cooldownEnd: 0 },
    2: { name: "Singapore", ip: "98.142.250.14", ms: 45, active: true, cooldownEnd: 0 },
    3: { name: "USA, LA", ip: "98.142.250.14", ms: 50, active: true, cooldownEnd: 0 },
    4: { name: "India, Hyderabad", ip: "172.67.162.58", ms: 42, active: true, cooldownEnd: 0 }
};

// Update Logic: ms berubah tiap detik & cek cooldown
setInterval(() => {
    const now = Date.now();
    for (let id in servers) {
        let s = servers[id];
        // Simulasi ms fluktuatif
        s.ms = Math.floor(Math.random() * 150); 
        
        if (s.ms > 100 && s.active) {
            s.active = false;
            s.cooldownEnd = now + (3 * 60 * 1000); // 3 menit
        } else if (!s.active && now > s.cooldownEnd) {
            s.active = true;
        }
    }
}, 1000);

app.get('/server/:id', (req, res) => res.json(servers[req.params.id] || { error: "Not Found" }));
app.listen(3000, () => console.log("Proxy Server Active on Port 3000"));
