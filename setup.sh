#!/bin/bash
pkg update && pkg upgrade -y
pkg install nodejs git curl -y
npm install express cors
chmod +x menu.sh
echo -e "\e[1;32mINSTALASI SELESAI. JALANKAN DENGAN ./menu.sh\e[0m"
