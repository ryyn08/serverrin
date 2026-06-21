#!/bin/bash
while true; do
    clear
    echo -e "\e[1;36m=== RYYN PROXY CONTROL PANEL ===\e[0m"
    echo -e "1. Jalankan Server"
    echo -e "2. Monitor Server (Real-time)"
    echo -e "3. Keluar"
    read -p "Pilih: " pilih
    case $pilih in
        1) node server.js ;;
        2) while true; do curl -s http://localhost:3000/server/1; echo ""; sleep 1; done ;;
        3) exit ;;
    esac
done
